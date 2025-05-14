/** @format */

"use client";

import React from "react";
import JobListingCard from "@/app/components/JobListingCard";
import HamburgerMenu from "@/app/components/hamburgerMenu/HamburgerMenu";

const jobs = [
  {
    title: "Hip Hop Instructor",
    company: "Dance Academy",
    location: "Vancouver, BC",
    postedDate: "March 8, 2025",
    description:
      "We are looking for a passionate and energetic Dance Instructor to join our team! As a Dance Instructor at Dance Academy...",
    bookmarked: false,
  },
];

export default function JobsPage() {
  return (
    <body style={{ background: "rgb(223, 223, 223)" }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <HamburgerMenu />
      </div>
      <div style={{ height: 100 }} />
      <div>
        {jobs.map((job, idx) => (
          <JobListingCard
            key={idx}
            {...job}
            onApply={() => alert(`Apply for ${job.title}`)}
            onBookmark={() => alert(`Bookmark ${job.title}`)}
          />
        ))}
      </div>
    </body>
  );
}
