import React from "react";
import "./MakerPublishPage.css";

function MakerPublishPage() {
  

  return (
    <div className="page">
      <div className="maker_qr_title">쿠키 상자 생성 완료!</div>
      <div className="qrbox">
        <div className="kuki_qrbox">
          <div className="kuki_qr"></div>
          <div className="kuki_qr_text">관객 배포용 \n비공개 쿠키는 열람할 수 없어요</div>
        </div>
        <div className="maker_qrbox">
          <div className="maker_qr"></div>
          <div className="maker_qr_text">제작자 열람용</div>
        </div>
        <div className="ifloss">
          분실 시 문의해주세요! \n devbuzz@gmail.com
        </div>
      </div>
      <div className="maker_download">
        다운로드</div>
      <div className="maker_downloadbox"></div>
    </div>
  );
}

export default MakerPublishPage;