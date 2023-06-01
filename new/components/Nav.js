import Menubar from "@/components/Menubar";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Link from "next/link";
import styles from "./Nav.module.css";

export default async function Nav() {
    let session = await getServerSession(authOptions);
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
                    {session ? (
                        <div className={styles.home_login_2}>
                            {session.user.name}님 환영합니다.
                        </div>
                    ) : (
                        <Link href={"/login"}>
                            <div className={styles.home_login}>LOG IN</div>
                        </Link>
                    )}
                    <Menubar />
                </div>
            </div>
        </>
    );
}
