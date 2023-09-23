import React from "react";

import "./KukiDesign.css";

import { KUKI_FRONT } from "../../assets/images/kuki";

function KukiDesign({ design = 1 }) {
  return (
    <div className="design_container">
      <div className="kuki_design">
        <img src={KUKI_FRONT[design]} alt="kuki" />
      </div>
    </div>
  );
}

export default KukiDesign;
