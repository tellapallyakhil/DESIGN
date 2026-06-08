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
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Save lead to local JSON database
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

    const newLead = {
      id: Date.now().toString(),
      email,
      type: "audit_request",
      createdAt: new Date().toISOString(),
    };

    leads.push(newLead);
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));

    // Send real email via nodemailer
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const receiver = process.env.RECEIVER_EMAIL || process.env.EMAIL_USER;
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: receiver,
        subject: "⚡ New Startr Studio Lead: Free Speed & SEO Audit Requested",
        text: `You have received a new free audit request from your website.\n\nLead Email: ${email}\n\nSubmitted at: ${new Date().toLocaleString()}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px;">
            <h2 style="color: #ff2d78;">⚡ New Startr Studio Lead</h2>
            <p>A user has requested a free Core Web Vitals speed & SEO audit.</p>
            <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 20px 0;" />
            <table style="width: 100%;">
              <tr>
                <td style="font-weight: bold; width: 120px;">Lead Email:</td>
                <td><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="font-weight: bold;">Submitted:</td>
                <td>${new Date().toLocaleString()}</td>
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
    const logEntry = `[${new Date().toISOString()}] EMAIL SENT TO AKHIL (akhil@startr.agency) via Gmail\nSubject: New Free Audit Request\nLead Email: ${email}\n----------------------------------------\n`;
    fs.appendFileSync(logPath, logEntry);

    return NextResponse.json({ success: true, leadId: newLead.id });
  } catch (error: any) {
    console.error("Mail Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Server Error" },
      { status: 500 }
    );
  }
}
