import React from "react";
import "./MakerHomePage.css";



function MakerHome() {
  
  


  return (
    <div className="maker_home">
      <div className="maker_home_title">공연 정보 작성</div>
      <div className="maker_home_name">공연 이름</div>
      <div className="maker_home_namebox">
        <div className="inputname">
        <input
          placeholder="공연 이름을 입력하세요..."
          />
          
        </div>
      </div>
      <div className="maker_home_link">링크 첨부</div>
      <div className="maker_home_linkbox">
        
      <input
            placeholder="공연 관련 링크를 첨부하세요..."
          />
          
        
      </div>
      <div className="maker_home_option">선택 작성</div>
      <div className="maker_home_optionbox">
      
      
          <textarea 
          placeholder="공연에 대한 추가적인 정보를 작성하세요..."></textarea>
      </div>
      
      <div className="maker_home_enrollbox"></div>
      <div className="maker_home_enroll">등록하기</div>
      
    </div>
    
  );
}

export default MakerHome;
