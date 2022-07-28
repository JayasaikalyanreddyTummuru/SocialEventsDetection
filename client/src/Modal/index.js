import React from "react";
import "./Modal.css";

const Modal = ({ setOpenModal, data }) => {
  console.log('modaldata', data);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{data.name}</h1>
        </div>
        <div className="body">
            <p> {data.desc}</p>
        </div>
        <div className="body">
          <p>Time : {data.starttime} to {data.endtime}</p>
        </div>
        <div>
          <p className="footer">
            Email : {data.email}</p>
        </div>
        <div className="body">
        <p>phone: {data.num}</p>
        </div>
        <div className="footer">
          <p>Address : {data.location_desc}</p>
        </div>
        <div className="body">
          <p>Date : {data.day + data.month + data.year}</p> 
        </div>
        <div className="body">
          <p>Cost : {data.cost}</p>
        </div>
        <div className="body">
          <p>About : {data.event_desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;