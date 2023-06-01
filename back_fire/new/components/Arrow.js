import Link from "next/link";
import styles from "./Arrow.module.css";

export default function Arrow({ location }) {
    return (
        <>
            <Link href={location}>
                <div className={styles.arrow}>
                    <div className={styles.one} />
                    <div className={styles.two} />
                    <div className={styles.three} />
                </div>
            </Link>
        </>
    );
}
