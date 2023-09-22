import React, { useEffect, useState } from "react";
import "./KukiBoxHomePage.css";
import { useParams } from "react-router-dom";

function KukiBoxHomePage() {
  const { boxId } = useParams();
  const [kukies, setKukies] = useState([]);

  useEffect(() => {
    const getKukiList = async () => {
      const response = await fetch(`http://localhost:3030/box/${boxId}/kukies`);
      const data = await response.json();

      setKukies([...data]);
    };

    getKukiList();
  }, [boxId]);

  return (
    <div className="KukiBoxHomePage page">
      <div className="kukibox_section">
        <div className="kukibox">
          {kukies.map((kuki) => (
            <div key={`kuki` + kuki.id}>kuki {kuki.id}</div>
          ))}
        </div>
        <div className="kukibox_button">
          <button className="left_button"></button>
          <button className="right_button"></button>
        </div>
      </div>
      <div className="make_button_section">
        <button className="make_button">쿠키 담기</button>
      </div>
    </div>
  );
}

export default KukiBoxHomePage;