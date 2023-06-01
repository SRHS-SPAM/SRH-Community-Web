import Food from "@/components/Food";
import Nav from "@/components/Nav";
import Seo from "@/components/Seo";
import Link from "next/link";
import styles from "./page.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import CalendarMain from "@/components/CalendarMain";

export default function Home() {
    return (
        <>
            <Seo title="Home" description="info" />
            <Nav type="default" />
            <main>
                <div className={styles.school_name_main}>
                    <span className={styles.name_eng}>
                        <Link href={"/"}>
                            <div className={styles.school_logo}>
                                <img
                                    src="img/logo.png"
                                    width="150px"
                                    height="150px"
                                    alt="logo"
                                />
                            </div>
                        </Link>
                        Seoul Robot Highschool
                    </span>
                    <div className={styles.border}>
                        <div className={styles.line} />
                        <span className={styles.name_ko}>서울로봇고</span>
                        <div className={styles.line} />
                    </div>
                </div>
                <div className={styles.main_info}>
                    <div className={styles.mainbox}>
                        <div className={styles.notice}>
                            <div className={styles.notice_name}>주요 공지</div>
                        </div>
                        <Food />
                        <CalendarMain></CalendarMain>
                    </div>
                </div>
            </main>
        </>
    );
}
