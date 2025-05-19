/** @format */

"use client";

import React from "react";
import JobListingCard from "@/app/components/JobListingCard";
import HamburgerMenu from "@/app/components/hamburgerMenu/HamburgerMenu";
import Link from "next/link";
import Styles from "@/app/globals.css";
import { useBookmarks } from "@/app/bookmarkedContext/BookmarkContext";

const jobs = [
  {
    id: "1",
    title: "Hip Hop Instructor",
    company: "Dance Academy",
    location: "Vancouver, BC",
    postedDate: "March 8, 2025",
    description:
      "We are looking for a passionate and energetic Dance Instructor to join our team! As a Dance Instructor at Dance Academy...",
  },
  {
    id: "2",
    title: "Jazz Choreographer",
    company: "Dinky Dance Crew",
    location: "Coquitlam, BC",
    postedDate: "March 17, 2025",
    description:
      "We're looking for a creative and dedicated Jazz Choreographer to join our studio family...",
  },
  {
    id: "3",
    title: "Contemporary Dance Teacher",
    company: "Movement Arts Collective",
    location: "Surrey, BC",
    postedDate: "March 8, 2025",
    description:
      "Looking for a passionate and creative Contemporary Dance Instructor to join our studio team. If you love teaching, choreographing...",
  },
];

export default function BookmarkedJobsPage() {
  const { bookmarkedIds, toggleBookmark } = useBookmarks();
  const bookmarkedJobs = jobs.filter((job) => bookmarkedIds.includes(job.id));

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
          <Link href="/jobs" className="jobsSubtab">
            All
          </Link>
          <Link
            href="/jobs/bookmarked"
            className="jobsSubtab jobsSubtabSelected"
          >
            Bookmarked
          </Link>
        </div>
        <div className="jobsCardsContainer">
          {bookmarkedJobs.length === 0 ? (
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <p>No bookmarked jobs found.</p>
            </div>
          ) : (
            bookmarkedJobs.map((job) => (
              <Link
                key={job.id}
                href={`/jobs/${job.id}`}
                className="jobsCardLink"
              >
                <JobListingCard
                  {...job}
                  bookmarked={true}
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
      </div>
    </main>
  );
}
