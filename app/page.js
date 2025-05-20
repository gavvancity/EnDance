/** @format */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const onboardingData = [
  {
    title: "Opportunities Await",
    description:
      "Discover auditions, gigs, and exclusive opportunities tailored for dancers like you.",
  },
  {
    title: "Grow Your Network",
    description:
      "Collaborate, create, and grow your dance community — from local events to global stages.",
  },
  {
    title: "Stay In the Know",
    description:
      "Get real-time updates on auditions, workshops, and performances happening near you.",
  },
];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const nextStep = () => {
    if (step === onboardingData.length - 1) {
      router.push("/jobs");
    } else {
      setStep((prev) => Math.min(prev + 1, onboardingData.length - 1));
    }
  };
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));
  const skip = () => router.push("/jobs");

  const { title, description } = onboardingData[step];

  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6 bg-purple-50">
      <div className="w-full max-w-md">
        {/* Header Graphic Placeholder */}
        <div className="h-32 bg-purple-300 rounded-t-xl mb-6"></div>

        {/* Image Placeholder */}
        <div className="h-40 bg-gray-200 mb-6 rounded-xl"></div>

        {/* Text Content */}
        <h2 className="text-xl font-semibold text-center mb-2">{title}</h2>
        <p className="text-center text-gray-600 mb-6">{description}</p>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2 mb-6">
          {onboardingData.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === step ? "bg-purple-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          {step > 0 && (
            <button onClick={prevStep} className="text-purple-600">
              Back
            </button>
          )}
          <button onClick={skip} className="text-sm text-gray-500">
            Skip
          </button>
          <button
            onClick={nextStep}
            className="bg-purple-600 text-white px-4 py-2 rounded-full"
          >
            {step === onboardingData.length - 1 ? "Done" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
