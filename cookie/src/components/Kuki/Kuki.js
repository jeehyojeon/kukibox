import React, { useState } from "react";
import "./Kuki.css";

import { KUKI_BACK, KUKI_FRONT } from "../../assets/images/kuki.js";

function Kuki({ style = 1, isPublic = true, content = "" }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleKukiClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`kuki hoverable ${isFlipped ? "isFlipped" : ""}`}
      onClick={handleKukiClick}>
      <img className="front" src={KUKI_FRONT[style]} width={110} height={110} />
      <img className="back" src={KUKI_BACK[style]} width={110} height={110} />
    </div>
  );
}

export default Kuki;
