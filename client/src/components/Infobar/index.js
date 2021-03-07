import React from "react";
import s from "./style.module.css";

export const InfoBar = ({ roomName }) => {
  return (
    <div className={s.infoBar}>
      <div className={s.leftInnerContainer}>
        <img
          className={s.onlineIcon}
          src="/icons/onlineIcon.png"
          alt="online"
        />
        <h3>{roomName}</h3>
      </div>
      <div className={s.rightInnerContainer}>
        <a href="/">
          <img src="/icons/closeIcon.png" alt="close" />
        </a>
      </div>
    </div>
  );
};
