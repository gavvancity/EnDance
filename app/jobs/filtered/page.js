/** @format */

"use client";

import React, { useState } from "react";
import JobListingCard from "@/app/components/JobListingCard";
import HamburgerMenu from "@/app/components/hamburgerMenu/HamburgerMenu";
import FilterOverlay from "@/app/components/FilterOverlay";
import Link from "next/link";
import Styles from "@/app/globals.css";
import { useSearchParams, useRouter } from "next/navigation";
import { useBookmarks } from "@/app/bookmarkedContext/BookmarkContext";

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
    keywords: ["Hip Hop", "Vancouver"],
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
    keywords: ["Hip Hop", "Vancouver"],
  },
  {
    id: "2",
    title: "Jazz Choreographer",
    company: "Dinky Dance Crew",
    location: "Coquitlam, BC",
    postedDate: "March 17, 2025",
    description:
      "We're looking for a creative and dedicated Jazz Choreographer to join our studio family...",
    bookmarked: false,
    keywords: ["Jazz", "Coquitlam"],
  },
  {
    id: "3",
    title: "Contemporary Dance Teacher",
    company: "Movement Arts Collective",
    location: "Surrey, BC",
    postedDate: "March 8, 2025",
    description:
      "Bring your artistry to life and inspire dancers through contemporary movement!...",
    bookmarked: false,
    keywords: ["Contemporary", "Surrey"],
  },
];

export default function FilteredJobsPage() {
  const [showFilterOverlay, setShowFilterOverlay] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { bookmarkedIds, toggleBookmark } = useBookmarks();
  // Support multiple keywords: /jobs/filtered?keywords=Hip%20Hop&keywords=Vancouver
  const keywords = searchParams.getAll("keywords");

  // If using old ?location=...&style=... params, add them to keywords
  const location = searchParams.get("location");
  const style = searchParams.get("style");
  let allSelected = [...keywords];
  if (location && !allSelected.includes(location)) allSelected.push(location);
  if (style && !allSelected.includes(style)) allSelected.push(style);

  // Filter jobs by keywords
  let filteredJobs = allJobs;
  if (allSelected.length > 0) {
    filteredJobs = allJobs.filter((job) =>
      allSelected.every((kw) =>
        job.keywords.map((k) => k.toLowerCase()).includes(kw.toLowerCase())
      )
    );
  }

  return (
    <main className="jobsMain">
      <div className="jobsContainer">
        <button
          className="jobDetailBackButton"
          onClick={() => router.back()}
          style={{ margin: "24px 0 0 0" }}
        >
          <img src="/back.png" alt="Back" className="jobDetailBackIcon" />
        </button>
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
          <button
            className="jobsPlusButton"
            onClick={() => alert("You are now brought to the Create Post page")}
          >
            <img
              src="/createpost.png"
              alt="Create Post"
              className="jobsCreatePostIcon"
            />
          </button>
          <div style={{ position: "relative" }}>
            <button
              className="jobsMessagesButton"
              onClick={() => alert("You are now brought to the Messages page")}
            >
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
          <button
            className="jobsTab jobsTabSelected"
            onClick={() =>
              alert("You are now brought to the Job Listings page")
            }
          >
            <img
              src="/jobtab.png"
              alt="Jobs"
              style={{ width: 18, height: 18 }}
            />
            Job Listings
          </button>
          <button
            className="jobsTab"
            onClick={() => alert("You are now brought to the Auditions page")}
          >
            <img
              src="/auditiontab.png"
              alt="Auditions"
              style={{ width: 18, height: 18 }}
            />
            Auditions
          </button>
          <button
            className="jobsTab"
            onClick={() => alert("You are now brought to the Highlights page")}
          >
            <img
              src="/highlightstab.png"
              alt="Highlights"
              style={{ width: 18, height: 18 }}
            />
            Highlights
          </button>
          <button
            className="jobsTab"
            onClick={() => alert("You are now brought to the Events page")}
          >
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
          <Link href="/jobs" className="jobsSubtab jobsSubtabSelected">
            All
          </Link>
          <Link href="/jobs/bookmarked" className="jobsSubtab">
            Bookmarked
          </Link>
        </div>
        {/* Filter Row with tags */}
        <div
          className="jobsFilterRow"
          onClick={() => setShowFilterOverlay(true)}
          style={{ cursor: "pointer" }}
        >
          <img src="/filter.png" alt="Filter" className="jobsFilterIcon" />
          <span className="filterLabel">Filter</span>
          {allSelected.map((kw) => (
            <span className="filterTag" key={kw}>
              {kw}
            </span>
          ))}
        </div>
        <div className="jobsCardsContainer">
          {filteredJobs.length === 0 ? (
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <p>No jobs found.</p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <Link
                key={job.id}
                href={`/jobs/${job.id}`}
                className="jobsCardLink"
              >
                <JobListingCard
                  {...job}
                  bookmarked={bookmarkedIds.includes(job.id)}
                  className="jobsCardFullWidth"
                  onApply={() => alert(`Apply for ${job.title}`)}
                  onBookmark={(e) => {
                    e.preventDefault();
                    toggleBookmark(job.id);
                  }}
                />
              </Link>
            ))
          )}
        </div>
        <FilterOverlay
          isOpen={showFilterOverlay}
          onClose={() => setShowFilterOverlay(false)}
        />
      </div>
    </main>
  );
}
