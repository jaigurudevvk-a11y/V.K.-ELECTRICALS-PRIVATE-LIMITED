import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, mobile, message } = await req.json();

    console.log("Contact form submission received:", {
      name,
      email,
      mobile,
      message,
    });

    // Validate required fields
    if (!name || !email || !mobile) {
      return Response.json(
        { success: false, message: "All required fields must be filled." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || "smtp.hostinger.com",
      port: parseInt(process.env.MAIL_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Verify transporter configuration
    await transporter.verify();
    console.log("Email server connection verified");

    // Email content for admin
    const adminMailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER, // Send to yourself
      replyTo: email, // Allow replying directly to the sender
      subject: `New Contact Form Submission: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #f97316;">
            <h3 style="color: #1e293b; margin-top: 0;">Message Details:</h3>
            <p style="color: #334155; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${
              message || "No message provided"
            }</p>
          </div>
          <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Name:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Email:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                <a href="mailto:${email}" style="color: #f97316; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Phone:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                <a href="tel:${mobile}" style="color: #f97316; text-decoration: none;">${mobile}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0;"><strong>Submitted:</strong></td>
              <td style="padding: 10px 0;">${new Date().toLocaleString(
                "en-IN",
                { timeZone: "Asia/Kolkata" }
              )} (IST)</td>
            </tr>
          </table>
        </div>
      `,
    };

    // Send email to admin
    await transporter.sendMail(adminMailOptions);

    // Optional: Send auto-response to the user
    const userMailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Thank you for contacting V.K. Electricals",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316;">Thank You for Contacting V.K. Electricals</h2>
          <p style="color: #334155; font-size: 16px; line-height: 1.6;">
            Dear ${name},
          </p>
          <p style="color: #334155; font-size: 16px; line-height: 1.6;">
            Thank you for reaching out to V.K. Electricals Pvt. Ltd. We have received your enquiry and one of our representatives will contact you within 24 hours.
          </p>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Your Enquiry Summary:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${mobile}</p>
            <p><strong>Message:</strong> ${message || "No message provided"}</p>
          </div>
          <p style="color: #334155; font-size: 16px; line-height: 1.6;">
            For immediate assistance, you can call us at:<br/>
            <strong>+91 93005 50509</strong> or <strong>+91 93294 50509</strong>
          </p>
          <p style="color: #64748b; font-size: 14px; margin-top: 30px;">
            Best regards,<br/>
            <strong>V.K. Electricals Team</strong><br/>
            <a href="mailto:dw4255895@gmail.com" style="color: #f97316;">dw4255895@gmail.com</a>
          </p>
        </div>
      `,
    };

    await transporter.sendMail(userMailOptions);

    console.log("Emails sent successfully");

    return Response.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Log specific error details
    if (error.code) {
      console.error("Error code:", error.code);
      console.error("Error command:", error.command);
    }

    return Response.json(
      {
        success: false,
        message:
          "Failed to send message. Please try again later or contact us directly.",
      },
      { status: 500 }
    );
  }
}
