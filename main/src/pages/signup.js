import Arrow from "@/components/Arrow";
import Seo from "@/components/Seo";
import Link from "next/link";

export default function Signup() {
    return (
        <>
            <Seo title="Signup" />
            <Arrow location="/login" />
            <form method="post" name="signup">
                <div className="signup_main">
                    <div className="signup_stroke">
                        <div className="signup_box">
                            <div className="signup_h1">회원가입</div>
                            <div className="signup_id_box">
                                <input
                                    id="signup_email"
                                    type="email"
                                    placeholder="   이메일"
                                />
                                <input
                                    id="signup_pwd"
                                    type="password"
                                    placeholder="   비밀번호"
                                />
                                <input
                                    id="signup_id"
                                    type="text"
                                    placeholder="   아이디"
                                />
                                <input
                                    id="signup_name"
                                    type="text"
                                    placeholder="   이름"
                                />
                                <input
                                    id="signup_tel"
                                    type="tel"
                                    placeholder="   전화번호"
                                />
                                <div className="certification">
                                    <input
                                        id="signup_cer"
                                        type="text"
                                        placeholder="   인증번호 입력"
                                    />
                                    <div className="cer_btn">인증번호</div>
                                </div>
                                <div className="student_info">
                                    <input
                                        id="ab"
                                        type="text"
                                        placeholder="   학년"
                                    />
                                    <input
                                        id="ab"
                                        type="text"
                                        placeholder="   반"
                                    />
                                    <input
                                        id="ab"
                                        type="text"
                                        placeholder="   번호"
                                    />
                                </div>
                                <div className="signup_login">
                                    <span>계정이 있으신가요?</span>
                                    <Link href="/login">
                                        <span className="sdl">로그인</span>
                                    </Link>
                                </div>
                                <div className="signup_button">가입</div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <style jsx>{`
                .signup_main {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 140vh;
                }

                .signup_box {
                    width: 500px;
                    height: 820px;
                    background-color: #1a1a1a;
                    border-radius: 80px;
                    display: flex;
                    color: white;
                    flex-direction: column;
                    align-items: center;
                }

                .signup_h1 {
                    font-size: 28px;
                    margin-top: 50px;
                    font-weight: 700;
                    letter-spacing: 4px;
                    margin-bottom: 50px;
                }

                .signup_stroke {
                    width: 530px;
                    height: 850px;
                    background-color: #286246;
                    border-radius: 110px;
                }

                .signup_id_box {
                    display: flex;
                    flex-direction: column;
                }

                .signup_id_box input {
                    background-color: #1a1a1a;
                    border: 1px solid #6a6767;
                    width: 330px;
                    height: 55px;
                    border-radius: 5px;
                    color: white;
                    font-size: 16px;
                    margin-bottom: 20px;
                }

                input::placeholder {
                    color: white;
                    font-size: 14px;
                    font-weight: 600;
                }

                .id_check {
                    display: flex;
                    align-items: center;
                    margin-bottom: 15px;
                }

                .idsave {
                    color: white;
                    font-size: 14px;
                    margin-left: 10px;
                    font-weight: 600;
                }

                #idckb {
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                    background: #1a1a1a;
                }

                #idckb:checked {
                    background-color: #4197fc;
                }

                .signup_button {
                    width: 330px;
                    height: 50px;
                    background-color: #4197fc;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: 600;
                    cursor: pointer;
                    border-radius: 10px;
                    margin-bottom: 30px;
                }

                .lost {
                    cursor: pointer;
                }

                .signup {
                    cursor: pointer;
                }

                .student_info {
                    display: flex;
                    justify-content: space-between;
                }

                .student_info input {
                    width: 105px;
                    height: 55px;
                }

                .certification {
                    width: 330px;
                    justify-content: space-between;
                    display: flex;
                }

                #signup_cer {
                    width: 235px;
                }

                .cer_btn {
                    height: 55px;
                    width: 90px;
                    background-color: #4197fc;
                    border-radius: 5px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 600;
                    font-size: 15px;
                    letter-spacing: 1px;
                }

                .signup_login {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                    font-size: 13px;
                    font-weight: 600;
                    padding: 20px;
                }

                .signup_login .sdl {
                    color: #4197fc;
                    margin-left: 10px;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}
