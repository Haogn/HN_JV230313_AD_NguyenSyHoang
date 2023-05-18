import React from "react";
import "./Listfeedback.css";

function Listfeedback({ list, handleDelete }) {
  return (
    <div className="item-feedback">
      <div className="content">Rewviwe</div>
      <div className="action">
        <p>thời gian</p>
        <p>
          <i
            // onClick={() => handleDelete(i)}
            className="fa-regular fa-trash-can"
          ></i>
        </p>
      </div>
    </div>
  );
}

export default Listfeedback;
