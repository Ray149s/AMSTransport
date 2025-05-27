import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Terms of Service & Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Terms of Service</h2>
            <p>
              By using AMS Transportation services, you agree to the following terms...
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy Policy</h2>
            <p>
              We respect your privacy and are committed to protecting your personal data...
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h3>
            <ul>
              <li>Contact information (name, email, phone)</li>
              <li>Service request details</li>
              <li>Communication preferences</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h3>
            <p>
              We use your information to provide transportation services, respond to inquiries, and improve our services.
            </p>
            
            <p className="mt-8 text-sm text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;