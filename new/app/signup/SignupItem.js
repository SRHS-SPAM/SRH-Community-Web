import Link from "next/link";
import styles from "./signup.module.css";

export default function SignupItem() {
    return (
        <form method="POST" name="signup" action="api/auth/signup">
            <div className={styles.signup_main}>
                <div className={styles.signup_stroke}>
                    <div className={styles.signup_box}>
                        <div className={styles.signup_h1}>회원가입</div>
                        <div className={styles.signup_id_box}>
                            <input
                                id="signup_email"
                                type="email"
                                placeholder="이메일"
                                name="email"
                                required
                            />
                            <input
                                id="signup_pwd"
                                type="password"
                                placeholder="비밀번호"
                                name="password"
                                required
                            />
                            <input
                                id="signup_id"
                                type="text"
                                placeholder="아이디"
                                name="id"
                            />
                            <input
                                id="signup_name"
                                type="text"
                                placeholder="이름"
                                name="name"
                                required
                            />
                            <input
                                id="signup_tel"
                                type="tel"
                                placeholder="전화번호"
                                name="tel"
                                required
                            />
                            <div className={styles.certification}>
                                <input
                                    id={styles.signup_cer}
                                    type="text"
                                    placeholder="인증번호 입력"
                                />
                                <div className={styles.cer_btn}>인증번호</div>
                            </div>
                            <div className={styles.student_info}>
                                <input
                                    id="ab"
                                    type="text"
                                    placeholder="학년"
                                    name="grade"
                                />
                                <input
                                    id="ab"
                                    type="text"
                                    placeholder="반"
                                    name="class"
                                />
                                <input
                                    id="ab"
                                    type="text"
                                    placeholder="번호"
                                    name="number"
                                />
                            </div>
                            <div className={styles.signup_login}>
                                <span>계정이 있으신가요?</span>
                                <Link href="/login">
                                    <span className={styles.sdl}>로그인</span>
                                </Link>
                            </div>
                            <button
                                type="submit"
                                className={styles.signup_button}
                            >
                                가입
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
