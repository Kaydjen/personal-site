"use client";

import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const segment_1 = "GEAR";
  const segment_2 = "VIBE";
  const segment_3 = "INFO";

  const [activeTab, setActiveTab] = useState("GEAR");

  return (
    <div className={styles.page}>
      <nav className={styles.segment_control}>
        <button
          className={determineSegmentStyle(activeTab, segment_1)}
          onClick={() => setActiveTab(segment_1)}
        >
          {segment_1}
        </button>
        <button
          className={determineSegmentStyle(activeTab, segment_2)}
          onClick={() => setActiveTab(segment_2)}
        >
          {segment_2}
        </button>
        <button
          className={determineSegmentStyle(activeTab, segment_3)}
          onClick={() => setActiveTab(segment_3)}
        >
          {segment_3}
        </button>
      </nav>
      {activeTab === segment_1 ? (
        <div className={styles.general_segment_1}>{renderSpecs()}</div>
      ) : activeTab === segment_2 ? (
        "VIBE CONTEXT"
      ) : (
        "INFO CONTEXT"
      )}
    </div>
  );
}

function determineSegmentStyle(activeTab: string, segment: string): string {
  return activeTab === segment
    ? styles.segment + " " + styles.segment_active
    : styles.segment;
}

function renderSpecs() {
  return specs.map((spec) => (
    <div key={spec.name}>
      <span>{spec.name}: </span>
      <span>{spec.value}</span>
    </div>
  ));
}

const specs = [
  {
    name: "Workstation",
    value: "DELL Precision 7540",
  },
  {
    name: "OS",
    value: "Windows 11 Pro — Ghost Spectre Superlite SE",
  },
  {
    name: "CPU",
    value: "Intel Core i7-9750H (6/12, 2.60 GHz)",
  },
  {
    name: "RAM",
    value: "32 GB DDR4",
  },
  {
    name: "GPU",
    value: "NVIDIA Quadro T2000 (4 GB)",
  },
  {
    name: "Storage",
    value: "1 TB (2 × NVMe SSD Samsung по 512 GB)",
  },
  {
    name: "Audio",
    value: "FIFINE AmpliGame A8",
  },
  {
    name: "Headphones",
    value: "Koss Porta Pro",
  },
];
