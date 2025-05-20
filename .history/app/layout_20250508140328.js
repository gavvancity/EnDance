/** @format */

import { Karla } from "next/font/google";
import "./globals.css";

const Karla = Karla({ subsets: ["latin"] });

export const metadata = {
  title: "EnDance",
  description: "Dance Community Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app-container">{children}</div>
      </body>
    </html>
  );
}
