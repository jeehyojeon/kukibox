import React, {useState} from "react";
import "./maker_home.css";
import Modal from 'react-modal';



function maker_home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="makerhome">
      <div className="maker_main">
        kuki
      </div>
      <div>
        setTimeout(() => <Modal is isOpen={true}>
          <div>
            <h1>Modal title</h1>
            <p>Modal body</p>
          </div>
        </Modal>
      </div>
      </div>

  );
}


export default App;