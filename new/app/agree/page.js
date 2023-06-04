import Arrow from "@/components/Arrow";
import Link from "next/link";
import styles from "./agree.module.css";
export default function Agree() {
    return (
        <div>
            <Arrow location={"/login"} />
            <form method="POST" name="login">
                <div className={styles.signup_main}>
                    <div className={styles.signup_stroke}>
                        <div className={styles.signup_box}>
                            <div className={styles.signup_h1}>회원가입</div>
                            <div className={styles.signup_id_box}>
                                <div className={styles.fsignupmain_1}>
                                    <div className={styles.fsignup_1}>
                                        대충 아주아주 긴 회원가입 약관을
                                        표시하기 위해 임시로 삽입하는 텍스트 아
                                        목아파 뒤지겠는데 체육 대회날 아침부터
                                        HTML 만지고 있는 모습이 정말로
                                        레전드다...체육 대회날 아침부터 HTML
                                        만지고 있는 모습이 정말로
                                        레전드다...체육 대회날 아침부터 HTML
                                        만지고 있는 모습이 정말로
                                        레전드다...체육 대회날 아침부터 HTML
                                        만지고 있는 모습이 정말로
                                        레전드다...체육 대회날 아침부터 HTML
                                        만지고 있는 모습이 정말로
                                        레전드다...체육 대회날 아침부터 HTML
                                        만지고 있는 모습이 정말로
                                        레전드다...체육 대회날 아침부터 HTML
                                        만지고 있는 모습이 정말로
                                        레전드다...체육 대회날 아침부터 HTML
                                        만지고 있는 모습이 정말로
                                        레전드다...체육 대회날 아침부터 HTML
                                        만지고 있는 모습이 정말로 레전드다...
                                    </div>
                                    <div className={styles.fsigncheck_1}>
                                        <div className={styles.fsigntxtbox}>
                                            약관을 읽어보았으며 이에 동의합니다.
                                        </div>
                                        <div className={styles.fsigncheckbox}>
                                            <input
                                                type="checkbox"
                                                className={styles.fsign_check}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.fsignupmain_1}>
                                    <div className={styles.fsignup_1}>
                                        대충 아주아주 긴 회원가입 약관을
                                        표시하기 위해 임시로 삽입하는 텍스트 아
                                        목아파 뒤지겠는데 체육 대회날 아침부터
                                        HTML 만지고 있는 모습이 정말로
                                        레전드다...체육 대회날 아침부터 HTML
                                        만지고 있는 모습이 정말로
                                        레전드다...체육 대회날 아침부터 HTML
                                        만지고 있는 모습이 정말로
                                        레전드다...체육 대회날 아침부터 HTML
                                        만지고 있는 모습이 정말로
                                        레전드다...체육 대회날 아침부터 HTML
                                        만지고 있는 모습이 정말로
                                        레전드다...체육 대회날 아침부터 HTML
                                        만지고 있는 모습이 정말로
                                        레전드다...체육 대회날 아침부터 HTML
                                        만지고 있는 모습이 정말로
                                        레전드다...체육 대회날 아침부터 HTML
                                        만지고 있는 모습이 정말로
                                        레전드다...체육 대회날 아침부터 HTML
                                        만지고 있는 모습이 정말로 레전드다...
                                    </div>
                                    <div className={styles.fsigncheck_1}>
                                        <div className={styles.fsigntxtbox}>
                                            약관을 읽어보았으며 이에 동의합니다.
                                        </div>
                                        <div className={styles.fsigncheckbox}>
                                            <input
                                                type="checkbox"
                                                className={styles.fsign_check}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link href={"/signup"}>
                                <div className={styles.signup_button}>확인</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
