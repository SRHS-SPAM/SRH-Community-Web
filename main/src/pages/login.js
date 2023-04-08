import Arrow from "@/components/Arrow";
import Seo from "@/components/Seo";
import Link from "next/link";

export default function loginin() {
    return (
        <>
            <Seo title="login" />
            <Arrow location="/" />
            <form method="post" name="login">
                <div className="main">
                    <div className="stroke">
                        <div className="box">
                            <div className="school_name">
                                Seoul Robot <br />
                                <em>Highschool</em>
                            </div>
                            <div className="id_box">
                                <input
                                    id="userid"
                                    type="text"
                                    placeholder="아이디"
                                />
                                <input
                                    id="pwd"
                                    type="password"
                                    placeholder="비밀번호"
                                />
                                <div className="id_check">
                                    <input
                                        id="idckb"
                                        type="checkbox"
                                        size="{10}"
                                    />
                                    <span className="idsave">
                                        로그인 정보 저장하기
                                    </span>
                                </div>
                                <div className="login_button">로그인</div>
                            </div>
                            <div className="more">
                                <div className="lost">
                                    비밀번호를 잊으셨나요?
                                </div>
                                <Link href="/signup">
                                    <div className="signup">회원가입</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <style jsx>{`
                .main {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }

                .box {
                    width: 500px;
                    height: 500px;
                    background-color: #1a1a1a;
                    border-radius: 80px;
                    display: flex;
                    color: white;
                    flex-direction: column;
                    align-items: center;
                }

                .school_name {
                    font-size: 28px;
                    margin-top: 70px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    line-height: 30px;
                    margin-bottom: 60px;
                }

                .school_name em {
                    letter-spacing: 3px;
                }

                .stroke {
                    width: 530px;
                    height: 530px;
                    background-color: #286246;
                    border-radius: 110px;
                }

                .id_box {
                    display: flex;
                    flex-direction: column;
                }

                .id_box input {
                    background-color: #1a1a1a;
                    border: 1px solid #6a6767;
                    width: 330px;
                    height: 55px;
                    border-radius: 5px;
                    color: white;
                    font-size: 16px;
                }

                #userid {
                    margin-bottom: 10px;
                }

                #pwd {
                    margin-bottom: 15px;
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

                .login_button {
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

                .more {
                    display: flex;
                    justify-content: space-between;
                    width: 55%;
                    align-items: center;
                    font-size: 14px;
                    font-weight: 600;
                    color: #d4ddfc;
                }

                .lost {
                    cursor: pointer;
                }

                .signup {
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}
