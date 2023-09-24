import React, { useState } from "react";

import "./KukiBoxMakePage.css";

import KukiDesign from "../components/KukiDesign/KukiDesign";
import { useNavigate, useParams } from "react-router-dom";
import Onboarding from "../components/Onboarding/Onboarding";

function KukiBoxMakePage() {
  const params = useParams();
  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [selected, setSelected] = useState(1);

  const [isOnboarding, setIsOnboarding] = useState(false);

  const onContentChange = (event) => {
    setContent(event.target.value);
  };

  const onTogglePrivate = () => {
    setIsPrivate(!isPrivate);
  };

  const onMakeClick = async () => {
    const { boxId } = params;

    const res = await fetch(`http://13.48.45.97:3030/kuki`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        box_id: boxId,
        design: selected,
        content,
        is_private: isPrivate,
      }),
    });

    // onboarding
    setIsOnboarding(true);

    // navigate to home after 2.5 seconds
    setTimeout(() => {
      navigate("/kukibox/" + boxId);
    }, 5500);
  };

  return (
    <div className="KukiBoxMakePage">
      <div className="page_header">쿠키를 선택해 주세요!</div>
      <div className="design_section">
        {[1, 2, 3, 4, 5, 6].map((design) => (
          <KukiDesign
            key={`kukidesign-${design}`}
            design={design}
            selected={design === selected}
            onDesignClick={setSelected}
          />
        ))}
      </div>
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
      <div className="button_section hoverable">
        <button onClick={onMakeClick}>쿠키 보내기</button>
      </div>
      {isOnboarding && <Onboarding design={selected} />}
    </div>
  );
}

export default KukiBoxMakePage;
