import Menubar from "@/components/Menubar";
import Link from "next/link";

export default function Nav({ type }) {
  return (
    <>
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
          <Link href="/calender">
            <div className="main_box">
              <span>캘린더</span>
            </div>
          </Link>
        </div>
        <div className="date">20XX.XX.XX (X)</div>
        <div className="info">
          <Link href={"/login"}>
            <div className="home_login">LOG IN</div>
          </Link>
          <Menubar />
        </div>
      </div>
      <style jsx>{`
        .header_main {
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
          margin-left: ${type === "default" ? "30px" : "100px"};
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
      `}</style>
    </>
  );
}
