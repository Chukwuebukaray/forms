import React from "react";

const Education = ({ formData, handleInputChange }) => {
  return (
    <div>
      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-2">Step 2/3</p>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Education</h2>
        <p className="text-gray-600">
          We want to know about your educational background.
        </p>
      </div>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="schoolName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            School/University Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            id="schoolName"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Where did you school?"
          />
        </div>

        <div>
          <label
            htmlFor="academicQualification"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Academic Qualification <span className="text-red-500">*</span>
          </label>
          <select
            required
            id="academicQualification"
            name="academicQualification"
            value={formData.academicQualification}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select academic qualification</option>
            <option value="ND">National Diploma</option>
            <option value="HND">Higher National Diploma</option>
            <option value="Bachelor's">Bachelor&apos;s Degree</option>
            <option value="Master's">Master&apos;s Degree</option>
            <option value="Doctorate">Doctorate</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="courseOfStudy"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Course of Study <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            id="courseOfStudy"
            name="courseOfStudy"
            value={formData.courseOfStudy}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="What did you study?"
          />
        </div>
      </form>
    </div>
  );
};

export default Education;
