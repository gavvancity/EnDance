"use client";

import React from "react";
import {
  FiMenu,
  FiBookmark,
  FiChevronRight,
  FiMessageCircle,
  FiPlus,
} from "react-icons/fi";
import Image from "next/image";

const jobs = [
  {
    title: "Jazz Choreographer",
    org: "Dinky Dance Crew Studios",
    location: "Coquitlam, BC",
    posted: "Posted March 18th",
    button: "Apply Now",
  },
  {
    title: "Elite Hip Crew",
    org: "Gravity Syndic Vancouver, BC",
    location: "Vancouver, BC",
    posted: "Posted March 3rd",
    button: null,
  },
];

const auditions = [
  {
    title: "Elite Hip Hop Crew",
    org: "Gravity Syndicate Downtown LA",
    date: "May 4th 2025",
    posted: "Posted April 20th",
    button: "Audition",
  },
  {
    title: "Workshop",
    org: "Ballet School Vancouver, BC",
    date: "April 9th 2025",
    posted: "Posted April 20th",
    button: null,
  },
];

const highlights = [
  {
    img: "/placeholder-dancer1.jpg",
    user: "Emily Zhou",
    desc: "Principal dancer at Aurora Ballet Theatre",
    text: "So excited to share these new photos from my recent shoot with @firephotography!",
    likes: "1.2k",
    comments: "59",
    time: "3 days ago",
    avatar: "/placeholder-avatar1.jpg",
  },
  {
    img: "/placeholder-dancer2.jpg",
    user: "Jess Lee",
    desc: "Hip Hop Dance Choreographer",
    text: "As a choreographer, I love seeing my students grow and shine! Shoutout to the hip hop crew!",
    likes: "980",
    comments: "42",
    time: "March 3, 2025",
    avatar: "/placeholder-avatar2.jpg",
  },
];

const events = [
  {
    title: "Rhythms of the World",
    org: "Global Dance Collective",
    date: "May 15, 2025",
    location: "Toronto, ON",
    desc: "A multicultural dance extravaganza featuring performances from dance companies across the globe...",
    img: "/placeholder-event1.jpg",
    posted: null,
  },
  {
    title: "Breaking Boundaries",
    org: "Urban Flow Dance",
    date: "April 10, 2025",
    location: null,
    desc: "A festival featuring...",
    img: "/placeholder-event2.jpg",
    posted: null,
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#ede6f7] flex flex-col items-center">
      {/* Mobile Nav */}
      <div className="w-full max-w-md mx-auto flex items-center justify-between px-4 pt-4 pb-2 bg-[#ede6f7]">
        <button>
          <FiMenu className="h-7 w-7 text-black" />
        </button>
        <div className="flex items-center space-x-3">
          <button className="bg-[#7c5cff] rounded-full p-2">
            <FiPlus className="h-5 w-5 text-white" />
          </button>
          <button className="bg-[#fff] rounded-full p-2 border border-[#7c5cff] relative">
            <FiMessageCircle className="h-5 w-5 text-[#7c5cff]" />
            <span className="absolute -top-1 -right-1 bg-[#7c5cff] text-white text-xs rounded-full px-1.5 py-0.5">
              {" "}
            </span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full max-w-md mx-auto px-4 pb-8">
        {/* Greeting */}
        <h1 className="text-2xl font-bold mt-2 mb-4">
          Welcome back,
          <br />
          Alyssa!
        </h1>

        {/* Job Postings */}
        <SectionHeader title="Job Postings" />
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {jobs.map((job, i) => (
            <Card
              key={i}
              title={job.title}
              org={job.org}
              location={job.location}
              posted={job.posted}
              button={job.button}
            />
          ))}
        </div>

        {/* Audition Postings */}
        <SectionHeader title="Audition Postings" />
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {auditions.map((a, i) => (
            <Card
              key={i}
              title={a.title}
              org={a.org}
              location={a.date}
              posted={a.posted}
              button={a.button}
            />
          ))}
        </div>

        {/* Trending Highlights */}
        <SectionHeader title="Trending Highlights" />
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="min-w-[220px] bg-white rounded-xl shadow-sm p-2"
            >
              <div className="relative w-full h-32 rounded-lg overflow-hidden mb-2">
                <Image
                  src={h.img}
                  alt="highlight"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="h-7 w-7 rounded-full overflow-hidden bg-gray-200">
                  <Image src={h.avatar} alt="avatar" width={28} height={28} />
                </div>
                <div className="text-xs font-semibold">{h.user}</div>
              </div>
              <div className="text-xs text-gray-500 mb-1">{h.desc}</div>
              <div className="text-xs mb-1">{h.text}</div>
              <div className="flex items-center text-xs text-gray-400 space-x-3">
                <span>👍 {h.likes}</span>
                <span>💬 {h.comments}</span>
                <span>{h.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Events */}
        <SectionHeader title="Events" />
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {events.map((e, i) => (
            <div
              key={i}
              className="min-w-[220px] bg-white rounded-xl shadow-sm p-2"
            >
              <div className="relative w-full h-20 rounded-lg overflow-hidden mb-2">
                <Image src={e.img} alt="event" fill className="object-cover" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <div className="font-semibold text-sm leading-tight w-2/3 truncate">
                  {e.title}
                </div>
                <button>
                  <FiBookmark className="h-5 w-5 text-[#7c5cff]" />
                </button>
              </div>
              <div className="text-xs text-gray-500 mb-1">{e.org}</div>
              <div className="text-xs text-gray-500 mb-1">
                {e.date}
                {e.location && `, ${e.location}`}
              </div>
              <div className="text-xs text-gray-500 mb-1">{e.desc}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function SectionHeader({ title }) {
  return (
    <div className="flex items-center justify-between mt-6 mb-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      <button className="flex items-center text-xs text-gray-500 font-medium">
        See more <FiChevronRight className="ml-1 h-4 w-4" />
      </button>
    </div>
  );
}

function Card({ title, org, location, posted, button }) {
  return (
    <div className="min-w-[220px] bg-white rounded-xl shadow-sm p-3 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-1">
          <div className="font-semibold text-base leading-tight w-2/3 truncate">
            {title}
          </div>
          <button>
            <FiBookmark className="h-5 w-5 text-[#7c5cff]" />
          </button>
        </div>
        <div className="text-xs text-gray-500 mb-1 truncate">{org}</div>
        <div className="text-xs text-gray-500 mb-1 truncate">{location}</div>
        <div className="text-xs text-gray-400 mb-2">{posted}</div>
      </div>
      {button && (
        <button className="bg-[#7c5cff] text-white text-xs font-semibold rounded-full px-4 py-1 mt-1 self-end">
          {button}
        </button>
      )}
    </div>
  );
}
