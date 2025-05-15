

import React from "react";
import styles from "./JobListingCard.module.css";

const JobListingCard = ({
  title,
  company,
  location,
  postedDate,
  description,
  bookmarked,
  onApply,
  onBookmark,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <div className={styles.title}>{title}</div>
          <div className={styles.company}>{company}</div>
        </div>
        <button
          onClick={onBookmark}
          className={styles.bookmarkButton}
          aria-label={bookmarked ? "Remove Bookmark" : "Add Bookmark"}
        >
          <img
            src={bookmarked ? "/bookmarkFilled.png" : "/bookmark.png"}
            alt="Bookmark"
            width={15}
            height={"auto"}
            className={bookmarked ? styles.bookmarked : ""}
          />
        </button>
      </div>
      <div className={styles.location}>{location}</div>
      <div className={styles.postedDate}>Posted: {postedDate}</div>
      <button onClick={onApply} className={styles.applyButton}>
        Apply Now
      </button>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default JobListingCard;
