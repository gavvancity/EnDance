"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
  const router = useRouter();

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));
  const skip = () => {
    router.push("/login");
  };
  const handleNext = () => {
    router.push("/login");
  };

  return (
    <div
      style={{
        width: 430,
        minHeight: "100vh",
        background: "#f3ecfa",
        margin: "0 auto",
        boxShadow: "0 0 24px 0 rgba(0,0,0,0.08)",
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
              marginTop: "64px",
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
          marginTop: "48px",
        }}
      >
        <h2 className="text-2xl font-semibold mb-2 text-center">
          {steps[step].title}
        </h2>
        <p className="text-gray-600 text-center mb-8">
          {steps[step].description}
        </p>
        {/* Progress and arrows */}
        <div className="flex items-center justify-center gap-4 mb-8 w-full">
          {/* Left arrow */}
          <button
            onClick={prevStep}
            disabled={step === 0}
            className={`flex items-center justify-center w-10 h-10 rounded-full ${
              step === 0
                ? "bg-violet-100 text-violet-300"
                : "bg-violet-100 text-violet-500 hover:bg-violet-200"
            } transition-colors`}
            style={{ boxShadow: "0 2px 8px 0 rgba(124,92,255,0.08)" }}
            aria-label="Previous"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          {/* Progress dots */}
          <div className="flex items-center gap-2">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  i === step ? "bg-violet-500" : "bg-violet-200"
                }`}
              />
            ))}
          </div>
          {/* Right arrow or Next button */}
          {step < steps.length - 1 ? (
            <button
              onClick={nextStep}
              className={`flex items-center justify-center w-10 h-10 rounded-full bg-violet-500 text-white hover:bg-violet-600 transition-colors`}
              style={{ boxShadow: "0 2px 8px 0 rgba(124,92,255,0.08)" }}
              aria-label="Next"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center justify-center px-8 h-10 rounded-full bg-violet-500 text-white font-semibold text-base hover:bg-violet-600 transition-colors ml-4"
              style={{ boxShadow: "0 2px 8px 0 rgba(124,92,255,0.08)" }}
            >
              Next
            </button>
          )}
        </div>
        <div className="w-full flex justify-end">
          <button onClick={skip} className="text-xs text-gray-400 underline">
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}
