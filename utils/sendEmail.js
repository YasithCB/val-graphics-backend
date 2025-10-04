import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, text }) => {
    const transporter = nodemailer.createTransport({
        service: "gmail", // or use your custom SMTP
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: `"VAL Graphics" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        text,
    });
};

export default sendEmail;
