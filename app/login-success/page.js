"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginSuccess() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#8d6ac8]">
      <div className="flex flex-col items-center">
        <img
          src="/endance-logo-white.svg"
          alt="EnDance Logo"
          className="h-24 mb-8 w-auto mx-auto"
        />
        <h1 className="text-3xl font-bold text-white mb-4 text-center">
          Welcome back!
        </h1>
        <p className="text-xl text-white text-center">
          Time to make
          <br />
          your next move.
        </p>
      </div>
    </div>
  );
}
