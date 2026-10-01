import styles from "./gear.module.css";

export function Gear() {
  return <nav className={styles.main}>{renderSpecs()}</nav>;
}

function renderSpecs() {
  return specs.map((spec) => (
    <div key={spec.name} className={styles.spec_row}>
      <span className={styles.name}>{spec.name}: </span>
      <span className={styles.value}>{spec.value}</span>
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
