import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "../shared/schema";
import { log } from "./vite";
import nodemailer from "nodemailer";

// Define the landing form schema using the same structure as contactFormSchema
import { z } from "zod";

const landingFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  phone: z.string().min(1, "Phone number is required"),
  service: z.string(),
  message: z.string()
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body against our schema
      const formData = contactFormSchema.parse(req.body);
      
      // Log the submission
      log(`Contact form submission received from ${formData.name} (${formData.email})`);
      
      // Create SMTP transport with Google App Password
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Using TLS
        auth: {
          user: 'joe@alwaysmovingsomething.com',
          pass: 'jmcy zobr gaee dosp' // App Password specifically for this application
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

  // Landing pages form submission endpoint
  app.post("/api/landing/services/submit-form", async (req: Request, res: Response) => {
    try {
      // Validate the request body against our schema
      const formData = landingFormSchema.parse(req.body);
      
      // Log the submission
      log(`Landing page form submission received from ${formData.name} (${formData.email}) for ${formData.service} service`);
      
      // Create SMTP transport with Google App Password
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Using TLS
        auth: {
          user: 'joe@alwaysmovingsomething.com',
          pass: 'jmcy zobr gaee dosp' // App Password specifically for this application
        }
      });
      
      // Format service name for email subject
      let serviceName = formData.service;
      switch(formData.service) {
        case 'flatbed': serviceName = 'Flatbed Trucking'; break;
        case 'van': serviceName = 'Van Transportation'; break;
        case 'warehouse': serviceName = 'Warehouse Relocation'; break;
        case 'freight': serviceName = 'Freight Management'; break;
        case 'storage': serviceName = 'Storage Containers'; break;
        default: serviceName = formData.service;
      }
      
      // Email content
      const mailOptions = {
        from: '"AMS Transportation Website" <joe@alwaysmovingsomething.com>',
        to: 'joe@alwaysmovingsomething.com',
        subject: `New ${serviceName} Service Quote Request from ${formData.name}`,
        text: `
          Service: ${serviceName}
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          
          Message:
          ${formData.message}
        `,
        html: `
          <h2>New ${serviceName} Service Quote Request</h2>
          <p><strong>Service:</strong> ${serviceName}</p>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message ? formData.message.replace(/\n/g, '<br>') : 'No additional details provided.'}</p>
        `
      };
      
      try {
        // Send the email with the landing form details
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
        message: "Thank you for your request. Our team will contact you shortly with a quote."
      });
    } catch (error: any) {
      console.error("Landing form error:", error);
      return res.status(400).json({
        success: false,
        message: error.message || "Invalid form data"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
