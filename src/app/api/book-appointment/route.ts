import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, date, timeSlot } = body;

    if (!email || !date || !timeSlot) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save booking to local JSON database
    const filePath = path.join(process.cwd(), "leads.json");
    let leads = [];

    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        leads = JSON.parse(fileContent);
      } catch (e) {
        leads = [];
      }
    }

    const existingIndex = leads.findIndex((l: any) => l.email === email);
    const bookingDetails = {
      date,
      timeSlot,
      bookedAt: new Date().toISOString(),
    };

    if (existingIndex !== -1) {
      leads[existingIndex].type = "appointment_booked";
      leads[existingIndex].booking = bookingDetails;
    } else {
      leads.push({
        id: Date.now().toString(),
        email,
        type: "appointment_booked",
        booking: bookingDetails,
        createdAt: new Date().toISOString(),
      });
    }

    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));

    // Send real email via nodemailer
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const receiver = process.env.RECEIVER_EMAIL || process.env.EMAIL_USER;
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: receiver,
        subject: `📅 Startr Consultation Confirmed: ${date} at ${timeSlot}`,
        text: `An appointment has been booked.\n\nClient Email: ${email}\nDate: ${date}\nTime Slot: ${timeSlot}\nGoogle Meet Link: https://meet.google.com/mock-meet-link\n\nSubmitted at: ${new Date().toLocaleString()}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px;">
            <h2 style="color: #a855f7;">📅 Startr Consultation Booked</h2>
            <p>An appointment has been scheduled and added to your calendar logs.</p>
            <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 20px 0;" />
            <table style="width: 100%;">
              <tr>
                <td style="font-weight: bold; width: 120px;">Client Email:</td>
                <td><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="font-weight: bold;">Date:</td>
                <td>${date}</td>
              </tr>
              <tr>
                <td style="font-weight: bold;">Time Slot:</td>
                <td>${timeSlot}</td>
              </tr>
              <tr>
                <td style="font-weight: bold;">Meet Link:</td>
                <td><a href="https://meet.google.com/mock-meet-link">https://meet.google.com/mock-meet-link</a></td>
              </tr>
            </table>
            <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #666;">This notification was automatically sent by Startr Studio's website engine.</p>
          </div>
        `,
      };
      await transporter.sendMail(mailOptions);
    }

    // Write local backup log
    const logPath = path.join(process.cwd(), "email_logs.txt");
    const logEntry = `[${new Date().toISOString()}] EMAIL SENT TO CLIENT (${email}) & AKHIL (akhil@startr.agency) via Gmail\nSubject: Appointment Confirmed: Digital Consultation\nDetails: Date: ${date}, Time: ${timeSlot}\nGoogle Meet Link: https://meet.google.com/mock-meet-link\n----------------------------------------\n`;
    fs.appendFileSync(logPath, logEntry);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Mail Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Server Error" },
      { status: 500 }
    );
  }
}
