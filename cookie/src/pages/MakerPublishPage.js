import React, { useEffect } from "react";
import "./MakerPublishPage.css";

import { useParams } from "react-router-dom";
import { generateQR } from "../utils/generateQR";

function MakerPublishPage() {
  const params = useParams();

  const [audUrl, setAudUrl] = React.useState(null);
  const [makerUrl, setMakerUrl] = React.useState(null);

  const publishUrl = "https://www.numanku.com";

  useEffect(() => {
    const setAudQrUrl = async () => {
      const { boxId } = params;
      if (!boxId) return;

      const url = publishUrl + `/kukibox/${boxId}/intro`;
      const qrDataUrl = await generateQR(url);
      setAudUrl(qrDataUrl);
    };

    const setMakerQrUrl = async () => {
      const { boxId } = params;
      if (!boxId) return;

      const url = publishUrl + `/auth/${boxId}`;
      const qrDataUrl = await generateQR(url);
      setMakerUrl(qrDataUrl);
    };

    setAudQrUrl();
    setMakerQrUrl();
  }, []);

  const onDownloadClick = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = audUrl;
    downloadLink.download = "qr.png";
    downloadLink.click();
  };

  return (
    <div className="MakerPublishPage">
      <div className="title-section">
        <div className="maker_qr_title">쿠키 상자 생성 완료!</div>
      </div>
      <div className="qrbox">
        <div className="kuki_qrbox">
          <div className="kuki_qr">
            <img src={audUrl} alt="aud-url-qr" />
          </div>
          <div className="kuki_qr_text">
            <div>관객 배포용</div>
            <br />
            <div>비공개 쿠키는 열람할 수 없어요</div>
          </div>
        </div>
        <div className="maker_qrbox">
          <div className="maker_qr">
            <img src={makerUrl} alt="maker-url-ar" />
          </div>
          <div className="maker_qr_text">제작자 열람용</div>
        </div>
        <div className="inquiry">
          <div> 분실 시 문의해주세요!</div>
          <div>devbuzz@gmail.com</div>
        </div>
      </div>
      <div className="maker_downloadbox" onClick={onDownloadClick}>
        다운로드
      </div>
    </div>
  );
}

export default MakerPublishPage;
