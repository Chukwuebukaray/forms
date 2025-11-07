"use client";

import { useState } from "react";
import { User, Briefcase, UserCog, Circle } from "lucide-react";
import axios from "axios";
import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";
import Socials from "./components/Socials";
import BackgroundPattern from "./BackgroundPattern";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    schoolName: "",
    academicQualification: "",
    courseOfStudy: "",
    question: "",
    linkedinProfile: "",
    X: "",
  });

  const steps = [
    {
      id: 1,
      title: "Your personal details",
      subtitle: "Personal details of user",
      icon: User,
    },
    {
      id: 2,
      title: "Your education",
      subtitle: "User's educational background",
      icon: Briefcase,
    },
    {
      id: 3,
      title: "Your Socials",
      subtitle: "User's social media profiles",
      icon: UserCog,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.firstName.trim() !== "" &&
          formData.lastName.trim() !== "" &&
          formData.email.trim() !== "" &&
          formData.mobile.trim() !== ""
        );
      case 2:
        return (
          formData.schoolName.trim() !== "" &&
          formData.academicQualification.trim() !== "" &&
          formData.courseOfStudy.trim() !== ""
        );
      case 3:
        return formData.question.trim() !== "";
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (isStepValid() && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      toast.success("Form submitted successfully!");
      console.log("Success:", response.data);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        schoolName: "",
        academicQualification: "",
        courseOfStudy: "",
        question: "",
        linkedinProfile: "",
        X: "",
      });
      setCurrentStep(1);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <PersonalDetails
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </>
        );
      case 2:
        return (
          <>
            <Education
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </>
        );
      case 3:
        return (
          <>
            <Socials
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex md:justify-center md:items-center min-h-screen bg-[rgba(54,88,125,0.35)] font-sans w-full">
      <div className="flex max-w-[1440px] mx-auto w-full lg:w-[80%] md:h-[90vh] px-5">
        <div className="hidden  md:w-fit w-1/3 bg-[#1e3a8a] relative lg:overflow-hidden rounded-l-[50px] md:flex flex-col">
          <BackgroundPattern />

          <div className="relative z-10 flex flex-col h-full p-8">
            <div className="flex items-center gap-3 mb-12">
              <div className="relative">
                <Circle className="w-8 h-8 text-white" fill="white" />
                <Circle
                  className="w-8 h-8 text-white absolute -top-1 -right-1"
                  fill="none"
                  strokeWidth={2}
                />
              </div>
              <span className="text-white text-2xl font-semibold md:hidden lg:block">
                25th and Staffing
              </span>
            </div>

            <div className="flex-1 space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;

                return (
                  <div key={step.id} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                          isActive
                            ? "bg-white border-white"
                            : isCompleted
                            ? "bg-blue-400 border-blue-400"
                            : "bg-transparent border-blue-300"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            isActive ? "text-blue-800" : "text-blue-300"
                          }`}
                        />
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`w-0.5 h-16 mt-2 ${
                            isCompleted ? "bg-blue-400" : "bg-blue-300"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1 pt-2 md:hidden lg:block">
                      <h3
                        className={`font-semibold mb-1 ${
                          isActive ? "text-white" : "text-blue-300"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          isActive ? "text-blue-100" : "text-blue-200"
                        }`}
                      >
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="text-xs text-blue-200 mt-auto md:hidden lg:block">
              All rights reserved @25thandStaffing 2025
            </div>
          </div>
        </div>

        <div className="flex-1 bg-[#ebf2f6] md:rounded-r-[50px] p-5 lg:p-10 xl:px-30 xl:py-12 flex flex-col">
          <div className="flex-1">{renderStepContent()}</div>

          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-lg border ${
                currentStep === 1
                  ? "border-gray-300 text-gray-400 cursor-not-allowed"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              Back
            </button>
            <button
              onClick={currentStep < 3 ? handleNext : handleSubmit}
              disabled={!isStepValid()}
              className={`px-8 py-2 rounded-lg transition-colors ${
                isStepValid()
                  ? "bg-[#1e3a8a] text-white hover:bg-[#1e40af] cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {currentStep === 3 ? "Submit" : "Next"}
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
