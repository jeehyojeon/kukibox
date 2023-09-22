import React from "react";
import "./KukiBoxHomePage.css";

function KukiBoxHomePage() {
  return (
    <div className="KukiBoxHomePage page">
      <div className="kukibox_section">
        <div className="kukibox">kukibox</div>
        <button>left</button>
        <button>right</button>
      </div>
      <div className="make_button_section">
        <button className="make_button">쿠키 담기</button>
      </div>
    </div>
  );
}

export default KukiBoxHomePage;
