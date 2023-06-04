"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import styles from "./login.module.css";

export default function LoginPage() {
    const login = async (e) => {
        e.preventDefault();
        const id = e.target.id.value;
        const password = e.target.password.value;
        const response = await signIn("credentials", {
            id,
            password,
            redirect: true,
            callbackUrl: "http://localhost:3000/",
        });
    };
    return (
        <form method="POST" name="login" onSubmit={login}>
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
                                placeholder="아이디"
                                name="id"
                                required
                            />
                            <input
                                id={styles.pwd}
                                type="password"
                                placeholder="비밀번호"
                                name="password"
                                required
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
                            <button
                                type="submit "
                                className={styles.login_button}
                            >
                                로그인
                            </button>
                        </div>
                        <div className={styles.more}>
                            <div className={styles.lost}>
                                비밀번호를 잊으셨나요?
                            </div>
                            <Link href={"/agree"}>
                                <div className={styles.signup}>회원가입</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
