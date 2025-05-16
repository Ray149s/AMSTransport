import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "../shared/schema";
import { log } from "./vite";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body against our schema
      const formData = contactFormSchema.parse(req.body);
      
      // Log the submission
      log(`Contact form submission received from ${formData.name} (${formData.email})`);
      
      // Create a test transport using the default SMTP transport
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'noreply@example.com', // this doesn't need to be real for testing
          pass: 'password123' // this doesn't need to be real for testing
        },
        tls: {
          rejectUnauthorized: false // Only use this for testing
        }
      });
      
      // Email content
      const mailOptions = {
        from: '"AMS Transportation Website" <noreply@example.com>',
        // Using joe@alwaysmovingsomething.com as the recipient
        to: 'joe@alwaysmovingsomething.com',
        subject: `New Contact Form Submission from ${formData.name}`,
        text: `
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          
          Message:
          ${formData.message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
        `
      };
      
      try {
        // For testing, we'll just log what would be sent and not actually attempt sending
        // since we don't have real SMTP credentials
        log('Would send email with the following details:');
        log(JSON.stringify(mailOptions, null, 2));
        
        /* Uncomment this in production with real credentials
        await transporter.sendMail(mailOptions);
        log('Email sent successfully'); 
        */
      } catch (emailError) {
        log(`Error sending email: ${emailError}`);
        // Don't fail the request if email sending fails
      }
      
      return res.status(200).json({
        success: true,
        message: "Thank you for your message. We'll get back to you soon."
      });
    } catch (error: any) {
      console.error("Contact form error:", error);
      return res.status(400).json({
        success: false,
        message: error.message || "Invalid form data"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
