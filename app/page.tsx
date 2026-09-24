import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <nav className={styles.navv}>
        <button>GEAR</button>
        <button>VIBE</button>
        <button>INFO</button>
      </nav>
    </div>
  );
}
