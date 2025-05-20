/** @format */

import { Karla } from "next/font/google";
import "./globals.css";
import { BookmarkProvider } from "@/app/bookmarkedContext/BookmarkContext";

const karla = Karla({ subsets: ["latin"] });

export const metadata = {
  title: "EnDance",
  description: "Dance Community Platform",
  icons: {
    icon: [
      { url: "/endance-favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <BookmarkProvider>
          <div className="app-container">{children}</div>
        </BookmarkProvider>
      </body>
    </html>
  );
}
