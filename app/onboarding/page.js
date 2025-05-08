"use client";
import { useState } from "react";

const steps = [
  {
    title: "Opportunities Await",
    description:
      "Discover auditions, gigs, and exclusive opportunities tailored for dancers like you.",
    // Placeholder for SVG
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

export default function OnboardingPage() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));
  const skip = () => {
    // TODO: Redirect to login or main app
  };

  return (
    <div
      style={{
        width: 430,
        minHeight: "100vh",
        background: "#f3ecfa",
        margin: "0 auto",
        boxShadow: "0 0 24px 0 rgba(0,0,0,0.08)", // optional, for device look
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      {/* SVG as header, full width, fixed height */}
      <div
        className="w-full flex flex-col items-center justify-start"
        style={{
          maxWidth: 430,
          margin: "0 auto",
          background: "#f3ecfa",
        }}
      >
        {/* Curtains at the very top */}
        <img
          src="/SVGs/curtains.svg"
          alt="Curtains"
          className="w-full"
          style={{ maxWidth: "100%", height: "auto", marginBottom: "-32px" }}
        />
        {/* Main onboarding illustration */}

        {step === 0 && (
          <img
            src="/SVGs/cabaret-pana.svg"
            alt="Opportunities Await"
            className="w-full"
            style={{
              maxWidth: "90%",
              height: "180px",
              objectFit: "contain",
              zIndex: 1,
              marginTop: "64px", // Increased spacing below curtains
            }}
          />
        )}
        {step === 1 && (
          <img
            src="/SVGs/grow-network.svg"
            alt="Grow Your Network"
            className="w-full"
            style={{
              maxWidth: "90%",
              height: "180px",
              objectFit: "contain",
              zIndex: 1,
              marginTop: "64px",
            }}
          />
        )}
        {step === 2 && (
          <img
            src="/SVGs/stay-connected.svg"
            alt="Stay In the Know"
            className="w-full"
            style={{
              maxWidth: "90%",
              height: "180px",
              objectFit: "contain",
              zIndex: 1,
              marginTop: "64px",
            }}
          />
        )}
      </div>

      {/* Content below SVG */}
      <div
        className="flex flex-col items-center w-full"
        style={{
          maxWidth: 430,
          margin: "0 auto",
          padding: "32px 16px 0 16px",
          marginTop: "48px", // Increased spacing below illustration
        }}
      >
        <h2 className="text-2xl font-semibold mb-2 text-center">
          {steps[step].title}
        </h2>
        <p className="text-gray-600 text-center mb-8">
          {steps[step].description}
        </p>
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`w-4 h-2 rounded-full transition-all duration-200 ${
                i === step ? "bg-violet-500" : "bg-violet-200"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between w-full mb-4">
          <button
            onClick={prevStep}
            disabled={step === 0}
            className="bg-violet-100 text-violet-500 px-6 py-3 rounded-full font-semibold disabled:opacity-30"
          >
            Back
          </button>
          <button
            onClick={nextStep}
            disabled={step === steps.length - 1}
            className="bg-violet-500 text-white px-6 py-3 rounded-full font-semibold ml-auto disabled:opacity-30"
          >
            {step === steps.length - 1 ? "Done" : "Next"}
          </button>
        </div>
        <button onClick={skip} className="text-xs text-gray-400 mt-2 underline">
          Skip
        </button>
      </div>
    </div>
  );
}
