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
  {
    title: "Choreographer",
    company: "Dinky Dance Crew",
    location: "Coquitlam, BC",
    postedDate: "March 17, 2025",
    description:
      "Urban Dance Crew is looking for an innovative and creative Choreographer to join our dynamic team. The ideal candidate will have...",
    bookmarked: true,
  },
  {
    title: "Contemporary Dance Teacher",
    company: "Movement Arts Collective",
    location: "Surrey, BC",
    postedDate: "March 8, 2025",
    description:
      "We are looking for a passionate and energetic Dance Instructor to join our team! As a Dance Instructor...",
    bookmarked: false,
  },
  {
    title: "Elite Hip Hop Crew",
    company: "Gravity Syndicate",
    location: "Vancouver, BC",
    postedDate: "May 4th 2025",
    description:
      "Urban Dance Crew is looking for an innovative and creative Choreographer to join our dynamic team. The ideal candidate will have...",
    bookmarked: false,
  },
];

export default function JobsPage() {
  return (
    <main style={{ background: "rgb(255, 255, 255)" }}>
      <div
        style={{
          maxWidth: 440,
          width: "100%",
          marginInline: "auto",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 440,
            zIndex: 1000,
          }}
        >
          <HamburgerMenu />
        </div>
        <div style={{ height: 100 }} />
        {jobs.map((job, idx) => (
          <JobListingCard
            key={idx}
            {...job}
            onApply={() => alert(`Apply for ${job.title}`)}
            onBookmark={() => alert(`Bookmark ${job.title}`)}
          />
        ))}
      </div>
    </main>
  );
}
