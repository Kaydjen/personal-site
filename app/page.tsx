"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const segment_1 = "GEAR";
  const segment_2 = "VIBE";
  const segment_3 = "INFO";


  const [activeTab, setActiveTab] = useState("GEAR");

  return (
    <div className={styles.page}>
      <nav className={styles.navv}>
        <button className={styles.tab} onClick={() => setActiveTab(segment_1)}>
          {segment_1}
        </button>
        <button className={styles.tab} onClick={() => setActiveTab(segment_2)}>
          {segment_2}
        </button>
        <button className={styles.tab} onClick={() => setActiveTab(segment_3)}>
          {segment_3}
        </button>
      </nav>
      <nav className={styles.page}>{activeTab}</nav>
    </div>
  );
}
