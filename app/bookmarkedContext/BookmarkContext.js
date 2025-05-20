/** @format */

"use client";
import React, { createContext, useContext, useState } from "react";

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  const toggleBookmark = (id) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((bId) => bId !== id) : [...prev, id]
    );
  };

  const isBookmarked = (id) => bookmarkedIds.includes(id);

  return (
    <BookmarkContext.Provider
      value={{ bookmarkedIds, toggleBookmark, isBookmarked }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  return useContext(BookmarkContext);
}
