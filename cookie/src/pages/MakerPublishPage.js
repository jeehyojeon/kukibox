import React, { useEffect } from "react";
import "./MakerPublishPage.css";

import { useParams } from "react-router-dom";
import { generateQR } from "../utils/generateQR";

function MakerPublishPage() {
  const params = useParams();

  const [qrDataUrl, setQrDataUrl] = React.useState(null);

  useEffect(() => {
    const setKukiBoxUrl = async () => {
      const { boxId } = params;
      if (!boxId) return;

      const url = `https://localhost:3000/kukibox/${boxId}/intro`;
      const qrDataUrl = await generateQR(url);
      setQrDataUrl(qrDataUrl);
    };

    setKukiBoxUrl();
  }, []);

  return (
    <div className="MakerPublishPage">
      <div className="title-section">
        <div className="maker_qr_title">쿠키 상자 생성 완료!</div>
      </div>
      <div className="qrbox">
        <div className="kuki_qrbox">
          <div className="kuki_qr">
            <img src={qrDataUrl} />
          </div>
          <div className="kuki_qr_text">
            <div>관객 배포용</div>
            <br />
            <div>비공개 쿠키는 열람할 수 없어요</div>
          </div>
        </div>
        <div className="maker_qrbox">
          <div className="maker_qr">
            <img src={qrDataUrl} />
            {/* 나중에 관계자용 qr발급해야함 */}
          </div>
          <div className="maker_qr_text">제작자 열람용</div>
        </div>
        <div className="inquiry">
          <div> 분실 시 문의해주세요!</div>
          <div>devbuzz@gmail.com</div>
        </div>
      </div>
      <div className="maker_downloadbox">
        <div>다운로드</div>
      </div>
    </div>
  );
}

export default MakerPublishPage;
