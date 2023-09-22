import React from "react";
import "./MakerPublishPage.css";

function MakerQr() {

  return (
    <div className="maker_qr">
      <div className="maker_qr_title">QR 코드 생성 완료!</div>
    <div className="maker_qrbox"></div>
    <div className="maker_download">
      다운로드
      <div className="maker_downloadbox"></div>
      </div>
    </div>
  );
}

export default MakerQr;