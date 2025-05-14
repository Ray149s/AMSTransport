import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "../shared/schema";
import { log } from "./vite";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body against our schema
      const formData = contactFormSchema.parse(req.body);
      
      // Log the submission (in a real app, you'd likely send an email or store in a database)
      log(`Contact form submission received from ${formData.name} (${formData.email})`);
      
      // In production, you would handle the form data (e.g., send email, store in DB)
      // For now, we'll just acknowledge receipt
      
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
