/** @format */

"use client";

import React, { useState } from "react";
import Link from "next/link";

const jobs = [
  {
    id: "1",
    title: "Hip Hop Instructor",
    company: "Dance Academy",
    location: "Vancouver, BC",
    postedDate: "March 8, 2025",
    description:
      "We are looking for a passionate and energetic Dance Instructor to join our team! As a Dance Instructor at Dance Academy, you'll have the opportunity to inspire students through the art of hip hop, share your creativity, and be part of a supportive and vibrant dance community.\nResponsibilities:\n• Lead fun and engaging hip hop classes for kids, teens, and/or adults\n• Choreograph routines for recitals, showcases, and community events\n• Encourage student growth in technique, confidence, and performance skills\n• Create a positive and inclusive classroom environment\nRequirements:\n• Dance training in hip hop (other street styles are a bonus!)\n• Previous teaching experience is an asset but not required\n• Energetic, professional, and passionate about working with students of all levels\nWhat We Offer:\n• Flexible hours and a supportive team environment\n• Creative freedom in class planning in class planning and choreography\n• Performance and community event opportunities\n• A chance to make an impact in the lives of aspiring dancers\nBring your energy, artistry, and leadership—we'd love to dance with you!",
  },
  {
    id: "2",
    title: "Jazz Choreographer",
    company: "Dinky Dance Crew",
    location: "Coquitlam, BC",
    postedDate: "March 17, 2025",
    description:
      "Share your passion for jazz and inspire the next generation of dancers!\nWe're looking for a creative and dedicated Jazz Choreographer to join our studio family. If you love teaching, creating exciting routines, and watching students grow in confidence and skill, we want to hear from you!\n\nResponsibilities:\n\nTeach jazz dance classes to kids, teens, and/or adults\n\nChoreograph show-stopping routines for recitals, competitions, and community events\n\nMentor students in technique, stage presence, and artistic expression\n\nFoster a positive, inclusive, and motivating class environment\n\nRequirements:\n\nDance training in jazz (knowledge of other styles is a plus)\n\nTeaching and choreography experience preferred\n\nEnergetic, encouraging, and passionate about working with dancers of all levels\n\nWhat We Offer:\n\nFlexible hours and a welcoming studio environment\n\nCreative freedom to design classes and choreography\n\nPerformance and community engagement opportunities\n\nA chance to make a meaningful impact in our vibrant dance community\n\nBring your talent, creativity, and leadership to our team—we'd love to dance with you!",
  },
  {
    id: "3",
    title: "Contemporary Dance Teacher",
    company: "Movement Arts Collective",
    location: "Surrey, BC",
    postedDate: "March 8, 2025",
    description:
      "Bring your artistry to life and inspire dancers through contemporary movement!\nWe're looking for a passionate and creative Contemporary Dance Instructor to join our studio team. If you love teaching, choreographing meaningful pieces, and helping students express themselves through dance, we'd love to meet you!\n\nResponsibilities:\n\nTeach contemporary dance classes for kids, teens, and/or adults\n\nChoreograph expressive routines for recitals, showcases, and community events\n\nSupport student growth in technique, creativity, and performance skills\n\nFoster a positive, inclusive, and encouraging class atmosphere\n\nRequirements:\n\nDance training in contemporary (modern and ballet experience is a plus)\n\nTeaching and choreography experience preferred\n\nPassionate, creative, and enthusiastic about working with students of all levels\n\nWhat We Offer:\n\nFlexible hours and a collaborative, supportive environment\n\nCreative freedom to design classes and choreographic works\n\nOpportunities to showcase your choreography at studio performances and events\n\nA chance to inspire and make an impact in a vibrant dance community\n\nBring your creativity, passion, and leadership—we'd love to dance with you!",
  },
  {
    id: "4",
    title: "Hip Hop Crew Choreographer",
    company: "Gravity Syndicate",
    location: "Vancouver, BC",
    postedDate: "May 4th 2025",
    description:
      "Urban Dance Crew is looking for an innovative and creative Choreographer to join our dynamic team.\nThe ideal candidate will have a strong background in urban dance styles, a passion for teaching, and a desire to create fresh, high-energy choreography that inspires both students and audiences.\n\nResponsibilities:\n\nTeach urban dance classes (hip hop, street styles, or fusion) for kids, teens, and/or adults\n\nChoreograph original routines for performances, competitions, and community events\n\nMentor students in developing technique, musicality, and stage presence\n\nFoster an inclusive, energetic, and positive learning environment\n\nCollaborate with fellow instructors on studio projects and performances\n\nRequirements:\n\nProven dance training in urban styles (hip hop, street dance, choreography experience preferred)\n\nTeaching or coaching experience is an asset\n\nCreative, collaborative, and passionate about inspiring dancers\n\nStrong leadership and communication skills\n\nWhat We Offer:\n\nFlexible scheduling and a supportive team environment\n\nCreative freedom to design classes and choreography\n\nPerformance and showcase opportunities to feature your work\n\nA chance to grow with a respected and vibrant dance community\n\nIf you're ready to bring your creativity, leadership, and passion to Urban Dance Crew, we'd love to dance with you!",
  },
];

function renderJobDescription(desc) {
  // Split into sections
  const sections = desc.split(
    /(Responsibilities:|Requirements:|What We Offer:)/g
  );
  let content = [];
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (
      ["Responsibilities:", "Requirements:", "What We Offer:"].includes(section)
    ) {
      // Section title
      content.push(
        <h3
          key={section + i}
          style={{
            fontSize: 18,
            fontWeight: 700,
            marginTop: 20,
            marginBottom: 8,
          }}
        >
          {section.replace(":", "")}
        </h3>
      );
      // Next section is the list
      const next = sections[i + 1] || "";
      // Split by bullet or newlines
      const items = next
        .split(/\n|•/)
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
      content.push(
        <ul
          key={section + "-ul" + i}
          style={{ marginTop: 0, marginBottom: 12, paddingLeft: 22 }}
        >
          {items.map((item, idx) => (
            <li
              key={section + "-li" + idx}
              style={{ fontSize: 16, marginBottom: 4 }}
            >
              {item}
            </li>
          ))}
        </ul>
      );
      i++; // skip next
    } else if (section.trim().length > 0) {
      // Regular paragraph
      content.push(
        <p key={"p" + i} style={{ fontSize: 16, marginBottom: 8 }}>
          {section.trim()}
        </p>
      );
    }
  }
  return content;
}

export default function JobDetailPage({ params }) {
  const { id } = React.use(params);
  const job = jobs.find((j) => j.id === id);
  const [bookmarked, setBookmarked] = useState(false);

  if (!job) {
    return (
      <div className="jobDetailContainer">
        <h1 className="jobDetailTitle">Job Not Found</h1>
        <p>No job found for ID: {id}</p>
      </div>
    );
  }

  return (
    <div className="jobDetailContainer">
      <Link href="/jobs" className="jobDetailBackButton">
        <img src="/back.png" alt="Back" className="jobDetailBackIcon" />
      </Link>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <h1 className="jobDetailTitle" style={{ margin: 0 }}>
          {job.title}
        </h1>
        <button
          onClick={() => setBookmarked((b) => !b)}
          className="jobDetailBookmarkButton"
          aria-label={bookmarked ? "Remove Bookmark" : "Add Bookmark"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <img
            src={bookmarked ? "/bookmarkFilled.png" : "/bookmark.png"}
            alt="Bookmark"
            width={28}
            height={"auto"}
            style={{ display: "block" }}
          />
        </button>
      </div>
      <div className="jobDetailCompany">{job.company}</div>
      <div className="jobDetailLocation">Location: {job.location}</div>
      <div className="jobDetailPosted">Posted: {job.postedDate}</div>
      <button
        className="jobDetailApplyButton"
        onClick={() => alert(`You have now applied for: ${job.title}`)}
      >
        Apply Now
      </button>
      <hr className="jobDetailDivider" />
      <h2 className="jobDetailSectionHeader">About this position</h2>
      <div className="jobDetailDescription">
        {renderJobDescription(job.description)}
      </div>
    </div>
  );
}
