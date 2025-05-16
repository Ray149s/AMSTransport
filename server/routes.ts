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
      
      // Create SMTP transport with real credentials
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Using TLS
        auth: {
          user: 'joe@alwaysmovingsomething.com',
          pass: 'Alw@ys6115$'
        }
      });
      
      // Email content
      const mailOptions = {
        from: '"AMS Transportation Website" <joe@alwaysmovingsomething.com>',
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
        // Send the email with the contact form details
        log('Sending email with the following details:');
        log(JSON.stringify(mailOptions, null, 2));
        
        // Using real credentials to send the email
        await transporter.sendMail(mailOptions);
        log('Email sent successfully');
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
