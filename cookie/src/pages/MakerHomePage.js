import React, { useState } from "react";
import "./MakerHomePage.css";

import { useNavigate, useParams } from "react-router-dom";

function MakerHome() {
  const params = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [info, setInfo] = useState("");
  

  
  const onContentChange = (event) => {
    setTitle(event.target.value);
    setLink(event.target.value);
    setInfo(event.target.value);  
  };


  const onMakeClick = async () => {

    const res = await fetch(`http://localhost:3030/kuki`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        link: link,
        info: info,
      }),
    });

   


    // navigate to home after 2.5 seconds
    setTimeout(() => {
      navigate("/maker/publish");
    }, 5500);
  };

  return (
    <div className="MakerHomePage">
      <div className="page_header">공연 정보 작성</div>
      <div className="title_header">공연 이름</div>
      <div className="title_section">
        <textarea
          className="title_textarea"
          placeholder="공연 이름을 작성하세요..."
          value={title}
          onChange={onContentChange}
        />
      </div>
      <div className="link_header">링크 첨부</div>
      <div className="link_section">
        <textarea
          className="link_textarea"
          placeholder="공연 관련 링크를 첨부하세요..."
          value={link}
          onChange={onContentChange}
        />
      </div>
      <div className="info_header">선택 작성</div>
      <div className="info_section">
        <textarea
          className="info_textarea"
          placeholder="공연에 대한 추가적인 정보를 작성하세요..."
          value={info}
          onChange={onContentChange}
        />
      </div>
            
      <div className="button_section_hoverable">
        <button onClick={onMakeClick}>등록하기</button>
      </div>
    </div>
    
  );
}

export default MakerHome;
