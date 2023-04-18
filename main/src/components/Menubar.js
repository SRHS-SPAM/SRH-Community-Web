import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const onClick = () => setOpen((prop) => !prop);

  return (
    <>
      <div className="bars" id="bar" onClick={onClick}>
        <i className="fa-solid fa-bars" />
      </div>
      <div
        className="menubar"
        id="menubar_f"
        style={open ? { display: "flex" } : { display: "none" }}
      >
        <div className="menu_top">
          <div className="menubar_line">
            <div className="menubar_menuline" onClick={onClick}>
              <div className="menubar_menuline1" />
              <div className="menubar_menuline2" />
              <div className="menubar_menuline3" />
            </div>
          </div>
        </div>
        <div className="menu_bottom">
          <div className="menu_column">마이페이지</div>
          <div className="menu_column">설정</div>
          <div className="menu_column">문의하기</div>
          <div className="menu_column">로그아웃</div>
        </div>
      </div>
      <style jsx>{`
        .menubar {
          position: absolute;
          top: 15px;
          right: 6px;
          flex-direction: column;
          align-items: flex-end;
          display: none;
          z-index: 1;
        }

        .menu_top {
          background-color: #fffdef;
          width: 80px;
          height: 75px;
          border: 3.5px solid #286246;
          border-bottom: 0px solid #286246;
          display: flex;
          border-radius: 50% 50% 0% 0%;
          justify-content: center;
          align-items: center;
        }

        .menu_bottom {
          background-color: #fffdef;
          width: 130px;
          height: 300px;
          border: 3.5px solid #286246;
          border-radius: 5px 0px 5px 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .menu_column {
          width: 105px;
          height: 50px;
          background-color: #286246;
          display: flex;
          margin-top: 18px;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          border-radius: 15px;
          font-size: 14px;
          cursor: pointer;
        }

        .menubar_line {
          height: 3.5px;
          width: 80px;
          background-color: #286246;
          position: relative;
          z-index: 0;
        }

        .menubar_menuline {
          left: 22px;
          position: absolute;
          bottom: 5px;
        }

        .menubar_menuline1 {
          height: 7px;
          width: 30px;
          border-radius: 5px;
          position: absolute;
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.2),
              rgba(0, 0, 0, 0.2)
            ),
            #286246;
          box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
          transform: rotate(-60deg);
          z-index: 1;
          cursor: pointer;
        }

        .menubar_menuline2 {
          height: 7px;
          width: 30px;
          border-radius: 5px;
          position: absolute;
          z-index: 2;
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.2),
              rgba(0, 0, 0, 0.2)
            ),
            #286246;
          box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
          cursor: pointer;
        }

        .menubar_menuline3 {
          height: 7px;
          width: 30px;
          border-radius: 5px;
          position: absolute;
          z-index: 3;
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.2),
              rgba(0, 0, 0, 0.2)
            ),
            #286246;
          box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
          transform: rotate(60deg);
          cursor: pointer;
        }
        .bars {
          font-size: 35px;
          margin-right: 30px;
          color: #286246;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
