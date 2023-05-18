import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form-feedback">
      <textarea placeholder="Type riview here..." name="" id=""></textarea>
      <div className="action-form">
        <p> left</p>
        <p>
          PUBLISH <i className="fa-solid fa-arrow-up"></i>
        </p>
      </div>
    </div>
  );
}

export default Form;
