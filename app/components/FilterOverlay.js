/** @format */

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./FilterOverlay.module.css";

const LOCATIONS = [
  "Vancouver",
  "Victoria",
  "Surrey",
  "Nanaimo",
  "Richmond",
  "Langley",
  "Burnaby",
  "Kelowna",
  "Coquitlam",
  "Abbotsford",
];
const DANCE_STYLES = [
  "Hip Hop",
  "Modern",
  "Ballet",
  "Ballroom",
  "Jazz",
  "Breakdance",
  "Contemporary",
  "Latin",
  "Tap",
  "Lyrical",
];

export default function FilterOverlay({ isOpen, onClose }) {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const router = useRouter();

  if (!isOpen) return null;

  const toggleLocation = (loc) => {
    setSelectedLocations((prev) =>
      prev.includes(loc) ? prev.filter((l) => l !== loc) : [...prev, loc]
    );
  };
  const toggleStyle = (style) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const handleApply = () => {
    const params = new URLSearchParams();
    if (selectedLocations[0]) params.append("location", selectedLocations[0]);
    if (selectedStyles[0]) params.append("style", selectedStyles[0]);
    const url = params.toString()
      ? `/jobs/filtered?${params.toString()}`
      : "/jobs/filtered";
    router.push(url);
    onClose();
  };

  return (
    <div className={styles.filterOverlay__container}>
      <div className={styles.filterOverlayBackdrop} onClick={onClose} />
      <div className={styles.filterOverlay}>
        <div className={styles.filterOverlay__headerRow}>
          <h2 className={styles.filterOverlay__heading}>Filter</h2>
          <button
            onClick={onClose}
            className={styles.filterOverlay__closeButton}
            aria-label="Close filter overlay"
          >
            ×
          </button>
        </div>
        <div className={styles.filterOverlay__sections}>
          <div>
            <span className={styles.filterOverlay__sectionLabel}>LOCATION</span>
            <div
              className={
                styles.filterOverlay__buttonGroup +
                " " +
                styles.filterOverlay__buttonGrid
              }
            >
              {LOCATIONS.map((loc) => (
                <button
                  key={loc}
                  className={
                    styles.filterOverlay__toggleButton +
                    (selectedLocations.includes(loc)
                      ? " " + styles.selected
                      : "")
                  }
                  onClick={() => toggleLocation(loc)}
                  type="button"
                >
                  <span className={styles.filterOverlay__radio}>
                    <span className={styles.filterOverlay__radioInner}></span>
                  </span>
                  {loc}
                </button>
              ))}
            </div>
          </div>
          <div>
            <span className={styles.filterOverlay__sectionLabel}>
              DANCE STYLE
            </span>
            <div
              className={
                styles.filterOverlay__buttonGroup +
                " " +
                styles.filterOverlay__buttonGrid
              }
            >
              {DANCE_STYLES.map((style) => (
                <button
                  key={style}
                  className={
                    styles.filterOverlay__toggleButton +
                    (selectedStyles.includes(style)
                      ? " " + styles.selected
                      : "")
                  }
                  onClick={() => toggleStyle(style)}
                  type="button"
                >
                  <span className={styles.filterOverlay__radio}>
                    <span className={styles.filterOverlay__radioInner}></span>
                  </span>
                  {style}
                </button>
              ))}
            </div>
          </div>
        </div>
        <button
          className={styles.filterOverlay__applyButton}
          type="button"
          onClick={handleApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
