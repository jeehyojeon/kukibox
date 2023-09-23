import React from "react";
import "./Kuki.css";

import { KUKI_BACK, KUKI_FRONT } from "../../assets/images/kuki.js";

function Kuki({ style = 1, isFlipped = false, isPublic = true, content = "" }) {
  return (
    <div className={`kuki hoverable ${isFlipped ? "isFlipped" : ""}`}>
      <img className="front" src={KUKI_FRONT[style]} width={110} height={110} />
      <img className="back" src={KUKI_BACK[style]} width={110} height={110} />
    </div>
  );
}

export default Kuki;
