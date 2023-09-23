import React from "react";

import "./KukiModal.css";
import { KUKI_BACK } from "../../assets/images/kuki";

function KukiModal({ kuki, onClose }) {
  return (
    <div className="KukiModal">
      <div className="KukiModal_overlay" onClick={onClose}></div>
      <div className="KukiModal_content">
        <img src={KUKI_BACK[kuki.design]} alt="kuki_back" />
        <div className="KukiModal_text">{kuki.content}</div>
      </div>
    </div>
  );
}

export default KukiModal;
