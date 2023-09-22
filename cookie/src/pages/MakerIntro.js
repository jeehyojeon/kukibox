import React from "react";
import "./MakerIntro.css";
import MakerIntroKuki from "../assets/images/MakerIntroKuki.svg";
import MakerIntroBox from "../assets/images/MakerIntroBox.svg";

function MakerIntro() {
  return (
    <div className="maker_intro">
      <div className="maker_intro_title">공연 정보 작성</div>
      <div className="maker_intro_kuki">
        <img src={MakerIntroKuki} alt="MakerIntroKuki" />
      </div>
      <div className="maker_intro_subbox"></div>
      <div className="maker_intro_subtitle">공연 관계자용</div>
      <div className="maker_intro_box">
        <img src={MakerIntroBox} alt="MakerIntroBox" />
      </div>
    </div>
  );
}

export default MakerIntro;
