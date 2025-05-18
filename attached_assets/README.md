# AMS Transportation Landing Pages Bundle

This bundle contains all the necessary files for integrating the AMS Transportation service landing pages into your main alwaysmovingsomething.com website.

## Updates
- All contact information now uses joe@alwaysmovingsomething.com as the primary email address
- Added React components and integration guide for React/Express implementation

## Contents

- `templates/` - Contains all HTML template files for the landing pages
- `static/` - Contains all static assets (CSS, JavaScript, images)
- `integration_guide.py` - Shows how to integrate these landing pages into your main Flask application

## Landing Pages Included

1. **Main Landing Page** - `/landing/services`
2. **Flatbed Service** - `/landing/services/flatbed`
3. **Van Service** - `/landing/services/van`
4. **Warehouse Relocation** - `/landing/services/warehouse-relocation`
5. **Freight Management** - `/landing/services/freight-management`
6. **Storage Containers** - `/landing/services/storage-containers`

## Integration Steps

1. Copy the `templates` folder to your main application's templates directory
2. Copy the `static` folder to your main application's static directory
3. Add the route definitions from `integration_guide.py` to your main Flask application
4. Modify the form submission endpoint to work with your existing database/email system
5. Test each landing page to ensure proper functionality

## Features

- Responsive design that works on mobile, tablet, and desktop
- Service-specific landing pages with relevant content and imagery
- Contact forms on each page that submit to a central endpoint
- Red, black, and white color scheme to match AMS Transportation branding
- Independent pages that can be directly accessed without navigation from the main site

## Key Files

- `templates/index.html` - Main landing page template
- `templates/flatbed.html` - Flatbed service landing page
- `templates/van.html` - Van service landing page
- `templates/warehouse-relocation.html` - Warehouse relocation landing page
- `templates/freight-management.html` - Freight management landing page
- `templates/storage-containers.html` - Storage containers landing page
- `static/css/styles.css` - Main stylesheet
- `static/js/script.js` - JavaScript functionality
- `static/images/` - All images used in the landing pages

## Form Handling

The landing pages use AJAX to submit form data to the endpoint `/landing/services/submit-form`. You'll need to adapt this endpoint in your main application to handle the form data appropriately (store in database, send email notifications, etc.).