/** @format */

"use client";

import React from "react";
import JobListingCard from "@/app/components/JobListingCard";
import HamburgerMenu from "@/app/components/hamburgerMenu/HamburgerMenu";
import Link from "next/link";
import Styles from "@/app/globals.css";
import { useSearchParams } from "next/navigation";

const allJobs = [
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

export default function FilteredJobsPage() {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const style = searchParams.get("style");

  let filteredJobs = allJobs;
  if (location) {
    filteredJobs = filteredJobs.filter((job) =>
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  }
  if (style) {
    filteredJobs = filteredJobs.filter((job) =>
      job.title.toLowerCase().includes(style.toLowerCase())
    );
  }

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
        {/* Filter Row with tags */}
        <div className="jobsFilterRow">
          <img src="/filter.png" alt="Filter" className="jobsFilterIcon" />
          <span className="filterLabel">Filter</span>
          {style && <span className="filterTag">{style}</span>}
          {location && <span className="filterTag">{location}</span>}
        </div>
        <div className="jobsCardsContainer">
          {filteredJobs.map((job) => (
            <Link
              key={job.id}
              href={`/jobs/${job.id}`}
              className="jobsCardLink"
            >
              <JobListingCard
                {...job}
                className="jobsCardFullWidth"
                onApply={() => alert(`Apply for ${job.title}`)}
                onBookmark={() => {}}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
