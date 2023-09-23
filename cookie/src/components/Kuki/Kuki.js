import React from "react";
import "./Kuki.css";

import { KUKI_STYLE } from "../../assets/images/kuki.js";

function Kuki({ style = 1, isFlipped = false, isPublic = true }) {
  return (
    <div className="kuki hoverable">
      <img src={KUKI_STYLE[style]} width={110} height={110} />
    </div>
  );
}

export default Kuki;
