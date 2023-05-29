import Menubar from "@/components/Menubar";
import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
    return (
        <>
            <div className={styles.header_main}>
                <div className={styles.menu_main}>
                    <div className={styles.main_box}>
                        <span>공지사항</span>
                    </div>
                    <div className={styles.main_box}>
                        <span>급식</span>
                    </div>
                    <div className={styles.main_box}>
                        <span>커뮤니티</span>
                    </div>
                    <Link href="/calender">
                        <div className={styles.main_box}>
                            <span>캘린더</span>
                        </div>
                    </Link>
                </div>
                <div className={styles.date}>20XX.XX.XX (X)</div>
                <div className={styles.info}>
                    <Link href={"/login"}>
                        <div className={styles.home_login}>LOG IN</div>
                    </Link>
                    <Menubar />
                </div>
            </div>
        </>
    );
}
