import React, { useEffect, useState } from "react";
import "./KukiBoxHomePage.css";
import { useNavigate, useParams } from "react-router-dom";
import Kuki from "../components/Kuki/Kuki";
import KukiModal from "../components/KukiModal/KukiModal";
import { useAuth } from "../context/auth";

function KukiBoxHomePage() {
  const { boxId } = useParams();
  const navigate = useNavigate();

  const { authId } = useAuth();

  const [kukies, setKukies] = useState([]);
  const [curBox, setCurBox] = useState(0);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const getKukiList = async () => {
      const response = await fetch(
        `http://13.48.45.97:3030/box/${boxId}/kukies`
      );
      const data = await response.json();
      const kukies = data.map((kuki) => ({
        id: kuki.id,
        design: kuki.design,
        isPrivate: Boolean(kuki.is_private),
        isFlipped: false,
        content: kuki.content,
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

    const response = await fetch(`http://13.48.45.97:3030/kuki/${kukiId}`);
    const data = await response.json();
    const kuki = data[0];

    if (kuki.is_private && authId !== boxId) return;

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

  const onRightClick = () => {
    if (curBox + 1 > Math.ceil((kukies.length - 1) / 8)) return;

    setCurBox(curBox + 1);
  };

  const onLeftClick = () => {
    if (curBox - 1 > 0) return;

    setCurBox(curBox - 1);
  };

  const onKukiMakeClick = () => {
    // route to '/kukibox/${boxId}/make'
    navigate(`/kukibox/${boxId}/make`);
  };

  return (
    <div className="KukiBoxHomePage">
      <div className="kukibox_section">
        <div className="kukibox">
          {kukies.slice(curBox * 8, (curBox + 1) * 8).map((kuki) => (
            <div
              key={`kuki_container` + kuki.id}
              onClick={() => onKukiClick(kuki.id)}>
              <Kuki
                key={`kuki` + kuki.id}
                style={Number(kuki.design)}
                isFlipped={kuki.isFlipped}
                isPrivate={kuki.isPrivate}
              />
            </div>
          ))}
          {!kukies.length && (
            <div className="first-kuki">첫 번째 쿠키를 담아주세요!</div>
          )}
        </div>
        <div className="kukibox_button">
          <button
            className="left_button hoverable"
            onClick={onLeftClick}></button>
          {kukies.length
            ? `${curBox + 1} / ${Math.ceil((kukies.length - 1) / 8)}`
            : ""}
          <button
            className="right_button hoverable"
            onClick={onRightClick}></button>
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
