/** @format */

"use client";

import React, { useState } from "react";
import JobListingCard from "@/app/components/JobListingCard";
import HamburgerMenu from "@/app/components/hamburgerMenu/HamburgerMenu";
import FilterOverlay from "@/app/components/FilterOverlay";
import Link from "next/link";
import Styles from "@/app/globals.css";

const initialJobs = [
  {
    id: "1",
    title: "Hip Hop Instructor",
    company: "Dance Academy",
    location: "Vancouver, BC",
    postedDate: "March 8, 2025",
    description:
      "We are looking for a passionate and energetic Dance Instructor to join our team! As a Dance Instructor at Dance Academy...",
    bookmarked: false,
  },
  {
    id: "2",
    title: "Jazz Choreographer",
    company: "Dinky Dance Crew",
    location: "Coquitlam, BC",
    postedDate: "March 17, 2025",
    description:
      "We're looking for a creative and dedicated Jazz Choreographer to join our studio family. If you love teaching, creating exciting routines...",
    bookmarked: false,
  },
  {
    id: "3",
    title: "Contemporary Dance Teacher",
    company: "Movement Arts Collective",
    location: "Surrey, BC",
    postedDate: "March 8, 2025",
    description:
      "Looking for a passionate and creative Contemporary Dance Instructor to join our studio team. If you love teaching, choreographing...",
    bookmarked: false,
  },
  {
    id: "4",
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
  const [showFilterOverlay, setShowFilterOverlay] = useState(false);

  const handleBookmark = (idx) => {
    setJobs((prevJobs) =>
      prevJobs.map((job, i) =>
        i === idx ? { ...job, bookmarked: !job.bookmarked } : job
      )
    );
  };

  return (
    <main className="jobsMain">
      <div className="jobsContainer">
        <div className="jobsHamburgerFixed">
          <HamburgerMenu />
        </div>
        <div className="jobsHamburgerSpacer" />
        {/* Top Bar: Search, Plus, Chat */}
        <div className="jobsTopBar">
          <div className="jobsSearchBar">
            <img
              src="/searchicon.png"
              alt="Search"
              className="jobsSearchIcon"
            />
            <input
              type="text"
              placeholder="Search"
              className="jobsSearchInput"
            />
          </div>
          <button className="jobsPlusButton">
            <img
              src="/createpost.png"
              alt="Create Post"
              className="jobsCreatePostIcon"
            />
          </button>
          <div style={{ position: "relative" }}>
            <button className="jobsMessagesButton">
              <img
                src="/messages.png"
                alt="Messages"
                className="jobsMessagesIcon"
              />
            </button>
          </div>
        </div>
        {/* Tabs */}
        <div className="jobsTabs">
          <button className="jobsTab jobsTabSelected">
            <img
              src="/jobtab.png"
              alt="Jobs"
              style={{ width: 18, height: 18 }}
            />
            Job Listings
          </button>
          <button className="jobsTab">
            <img
              src="/auditiontab.png"
              alt="Auditions"
              style={{ width: 18, height: 18 }}
            />
            Auditions
          </button>
          <button className="jobsTab">
            <img
              src="/highlightstab.png"
              alt="Highlights"
              style={{ width: 18, height: 18 }}
            />
            Highlights
          </button>
          <button className="jobsTab">
            <img
              src="/eventstab.png"
              alt="Events"
              style={{ width: 18, height: 18 }}
            />
            Events
          </button>
        </div>
        {/* Sub-tabs */}
        <div className="jobsSubtabs">
          <button className="jobsSubtab jobsSubtabSelected">All</button>
          <button className="jobsSubtab">Bookmarked</button>
        </div>
        {/* Filter Row */}
        <div
          className="jobsFilterRow"
          onClick={() => setShowFilterOverlay(true)}
          style={{ cursor: "pointer" }}
        >
          <img src="/filter.png" alt="Filter" className="jobsFilterIcon" />
          <span style={{ fontWeight: 500, fontSize: 25 }}>Filter</span>
        </div>
        <div className="jobsCardsContainer">
          {jobs.map((job, idx) => (
            <Link
              key={job.id}
              href={`/jobs/${job.id}`}
              className="jobsCardLink"
            >
              <JobListingCard
                {...job}
                className="jobsCardFullWidth"
                onApply={() => alert(`Apply for ${job.title}`)}
                onBookmark={(e) => {
                  e.preventDefault();
                  handleBookmark(idx);
                }}
              />
            </Link>
          ))}
        </div>
        <FilterOverlay
          isOpen={showFilterOverlay}
          onClose={() => setShowFilterOverlay(false)}
        />
      </div>
    </main>
  );
}
