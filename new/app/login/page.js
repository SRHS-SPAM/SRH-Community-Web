"use client";
import Arrow from "@/components/Arrow";
import Seo from "@/components/Seo";
import Link from "next/link";
import { useState } from "react";
import styles from "./login.module.css";

export default function loginin() {
    const [id, setId] = useState("");
    const onChange = (event) => {
        setId(event.target.value);
    };
    return (
        <>
            <Seo title="login" />
            <Arrow location="/" />
            <form method="GET" name="login">
                <div className={styles.main}>
                    <div className={styles.stroke}>
                        <div className={styles.box}>
                            <div className={styles.school_name}>
                                Seoul Robot <br />
                                <em>Highschool</em>
                            </div>
                            <div className={styles.id_box}>
                                <input
                                    id={styles.userid}
                                    type="text"
                                    value={id}
                                    placeholder="아이디"
                                    onChange={onChange}
                                />
                                <input
                                    id={styles.pwd}
                                    type="password"
                                    placeholder="비밀번호"
                                />
                                <div className={styles.id_check}>
                                    <input
                                        id={styles.idckb}
                                        type="checkbox"
                                        size="{10}"
                                    />
                                    <span className={styles.idsave}>
                                        로그인 정보 저장하기
                                    </span>
                                </div>
                                <div className={styles.login_button}>
                                    로그인
                                </div>
                            </div>
                            <div className={styles.more}>
                                <div className={styles.lost}>
                                    비밀번호를 잊으셨나요?
                                </div>
                                <Link href="/signup">
                                    <div className={styles.signup}>
                                        회원가입
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
