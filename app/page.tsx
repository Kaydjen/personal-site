"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <nav className={styles.navv}>
        <button className={styles.tab} onClick={() => console.log("GEAR clicked")}>GEAR</button>
        <button className={styles.tab}>VIBE</button>
        <button className={styles.tab}>INFO</button>
      </nav>
    </div>
  );
}
