import React from "react";

import "./KukiModal.css";
import { KUKI_BACK } from "../../assets/images/kuki";

const dummy_text = `친구야 공연 너무너무 잘 봤다.
너무너무 재밌었어.
다음에 또 같이 보자!
사랑해!
특히 너의 연기가 너무 좋았ㄷ.
너무너무 재밌었어.
다음에 또 같이 보자!
사랑해!
- 본 내용은 챗 지피티가 작성했습니다.`;

function KukiModal({ kuki, onClose }) {
  return (
    <div className="KukiModal">
      <div className="KukiModal_overlay" onClick={onClose}></div>
      <div className="KukiModal_content_box">
        <div className="KukiModal_content">
          <img src={KUKI_BACK[kuki.design]} alt="kuki_back" />
          <div className="KukiModal_text_box">
            <div className="KukiModal_text">{kuki.content || dummy_text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KukiModal;
