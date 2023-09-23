import React, { useState, useEffect } from "react";

import "./Onboarding.css";

import { KUKI_FRONT, KUKI_BACK } from "../../assets/images/kuki";

function Onboarding({ design = 1 }) {
  const [isOn, setIsOn] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOn(true);
    }, 1500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (!isOn) return;

      setIsFlipped(!isFlipped);
    }, 2000);
  }, [isOn, isFlipped]);

  return (
    <div className="onboarding">
      <div className="onboarding-overlay"></div>
      <div className={`onboarding-content ${isOn ? "centered" : ""} `}>
        <div className={`onboarding-container ${isFlipped ? "isFlipped" : ""}`}>
          <img
            className="front"
            src={KUKI_FRONT[design]}
            width={110}
            height={110}
            alt="kuki-front"
          />
          <img
            className="back"
            src={KUKI_BACK[design]}
            width={110}
            height={110}
            alt="kuki-back"
          />
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
