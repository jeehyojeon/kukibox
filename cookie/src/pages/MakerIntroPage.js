import React from "react";
import "./MakerIntroPage.css";
import MakerIntroKuki from "../assets/images/kuki1.svg";
import MakerIntroBox from "../assets/images/MakerIntroBox.svg";

function MakerIntroPage() {
  const kukipos = {
    position: "absolute",
    top: "50px",
    left: "220px"
    };
  const boxpos = {
    position: "absolute",
    top: "397px",
    left: "45px"
  };
  

  return (
    <div className="maker_intro">
      <span className="maker_intro_title">쿠키박스
        <span className="maker_intro_kuki">
          <img src={MakerIntroKuki} alt="MakerIntroKuki" width={30} height={30} style={kukipos} />
        </span>
      </span>
      <div className="maker_intro_subbox"></div>
      <div className="maker_intro_subtitle">공연 관계자용</div>
      <div className="maker_intro_box">
        <img src={MakerIntroBox} alt="MakerIntroBox" style={boxpos} />
      </div>
    </div>
  );
}

export default MakerIntroPage;
