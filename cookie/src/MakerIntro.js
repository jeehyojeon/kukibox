import React from "react";
import "./MakerIntro.css";
import MakerIntroKuki from "./MakerIntroKuki.svg";
import MakerIntroBox from "./MakerIntroBox.svg";

function MakerIntro() {
  const subbox = {
    width: "111px",
    height: "26px",
    top: "241px",
    left: "140px",
    borderRadius: "50px",
    backgroundColor: "#F6EDDD",
    position: "absolute", // 위치 지정을 위한 설정
  };
  return (
    <div className="maker_intro">
      <div className="maker_intro_title">
        쿠키박스
      </div>
      <div className="maker_intro_kuki">
        <img src={MakerIntroKuki} alt="MakerIntroKuki" />
      </div>
      <div style={subbox}></div>
      <div className="maker_intro_subtitle">
        공연 관계자용
      </div>
      <div className="maker_intro_box">
      <img src={MakerIntroBox} alt="MakerIntroBox" />
      </div>
    </div>
  );
}

export default MakerIntro;