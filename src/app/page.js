import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "@/components/Dashboard/Dashboard";


export default function Home() {
  return (
    <main className={styles.main}>
        <Dashboard />
    </main>
  );
}
