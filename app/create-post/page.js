/** @format */

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUpload from "../components/ImageUpload";
import TextArea from "../components/TextArea";
import Filter from "../components/Filter";
import Button from "../components/Button";
import styles from "./CreatePost.module.css";

//Success splash screen component shown after post creation
function PostCreatedSplash({ onContinue }) {
  return (
    <div className="splash-container">
      <h2 className="splash-title">Post Created!</h2>
      <div className="splash-button-wrapper">
        <Button onClick={onContinue}>Continue</Button>
      </div>
    </div>
  );
}

export default function CreatePost() {
  const router = useRouter();
  // State management for the create post page
  const [showSplash, setShowSplash] = useState(false); // Controls visibility of success splash
  const [selectedDance, setSelectedDance] = useState(""); // Currently selected dance style
  const [selectedLocation, setSelectedLocation] = useState(""); // Currently selected location

  // Available options for dropdowns
  const danceStyles = ["Ballet", "Jazz", "Ballroom", "Hip-Hop"];
  const locations = [
    "Vancouver",
    "Coquitlam",
    "Kelowna",
    "Burnaby",
    "Port Moody",
  ];

  // SVG icons for the filter dropdowns
  const locationIcon = (
    <svg
      width="14"
      height="20"
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 20C6.76667 20 6.56667 19.9333 6.4 19.8C6.23333 19.6667 6.10833 19.4917 6.025 19.275C5.70833 18.3417 5.30833 17.4667 4.825 16.65C4.35833 15.8333 3.7 14.875 2.85 13.775C2 12.675 1.30833 11.625 0.775 10.625C0.258333 9.625 0 8.41667 0 7C0 5.05 0.675 3.4 2.025 2.05C3.39167 0.683333 5.05 0 7 0C8.95 0 10.6 0.683333 11.95 2.05C13.3167 3.4 14 5.05 14 7C14 8.51667 13.7083 9.78333 13.125 10.8C12.5583 11.8 11.9 12.7917 11.15 13.775C10.25 14.975 9.56667 15.975 9.1 16.775C8.65 17.5583 8.275 18.3917 7.975 19.275C7.89167 19.5083 7.75833 19.6917 7.575 19.825C7.40833 19.9417 7.21667 20 7 20ZM7 16.425C7.28333 15.8583 7.6 15.3 7.95 14.75C8.31667 14.2 8.85 13.4667 9.55 12.55C10.2667 11.6167 10.85 10.7583 11.3 9.975C11.7667 9.175 12 8.18333 12 7C12 5.61667 11.5083 4.44167 10.525 3.475C9.55833 2.49167 8.38333 2 7 2C5.61667 2 4.43333 2.49167 3.45 3.475C2.48333 4.44167 2 5.61667 2 7C2 8.18333 2.225 9.175 2.675 9.975C3.14167 10.7583 3.73333 11.6167 4.45 12.55C5.15 13.4667 5.675 14.2 6.025 14.75C6.39167 15.3 6.71667 15.8583 7 16.425ZM7 9.5C7.7 9.5 8.29167 9.25833 8.775 8.775C9.25833 8.29167 9.5 7.7 9.5 7C9.5 6.3 9.25833 5.70833 8.775 5.225C8.29167 4.74167 7.7 4.5 7 4.5C6.3 4.5 5.70833 4.74167 5.225 5.225C4.74167 5.70833 4.5 6.3 4.5 7C4.5 7.7 4.74167 8.29167 5.225 8.775C5.70833 9.25833 6.3 9.5 7 9.5Z"
        fill="#816CC5"
      />
    </svg>
  );

  const danceIcon = (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1.5C11 2.33 10.33 3 9.5 3C8.67 3 8 2.33 8 1.5C8 0.67 8.67 0 9.5 0C10.33 0 11 0.67 11 1.5ZM5.5 3C4.67 3 4 3.67 4 4.5C4 5.33 4.67 6 5.5 6C6.33 6 7 5.33 7 4.5C7 3.67 6.33 3 5.5 3ZM11 10L10.22 7.75H13.18L15.34 6.67C15.71 6.5 15.86 6.04 15.67 5.67C15.6277 5.5811 15.568 5.50158 15.4944 5.43613C15.4209 5.37068 15.335 5.32063 15.2418 5.28894C15.1485 5.25724 15.0499 5.24455 14.9517 5.2516C14.8535 5.25865 14.7577 5.28531 14.67 5.33L13.85 5.74L13.36 4.9C13.07 4.25 12.36 3.88 11.66 4.04L9.19 4.57C8.5 4.72 8 5.35 8 6.07V6.77L5.57 8.39H5.58C5.5 8.46 5.39 8.55 5.33 8.67L4.44 10.44L2.66 11.33C2.29 11.5 2.14 11.97 2.33 12.34C2.42051 12.5174 2.57758 12.6517 2.76687 12.7135C2.95615 12.7754 3.16223 12.7597 3.34 12.67L5.56 11.56L6.6 9.5L8 11C7 14 0 18 0 18C0 18 4 20 9 20C14 20 18 18 18 18C18 18 13 14 11 10ZM13.85 9.09L13.53 9.25H12.33L12.39 9.41C12.91 10.44 13.67 11.5 14.5 12.44L13.97 9.03L13.85 9.09Z"
        fill="#816CC5"
      />
    </svg>
  );

  // Show success splash if post is created
  if (showSplash) {
    return <PostCreatedSplash onContinue={() => router.push("/jobs")} />;
  }

  return (
    <div className="create-post-container">
      <div className="create-post-content">
        {/* Header with back button and title */}
        <div className="header-row">
          <div
            className="back-button-container"
          >
            <svg
              width="14"
              height="23"
              viewBox="0 0 14 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7109 2.29529L2.62695 11.5905L11.7109 20.8857"
                stroke="black"
                strokeWidth="3.09841"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h2 className="create-post-header heading-main"
          onClick={() => router.push("/jobs")}>Create Post</h2>
        </div>

        {/* Image upload section */}
        <h3 className="add-image-title heading-main">Add Image</h3>
        <ImageUpload />

        {/* Caption input section */}
        <div className="create-captions-title heading-main">
          Create Captions
        </div>
        <TextArea placeholder="Type here..." />

        {/* Location filter dropdown */}
        <Filter
          icon={locationIcon}
          label={
            selectedLocation ? (
              <span className="filter-label">{selectedLocation}</span>
            ) : (
              <span className="filter-label">Add Location</span>
            )
          }
          dropdown
        >
          <div className={styles.dropdown}>
            {locations.map((location) => (
              <div
                key={location}
                className={`${styles.dropdownItem}${
                  selectedLocation === location ? " " + styles.selected : ""
                }`}
                onClick={() => setSelectedLocation(location)}
              >
                <span className={styles.dropdownIcon}>{locationIcon}</span>
                {location}
              </div>
            ))}
          </div>
        </Filter>

        {/* Dance style filter dropdown */}
        <Filter
          icon={danceIcon}
          label={
            selectedDance ? (
              <span className="filter-label">{selectedDance}</span>
            ) : (
              <span className="filter-label">Dance Style</span>
            )
          }
          dropdown
        >
          <div className={styles.dropdown}>
            {danceStyles.map((style) => (
              <div
                key={style}
                className={`${styles.dropdownItem}${
                  selectedDance === style ? " " + styles.selected : ""
                }`}
                onClick={() => setSelectedDance(style)}
              >
                <span className={styles.dropdownIcon}>{danceIcon}</span>
                {style}
              </div>
            ))}
          </div>
        </Filter>
      </div>

      {/* Fixed bottom button bar */}
      <div className="create-post-button-bar">
        <Button onClick={() => setShowSplash(true)}>Create Post</Button>
      </div>
    </div>
  );
}
