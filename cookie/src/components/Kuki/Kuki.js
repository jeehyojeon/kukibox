import React from "react";
import "./Kuki.css";

import { KUKI_BACK, KUKI_FRONT } from "../../assets/images/kuki.js";

function Kuki({ style = 1, isFlipped = false, isPrivate = false }) {
  return (
    <div className={`kuki hoverable ${isFlipped ? "isFlipped" : ""}`}>
      <img
        className="kuki-front"
        src={KUKI_FRONT[style]}
        width={110}
        height={110}
        alt="kuki-front"
      />
      <div>
        <img
          className="kuki-back"
          src={KUKI_BACK[style]}
          width={110}
          height={110}
          alt="kuki-back"
        />
        {isPrivate && (
          <div className="kuki-back kuki-back-private">{"비공개 쿠키"}</div>
        )}
      </div>
    </div>
  );
}

export default Kuki;
