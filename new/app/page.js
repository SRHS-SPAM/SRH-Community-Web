"use client";
import CalenderMain from "@/components/CalenderMain";
import Food from "@/components/Food";
import Nav from "@/components/Nav";
import Seo from "@/components/Seo";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
    return (
        <>
            <Seo title="Home" />
            <Script
                src="https://kit.fontawesome.com/75ea5a755a.js"
                crossOrigin="anonymous"
            ></Script>
            <Nav type="default" />
            <div className="school_name_main">
                <span className="name_eng">
                    <Link href={"/"}>
                        <div className="school_logo">
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
                    <CalenderMain num={0} />
                </div>
            </div>
            <style jsx>{`
                body {
                    position: relative;
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
