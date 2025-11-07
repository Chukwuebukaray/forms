import React from "react";

const PersonalDetails = ({ formData, handleInputChange }) => {
  return (
    <div>
      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-2">Step 1/3</p>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Basic Info</h2>
        <p className="text-gray-600">
          Tell us a bit about yourself to get started with your new account.
        </p>
      </div>
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="johndoe123@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mobile number <span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <div className="px-4 py-2 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-700 flex items-center">
              +234
            </div>
            <input
              required
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="1234567890"
              value={formData.mobile}
              onChange={handleInputChange}
              className="flex-1 px-4 py-2 rounded-r-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
