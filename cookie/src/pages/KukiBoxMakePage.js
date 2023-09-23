import React, { useState } from "react";

import "./KukiBoxMakePage.css";

function KukiBoxMakePage() {
  const [content, setContent] = useState("");

  const onContentChange = (event) => {
    setContent(event.target.value);
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
      <div className="public_section"></div>
      <div className="button_section"></div>
    </div>
  );
}

export default KukiBoxMakePage;
