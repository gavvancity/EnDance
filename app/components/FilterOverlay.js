import React from "react";
import styles from "./FilterOverlay.module.css";

export default function FilterOverlay({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.filterOverlay}>
      <button
        onClick={onClose}
        className={styles.filterOverlay__closeButton}
        aria-label="Close filter overlay"
      >
      </button>
      <h2 className={styles.filterOverlay__heading}>Filter</h2>
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
            <button className={styles.filterOverlay__toggleButton}>
              Vancouver
            </button>
            <button className={styles.filterOverlay__toggleButton}>
              Victoria
            </button>
            <button className={styles.filterOverlay__toggleButton}>
              Surrey
            </button>
            <button className={styles.filterOverlay__toggleButton}>
              Nanaimo
            </button>
            <button className={styles.filterOverlay__toggleButton}>
              Richmond
            </button>
            <button className={styles.filterOverlay__toggleButton}>
              Langley
            </button>
            <button className={styles.filterOverlay__toggleButton}>
              Burnaby
            </button>
            <button className={styles.filterOverlay__toggleButton}>
              Kelowna
            </button>
            <button className={styles.filterOverlay__toggleButton}>
              Coquitlam
            </button>
            <button className={styles.filterOverlay__toggleButton}>
              Abbotsford
            </button>
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
            <button className={styles.filterOverlay__toggleButton}>
              Hip Hop
            </button>
            <button className={styles.filterOverlay__toggleButton}>
              Modern
            </button>
            <button className={styles.filterOverlay__toggleButton}>
              Ballet
            </button>
            <button className={styles.filterOverlay__toggleButton}>
              Ballroom
            </button>
            <button className={styles.filterOverlay__toggleButton}>Jazz</button>
            <button className={styles.filterOverlay__toggleButton}>
              Breakdance
            </button>
            <button className={styles.filterOverlay__toggleButton}>
              Contemporary
            </button>
            <button className={styles.filterOverlay__toggleButton}>
              Latin
            </button>
            <button className={styles.filterOverlay__toggleButton}>Tap</button>
            <button className={styles.filterOverlay__toggleButton}>
              Lyrical
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
