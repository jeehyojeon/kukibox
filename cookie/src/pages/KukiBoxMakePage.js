import React, { useState } from "react";

import "./KukiBoxMakePage.css";

function KukiBoxMakePage() {
  const [content, setContent] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const onContentChange = (event) => {
    setContent(event.target.value);
  };

  const onTogglePrivate = () => {
    setIsPrivate(!isPrivate);
  };

  return (
    <div className="page">
      <div className="page_header">쿠키를 선택해 주세요!</div>
      <div className="design_section"></div>
      <div className="content_section">
        <textarea
          className="content_textarea"
          placeholder="자유롭게 작성해주세요."
          value={content}
          onChange={onContentChange}
        />
      </div>
      <div className="public_section">
        <input type="checkbox" checked={isPrivate} onChange={onTogglePrivate} />
        <span>비공개 여부</span>
      </div>
      <div className="button_section"></div>
    </div>
  );
}

export default KukiBoxMakePage;
