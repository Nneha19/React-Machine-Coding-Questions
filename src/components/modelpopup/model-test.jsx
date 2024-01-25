import { useState } from "react";
import Model from "./model";
import "./model.css";

export default function ModelTest() {
  const [showModelPopup, setShowModelPopup] = useState(false);

  function handleToggleModelPopup() {
    setShowModelPopup(!showModelPopup);
  }

  function onClose() {
    setShowModelPopup(false);
  }

  return (
    <div className="main-div">
         <div className="sub-div">
      <button className='Modelbtn' onClick={handleToggleModelPopup}>Open Model Popup</button>
      {showModelPopup && (
        <Model
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
      </div>
    </div>
  );
}