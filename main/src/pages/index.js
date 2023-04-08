import Link from "next/link";
import Seo from "@/components/Seo";
import Menubar from "@/components/Menubar";
import Calender from "@/components/Calender";
import Food from "@/components/Food";

export default function Home() {
    return (
        <>
            <Seo title="Home" />
            <div className="header_main">
                <div className="menu_main">
                    <div className="main_box">
                        <span>공지사항</span>
                    </div>
                    <div className="main_box">
                        <span>급식</span>
                    </div>
                    <div className="main_box">
                        <span>커뮤니티</span>
                    </div>
                    <div className="main_box">
                        <span>캘린더</span>
                    </div>
                </div>
                <div className="date">20XX.XX.XX (X)</div>
                <div className="info">
                    <Link href={"/login"}>
                        <div className="home_login">LOG IN</div>
                    </Link>
                </div>
            </div>
            <Menubar />
            <div className="school_name_main">
                <span className="name_eng">
                    <Link href={"/"}>
                        <div className="school_logo">
                            <img
                                src="/img/logo.png"
                                width="150px"
                                height="150px"
                                alt="logo"
                            />
                        </div>
                    </Link>
                    Seoul Robot Highschool
                </span>
                <div className="border">
                    <div className="line" />
                    <span className="name_ko">서울로봇고</span>
                    <div className="line" />
                </div>
            </div>
            <div className="main_info">
                <div className="mainbox">
                    <div className="notice">
                        <div className="notice_name">주요 공지</div>
                    </div>
                    <Food />
                    <Calender />
                </div>
            </div>
            <script
                src="https://kit.fontawesome.com/75ea5a755a.js"
                crossorigin="anonymous"
            ></script>
            <style jsx>{`
                body {
                    position: relative;
                }

                .header_main {
                    background-color: #fffdefd1;
                    height: 110px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    position: relative;
                }

                .menu_main {
                    display: flex;
                    gap: 20px;
                    margin-left: 30px;
                }

                .main_box {
                    display: flex;
                    background-color: #286246;
                    cursor: pointer;
                    opacity: 0.9;
                    width: 80px;
                    font-weight: 600;
                    font-size: 15px;
                    color: white;
                    align-items: center;
                    justify-content: center;
                    height: 30px;
                    border-radius: 5px;
                    letter-spacing: 1px;
                }

                .date {
                    position: absolute;
                    right: 93px;
                    top: 15px;
                    font-size: 14px;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                }

                .info {
                    display: flex;
                    align-items: center;
                    gap: 35px;
                }

                .home_login {
                    width: 80px;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 5px;
                    font-weight: 500;
                    letter-spacing: 1px;
                    color: white;
                    background-color: #286246;
                    cursor: pointer;
                }

                .school_logo {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    bottom: 50px;
                    right: 240px;
                    cursor: pointer;
                }

                .school_name_main {
                    margin-top: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 50px;
                    flex-direction: column;
                }

                .name_eng {
                    font-size: 55px;
                    font-weight: 600;
                    letter-spacing: 1px;
                    color: #286246;
                    position: relative;
                    margin-bottom: 15px;
                }

                .name_ko {
                    font-size: 30px;
                    font-weight: 700;
                    letter-spacing: 1px;
                    color: #286246;
                }

                .border {
                    display: flex;
                }

                .line {
                    height: 1.5px;
                    width: 220px;
                    background-color: #286246;
                    margin: 15px 20px;
                }

                .main_info {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .mainbox {
                    background-color: #286246;
                    width: 1000px;
                    border-radius: 50px;
                    height: 350px;
                    display: grid;
                    grid-template-columns: 3fr 2fr 3fr;
                }

                .notice {
                    background-color: white;
                    margin: 45px 20px 45px 45px;
                    border-radius: 20px;
                    display: flex;
                    justify-content: center;
                    cursor: pointer;
                }

                .notice_name {
                    font-weight: 700;
                    margin-top: 10px;
                }
            `}</style>
        </>
    );
}
