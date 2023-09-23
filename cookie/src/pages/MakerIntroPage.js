import React, { useEffect } from "react";
import "./MakerIntroPage.css";
import { useNavigate } from "react-router-dom";

function MakerIntroPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/maker/");
    }, 2000);
  });

  return (
    <div className="maker_intro">
      <div className="maker_intro_title">
        쿠키박스
        <div className="maker_intro_kuki"></div>
      </div>
      <div className="maker_intro_subbox"></div>
      <div className="maker_intro_subtitle">공연 관계자용</div>
      <div className="maker_intro_box"></div>
    </div>
  );
}

export default MakerIntroPage;
