import React, { useEffect, useState } from "react";
import "./KukiBoxHomePage.css";
import { useNavigate, useParams } from "react-router-dom";
import Kuki from "../components/Kuki/Kuki";
import KukiModal from "../components/KukiModal/KukiModal";

function KukiBoxHomePage() {
  const { boxId } = useParams();
  const navigate = useNavigate();

  const [kukies, setKukies] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const getKukiList = async () => {
      const response = await fetch(`http://localhost:3030/box/${boxId}/kukies`);
      const data = await response.json();
      const kukies = data.map((kuki) => ({
        ...kuki,
        isFlipped: false,
      }));

      setKukies([...kukies]);
    };

    getKukiList();
  }, [boxId]);

  const onKukiClick = async (kukiId) => {
    const newKukies = kukies.map((kuki) => {
      if (kuki.id === kukiId) {
        return {
          ...kuki,
          isFlipped: !kuki.isFlipped,
        };
      } else {
        return kuki;
      }
    });
    setKukies(newKukies);

    const response = await fetch(`http://localhost:3030/kuki/${kukiId}`);
    const data = await response.json();
    const kuki = data[0];

    setSelected({ ...kuki });
  };

  const onKukiModalClose = () => {
    const newKukies = kukies.map((kuki) => ({
      ...kuki,
      isFlipped: false,
    }));
    setKukies(newKukies);
    setSelected(null);
  };

  const onKukiMakeClick = () => {
    // route to '/kukibox/${boxId}/make'
    navigate(`/kukibox/${boxId}/make`);
  };

  return (
    <div className="KukiBoxHomePage page">
      <div className="kukibox_section">
        <div className="kukibox">
          {kukies.map((kuki) => (
            <div
              key={`kuki_container` + kuki.id}
              onClick={() => onKukiClick(kuki.id)}>
              <Kuki
                key={`kuki` + kuki.id}
                style={Number(kuki.id) % 6}
                isFlipped={kuki.isFlipped}
              />
            </div>
          ))}
        </div>
        <div className="kukibox_button">
          <button className="left_button hoverable"></button>
          <button className="right_button hoverable"></button>
        </div>
      </div>
      <div className="make_button_section">
        <button className="make_button hoverable" onClick={onKukiMakeClick}>
          쿠키 담기
        </button>
      </div>
      {selected && <KukiModal kuki={selected} onClose={onKukiModalClose} />}
    </div>
  );
}

export default KukiBoxHomePage;
