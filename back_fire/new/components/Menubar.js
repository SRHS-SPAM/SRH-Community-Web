"use client";
import { useState } from "react";
import Script from "next/script";
import styles from "./Menubar.module.css";
import { signOut } from "next-auth/react";

export default function Menubar() {
    const [open, setOpen] = useState(false);
    const onClick = () => setOpen((prop) => !prop);

    return (
        <>
            <div className={styles.bars} id="bar" onClick={onClick}>
                <i className="fa-solid fa-bars" />
            </div>
            <div
                className={styles.menubar}
                id="menubar_f"
                style={open ? { display: "flex" } : { display: "none" }}
            >
                <div className={styles.menu_top}>
                    <div className={styles.menubar_line}>
                        <div
                            className={styles.menubar_menuline}
                            onClick={onClick}
                        >
                            <div className={styles.menubar_menuline1} />
                            <div className={styles.menubar_menuline2} />
                            <div className={styles.menubar_menuline3} />
                        </div>
                    </div>
                </div>
                <div className={styles.menu_bottom}>
                    <div className={styles.menu_column}>마이페이지</div>
                    <div className={styles.menu_column}>설정</div>
                    <div className={styles.menu_column}>문의하기</div>
                    <button
                        className={styles.menu_column}
                        onClick={() => {
                            signOut();
                        }}
                    >
                        로그아웃
                    </button>
                </div>
            </div>
            <Script
                src="https://kit.fontawesome.com/75ea5a755a.js"
                crossOrigin="anonymous"
            ></Script>
        </>
    );
}
