/**
 * AMS Transportation Landing Pages - Express Endpoints
 * 
 * Add these routes to your Express backend to handle form submissions
 * from the landing pages.
 */

// Add this code to your Express server file

// Import required modules
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// Form validation middleware
const formValidation = [
  check('name').not().isEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Please provide a valid email'),
  check('phone').matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
    .withMessage('Please provide a valid phone number'),
  check('service').not().isEmpty().withMessage('Service selection is required'),
];

/**
 * Landing page form submission endpoint
 * POST /api/landing/services/submit-form
 */
router.post('/landing/services/submit-form', formValidation, async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Please correct the form errors and try again.',
      errors: errors.array()
    });
  }

  try {
    // Extract form data
    const { name, email, phone, service, message } = req.body;

    // Log the submission for debugging
    console.log('Form submission received:', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date()
    });

    // Here you would typically:
    // 1. Save the lead to your database
    // 2. Send email notification to your team
    // 3. Set up any necessary follow-up workflows

    // Example database code (using MongoDB/Mongoose):
    /*
    const newLead = new Lead({
      name,
      email,
      phone,
      service,
      message,
      source: 'landing_pages',
      created: new Date()
    });
    
    await newLead.save();
    */

    // Example email notification (using Nodemailer):
    /*
    const mailOptions = {
      from: 'joe@alwaysmovingsomething.com',
      to: 'joe@alwaysmovingsomething.com',
      subject: `New ${service} Service Request from Landing Page`,
      html: `
        <h2>New Service Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };
    
    await transporter.sendMail(mailOptions);
    */

    // Send success response
    return res.json({
      success: true,
      message: 'Thank you for your submission! We will contact you shortly.'
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.'
    });
  }
});

// Export the router
// module.exports = router;

// In your main server file, you would include this router like:
// const landingPageRoutes = require('./routes/landingPages');
// app.use('/api', landingPageRoutes);