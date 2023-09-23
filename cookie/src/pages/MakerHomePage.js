import React, { useState } from "react";
import "./MakerHomePage.css";

import { useNavigate, useParams } from "react-router-dom";

function MakerHome() {
  const params = useParams();
  const navigate = useNavigate();

  const [textInput, setTextInput] = useState({
    title: "",
    link: "",
    info: "",
  });

  const onContentChange = (event) => {
    const { name, value } = event.target;

    setTextInput({
      ...textInput,
      [name]: value,
    });
  };

  const onMakeClick = async () => {
    const res = await fetch(`http://localhost:3030/box`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: textInput.title,
        link: textInput.link,
        info: textInput.info,
      }),
    });

    if (res.ok) {
      alert("공연 정보가 등록되었습니다.");

      // read res
      const { data } = await res.json();
      const { box_id } = data;

      navigate("/maker/publish/" + box_id);
    }
  };

  return (
    <div className="MakerHomePage">
      <div className="page_header">공연 정보 작성</div>
      <div className="title_header">공연 이름</div>
      <div className="title_section">
        <textarea
          className="title_textarea"
          name="title"
          placeholder="공연 이름을 작성하세요..."
          value={textInput.title}
          onChange={onContentChange}
        />
      </div>
      <div className="link_header">링크 첨부</div>
      <div className="link_section">
        <textarea
          className="link_textarea"
          name="link"
          placeholder="공연 관련 링크를 첨부하세요..."
          value={textInput.link}
          onChange={onContentChange}
        />
      </div>
      <div className="info_header">선택 작성</div>
      <div className="info_section">
        <textarea
          className="info_textarea"
          name="info"
          placeholder="공연에 대한 추가적인 정보를 작성하세요..."
          value={textInput.info}
          onChange={onContentChange}
        />
      </div>
      <div className="button_section hoverable">
        <button onClick={onMakeClick}>등록하기</button>
      </div>
    </div>
  );
}

export default MakerHome;
