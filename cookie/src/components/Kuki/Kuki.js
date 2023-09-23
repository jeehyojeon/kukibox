import React from "react";
import "./Kuki.css";

import { KUKI_BACK, KUKI_FRONT } from "../../assets/images/kuki.js";

function Kuki({ style = 1, isFlipped = false, isPublic = true, content = "" }) {
  return (
    <div className={`kuki hoverable ${isFlipped ? "isFlipped" : ""}`}>
      <img
        className="kuki-front"
        src={KUKI_FRONT[style]}
        width={110}
        height={110}
        alt="kuki-front"
      />
      <img
        className="kuki-back"
        src={KUKI_BACK[style]}
        width={110}
        height={110}
        alt="kuki-back"
      />
    </div>
  );
}

export default Kuki;
