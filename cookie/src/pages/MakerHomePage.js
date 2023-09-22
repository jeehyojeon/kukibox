import React, { useState } from "react";
import "./MakerHomePage.css";

function MakerHome() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {setInputValue(e.target.value);};

  return (
    <div className="maker_home">
      <div className="maker_home_title">공연 정보 작성</div>
      <div className="maker_home_name">공연 이름</div>
      <div className="maker_home_namebox">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="공연 이름을 입력하세요..."
          />
      </div>
      <div className="maker_home_link">링크 첨부</div>
      <div className="maker_home_linkbox">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="공연 정보 링크를 첨부하세요..."
        />
      </div>
      <div className="maker_home_option">선택 작성</div>
      <div className="maker_home_optionbox">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="예) 공연 소개글, 인사말, 후원 안내 등.."
        />
      </div>

      
      <div className="maker_home_enrollbox"></div>
      <div className="maker_home_enroll">등록하기</div>
    </div>
  );
}

export default MakerHome;
