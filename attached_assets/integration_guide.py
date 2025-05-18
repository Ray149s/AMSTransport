"""
AMS Transportation Landing Pages - Integration Guide

This file shows how to integrate these landing pages into your main alwaysmovingsomething.com Flask application.
Simply copy the routes and templates as shown below.
"""

# --- FOR REFERENCE ONLY - DO NOT COPY DIRECTLY ---
# This code is a reference for integration and may need to be adjusted to fit your existing application
# Already defined in your app:
# from flask import Flask, render_template, request, jsonify
# app = Flask(__name__)

# Copy these route definitions into your main Flask application, adjusting as needed:

@app.route('/landing/services')
def landing_home():
    """Main landing page route"""
    return render_template('index.html')

@app.route('/landing/services/flatbed')
def flatbed_service():
    """Flatbed service landing page"""
    return render_template('flatbed.html')

@app.route('/landing/services/van')
def van_service():
    """Van service landing page"""
    return render_template('van.html')

@app.route('/landing/services/warehouse-relocation')
def warehouse_relocation():
    """Warehouse relocation service landing page"""
    return render_template('warehouse-relocation.html')

@app.route('/landing/services/freight-management')
def freight_management():
    """Freight management service landing page"""
    return render_template('freight-management.html')

@app.route('/landing/services/storage-containers')
def storage_containers():
    """Storage containers service landing page"""
    return render_template('storage-containers.html')

@app.route('/landing/services/submit-form', methods=['POST'])
def submit_landing_form():
    """Form submission endpoint for landing pages"""
    if request.method == 'POST':
        # Process form data
        name = request.form.get('name')
        email = request.form.get('email')
        phone = request.form.get('phone')
        service = request.form.get('service')
        message = request.form.get('message')
        
        # Here you would typically:
        # 1. Save this information to your database
        # 2. Send email notification
        # 3. Log the submission
        
        return jsonify({
            'success': True, 
            'message': 'Thank you for your submission! We will contact you shortly.'
        })
    
    return jsonify({
        'success': False, 
        'message': 'Form submission failed. Please try again.'
    })

"""
INTEGRATION STEPS:

1. Copy the 'templates' folder to your main application's templates directory
   - These are standalone pages with their own styling

2. Copy the 'static' folder to your main application's static directory
   - Includes CSS, JavaScript, and images needed for the landing pages

3. Add the route definitions above to your main Flask application
   - All routes use the '/landing/services' prefix to keep them separate

4. Modify the form submission endpoint to work with your existing database/email system
   - The current endpoint returns a JSON response for AJAX form submission

5. Test each landing page to ensure proper functionality:
   - Main landing: /landing/services
   - Flatbed: /landing/services/flatbed
   - Van: /landing/services/van
   - Warehouse: /landing/services/warehouse-relocation
   - Freight: /landing/services/freight-management
   - Storage: /landing/services/storage-containers
"""