import React from "react";

const Socials = ({ formData, handleInputChange }) => {
  return (
    <div>
      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-2">Step 3/3</p>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Socials</h2>
        <p className="text-gray-600">We would like to reach out to you.</p>
      </div>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Are you open to us going through your social media?{" "}
            <span className="text-red-500">*</span>
          </label>
          <select
            required
            id="question"
            name="question"
            value={formData.question}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select your response</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="linkedinProfile"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            LinkedIn Profile
          </label>
          <input
            type="text"
            id="linkedinProfile"
            name="linkedinProfile"
            value={formData.linkedinProfile}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://www.linkedin.com/in/your-profile"
          />
        </div>
        <div>
          <label
            htmlFor="X"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            X Account
          </label>
          <input
            type="text"
            id="X"
            name="X"
            value={formData.X}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your X handle"
          />
        </div>
      </form>
    </div>
  );
};

export default Socials;
