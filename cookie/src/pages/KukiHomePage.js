import React from "react";
import "./KukiHomePage.css";

function KukiHomePage() {

  return (
    <div className="kuki_home">
      <div className="kuki_subtitle">
        공연 방명록 서비스
      </div>
      <div className="kuki_title">
        쿠키박스
      </div>
      <div className="kuki_box">
        <div className="kuki_box_left"></div>
        <div className="kuki_box_right"></div>
        <div className="kuki_box_top"></div>
        <div className="kuki_box_bottom"></div>
        <div className="kuki_box_diagleft"></div>
        <div className="kuki_box_diagright"></div>
        <div className="kuki_box_diagleft2"></div>
        <div className="kuki_box_diagright2"></div>
      </div>
    </div>
  );
}
export default KukiHomePage;