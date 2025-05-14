/** @format */

import React from "react";

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
        <div>
          <div>
            <div>{title}</div>
            <div>{company}</div>
            <button onClick={onBookmark} aria-label={bookmarked ? "Remove Bookmark" : "Add Bookmark"}>
              {bookmarked ? (
                <span>Bookmarked</span>
              ) : (
                <span>Bookmark</span>
              )}
            </button>
          </div>
          <div>{location}</div>
          <div>Posted: {postedDate}</div>
          <button onClick={onApply}>Apply Now</button>
          <div>{description}</div>
        </div>
      );
    };
    
    export default JobListingCard;
    