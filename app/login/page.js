// This file will be moved to /login/page.js for proper Next.js routing.
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);
    setTimeout(() => {
      router.push("/login-success");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ede6f7]">
      <div className="w-[440px] h-[100vh] bg-white rounded-xl shadow p-8 flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6 w-full">
          <div className="flex flex-col items-center w-full">
            <img
              src="/EnDance-Logo-Purple.svg"
              alt="EnDance Logo"
              className="w-24 sm:w-32 h-auto mb-1 mx-auto"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <img
              src="/endance-logo-text.svg"
              alt="EnDance Logo Text"
              className="w-40 sm:w-56 h-auto mx-auto"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <form className="w-full flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="alyssa144@gmail.com"
            className="w-full border border-[#8d6ac8] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8d6ac8]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="********"
            className="w-full border border-[#8d6ac8] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8d6ac8]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <a
            href="#"
            className="text-xs text-[#8d6ac8] underline mb-2 self-start"
          >
            Forgot my password
          </a>
          <button
            type="submit"
            disabled={!email || !password || loading}
            className={`w-full rounded-full py-3 mt-2 text-white font-semibold transition-colors ${
              email && password && !loading
                ? "bg-[#8d6ac8] hover:bg-[#7c5cff]"
                : "bg-[#cbb7ec] cursor-not-allowed"
            }`}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
        <div className="w-full border-t border-gray-200 my-6"></div>
        <div className="text-xs text-center text-gray-500">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-[#7c5cff] font-semibold underline">
            Register Now!
          </a>
        </div>
      </div>
    </div>
  );
}
