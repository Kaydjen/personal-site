import styles from "./vibe.module.css";

export function Vibe() {
  return (
    <div>
      <h2>
        <span className={styles.vibe_heading}>What I listen</span>
        <span className={styles.vibe_connector}> while </span>
        <span className={styles.vibe_heading}>reading</span>
      </h2>
    </div>
  );
}
