import React, { useEffect, useState } from "react";
import "./KukiBoxHomePage.css";
import { useParams } from "react-router-dom";
import Kuki from "../components/Kuki/Kuki";
import KukiModal from "../components/KukiModal/KukiModal";

function KukiBoxHomePage() {
  const { boxId } = useParams();
  const [kukies, setKukies] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const getKukiList = async () => {
      const response = await fetch(`http://localhost:3030/box/${boxId}/kukies`);
      const data = await response.json();

      setKukies([...data]);

      const res2 = await fetch(`http://localhost:3030/kuki/${1}`);
      const data2 = await res2.json();
      setSelected({ ...data2[0] });
    };

    getKukiList();
  }, [boxId]);
  console.log(selected);

  const onKukiClick = (kuki) => {
    setSelected(Number(kuki));
    console.log(selected);
  };

  const onKukiModalClose = () => {
    setSelected(null);
  };

  return (
    <div className="KukiBoxHomePage page">
      <div className="kukibox_section">
        <div className="kukibox">
          {kukies.map((kuki) => (
            <Kuki
              key={`kuki` + kuki.id}
              style={Number(kuki.id) % 6}
              onClick={() => onKukiClick(kuki.id)}
            />
          ))}
        </div>
        <div className="kukibox_button">
          <button className="left_button hoverable"></button>
          <button className="right_button hoverable"></button>
        </div>
      </div>
      <div className="make_button_section">
        <button className="make_button hoverable">쿠키 담기</button>
      </div>
      {selected && <KukiModal kuki={selected} onClose={onKukiModalClose} />}
    </div>
  );
}

export default KukiBoxHomePage;
