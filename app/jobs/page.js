/** @format */

"use client";

import React, { useState } from "react";
import JobListingCard from "@/app/components/JobListingCard";
import HamburgerMenu from "@/app/components/hamburgerMenu/HamburgerMenu";

const initialJobs = [
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
    title: "Jazz Choreographer",
    company: "Dinky Dance Crew",
    location: "Coquitlam, BC",
    postedDate: "March 17, 2025",
    description:
      "Urban Dance Crew is looking for an innovative and creative Choreographer to join our dynamic team. The ideal candidate will have...",
    bookmarked: false,
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
    title: "Hip Hop Crew Choreographer",
    company: "Gravity Syndicate",
    location: "Vancouver, BC",
    postedDate: "May 4th 2025",
    description:
      "Urban Dance Crew is looking for an innovative and creative Choreographer to join our dynamic team. The ideal candidate will have...",
    bookmarked: false,
  },
];

export default function JobsPage() {
  const [jobs, setJobs] = useState(initialJobs);

  const handleBookmark = (idx) => {
    setJobs((prevJobs) =>
      prevJobs.map((job, i) =>
        i === idx ? { ...job, bookmarked: !job.bookmarked } : job
      )
    );
  };

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
            background: "rgb(255,255,255)",
          }}
        >
          <HamburgerMenu />
        </div>
        <div style={{ height: 100 }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            margin: "0 0 5px 0",
            padding: "0px",
          }}
        >
          <div
            style={{
              position: "relative",
              flex: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/searchicon.png"
              alt="Search"
              style={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-55%)",
                width: 22,
                height: 22,
                pointerEvents: "none",
              }}
            />
            <input
              type="text"
              placeholder="Search"
              style={{
                flex: 1,
                borderRadius: 5,
                border: "2px solid #616161",
                padding: "8px 20px 8px 40px",
                fontSize: 16,
                outline: "none",
              }}
            />
          </div>
          <button
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              marginLeft: "10px",
            }}
          >
            <img
              src="/createpost.png"
              alt="Create Post"
              style={{ width: 40, height: "auto" }}
            />
          </button>
          <div style={{ position: "relative" }}>
            <button
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
              }}
            >
              <img
                src="/messages.png"
                alt="Messages"
                style={{ width: 45, height: "auto" }}
              />
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 5,
            margin: "0 0 12px 0",
            padding: 0,
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}
        >
          <button
            style={{
              background: "#816cc5",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "8px 14px",
              fontWeight: 400,
              fontSize: 16,
              boxShadow: "0 2px 0 #6a4eea",
              cursor: "pointer",
              flexShrink: 0,
              marginRight: 5,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <img
              src="/jobtab.png"
              alt="Jobs"
              style={{ width: 18, height: 18 }}
            />
            Job Listings
          </button>
          <button
            style={{
              background: "#eee",
              color: "#888",
              border: "none",
              borderRadius: 10,
              padding: "8px 14px",
              fontWeight: 400,
              fontSize: 16,
              cursor: "pointer",
              flexShrink: 0,
              marginRight: 5,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <img
              src="/auditiontab.png"
              alt="Auditions"
              style={{ width: 18, height: 18 }}
            />
            Auditions
          </button>
          <button
            style={{
              background: "#eee",
              color: "#888",
              border: "none",
              borderRadius: 10,
              padding: "8px 14px",
              fontWeight: 400,
              fontSize: 16,
              cursor: "pointer",
              flexShrink: 0,
              marginRight: 5,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <img
              src="/highlightstab.png"
              alt="Highlights"
              style={{ width: 18, height: 18 }}
            />
            Highlights
          </button>
          <button
            style={{
              background: "#eee",
              color: "#888",
              border: "none",
              borderRadius: 10,
              padding: "8px 14px",
              fontWeight: 400,
              fontSize: 16,
              cursor: "pointer",
              flexShrink: 0,
              marginRight: 5,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <img
              src="/eventstab.png"
              alt="Events"
              style={{ width: 18, height: 18 }}
            />
            Events
          </button>
        </div>
        <div
          style={{
            display: "flex",
            margin: "0 0 16px 0",
            border: "2px solid #816cc5",
            borderRadius: 4,
            overflow: "hidden",
            fontWeight: 800,
            fontSize: 16,
          }}
        >
          <button
            style={{
              flex: 1,
              background: "#816cc5",
              color: "#fff",
              border: "none",
              padding: "10px 0",
              cursor: "pointer",
            }}
          >
            All
          </button>
          <button
            style={{
              flex: 1,
              background: "#fff",
              color: "#816cc5",
              border: "none",
              padding: "10px 0",
              cursor: "pointer",
            }}
          >
            Bookmarks
          </button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            margin: "0 0 8px 0",
            padding: 0,
          }}
        >
          <img
            src="/filter.png"
            alt="Filter"
            style={{ width: 24, height: 24, color: "transparent", padding: 0, cursor: "pointer" }}
          />
          <span style={{ fontWeight: 500, fontSize: 25 }}>Filter</span>
        </div>
        {jobs.map((job, idx) => (
          <JobListingCard
            key={idx}
            {...job}
            onApply={() => alert(`Apply for ${job.title}`)}
            onBookmark={() => handleBookmark(idx)}
          />
        ))}
      </div>
    </main>
  );
}
