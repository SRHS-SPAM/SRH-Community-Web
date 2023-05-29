"use client";
import Arrow from "@/components/Arrow";
import CalenderMain from "@/components/CalenderMain";
import Seo from "@/components/Seo";

export default function Calender() {
    return (
        <>
            <Seo title="Calender" />
            <div className="Calender_background">
                <span className="Calender_text">Calender</span>
            </div>
            <Arrow location="/" />
            <div className="calender_1_background">
                <CalenderMain />
            </div>
            <div className="calender_2_background">
                <CalenderMain />
            </div>

            <style jsx>{`
                .Calender_text {
                    display: flex;
                    position: relative;
                    font-family: "Inter";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 64px;
                    line-height: 77px;
                    top: 27px;
                    justify-content: center;
                    align-items: center;
                    letter-spacing: 0.235em;
                    color: #ffffff;
                }

                .wrapper {
                    position: relative;
                    display: inline-block;
                }

                .Calender_background {
                    position: absolute;
                    width: 850px;
                    height: 130px;
                    left: 50%;
                    transform: translateX(-50%);
                    top: 30px;
                    background: linear-gradient(
                            0deg,
                            rgba(0, 0, 0, 0.2),
                            rgba(0, 0, 0, 0.2)
                        ),
                        #286246;
                    border-radius: 40px;
                    z-index: -1;
                }

                .cal_bars {
                    position: absolute;
                    right: 65px;
                    top: 54px;
                    font-size: 50px;
                    color: #286246;
                    cursor: pointer;
                }

                .calender_1_background {
                    position: absolute;
                    width: 770px;
                    height: 770px;
                    left: 58px;
                    top: 183px;

                    background: #286246;
                    border-radius: 50px;
                }

                .calender_2_background {
                    position: absolute;
                    width: 770px;
                    height: 770px;
                    right: 58px;
                    top: 183px;

                    background: #286246;
                    border-radius: 50px;
                }
            `}</style>
        </>
    );
}
