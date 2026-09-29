"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { Gear } from "./gear/gear";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Segment>(Segment.GEAR);

  return (
    <div className={styles.page}>
      <nav className={styles.segment_control}>
        <button
          className={determineSegmentStyle(activeTab, Segment.GEAR)}
          onClick={() => setActiveTab(Segment.GEAR)}
        >
          {Segment.GEAR}
        </button>
        <button
          className={determineSegmentStyle(activeTab, Segment.VIBE)}
          onClick={() => setActiveTab(Segment.VIBE)}
        >
          {Segment.VIBE}
        </button>
        <button
          className={determineSegmentStyle(activeTab, Segment.INFO)}
          onClick={() => setActiveTab(Segment.INFO)}
        >
          {Segment.INFO}
        </button>
      </nav>

      {getSegmentContent(activeTab)}

    </div>
  );
}

function determineSegmentStyle(activeTab: string, segment: string): string {
  return activeTab === segment
    ? styles.segment + " " + styles.segment_active
    : styles.segment;
}

function getSegmentContent(activeTab: Segment){
  switch (activeTab) {
    case Segment.GEAR:
      return <Gear />;
    case Segment.VIBE:
      return;
    case Segment.INFO:
      return;
  
    default:
      break;
  }
}

const Segment = {
  GEAR: "GEAR",
  VIBE: "VIBE",
  INFO: "INFO",
} as const;

type Segment = (typeof Segment)[keyof typeof Segment]; // still need to understand this one