import React from "react";
import Title from "../components/Title/Title";
import "./MakerHome.css";

function MakerHome() {
  return (
    <div className="maker_home">
      <Title title={`공연 정보 작성\n*`} />
      <br />
      <div className="maker_home_name">공연 이름</div>
      <div className="maker_home_namebox"></div>
      <div className="maker_home_link">링크 첨부</div>
      <div className="maker_home_linkbox"></div>
      <div className="maker_home_option">선택 작성</div>
      <div className="maker_home_optionbox"></div>

      <div className="maker_home_enroll">등록하기</div>
    </div>
  );
}

export default MakerHome;
