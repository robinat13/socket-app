import React, { useState } from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className={s.joinOuterContainer}>
      <div className={s.joinInnerContainer}>
        <h1 className={s.heading}>Join</h1>
        <div>
          <input
            placeholder="Name"
            className={s.joinInput}
            type="text"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            placeholder="Room"
            className={`${s.joinInput} ${s["mt-20"]}`}
            type="text"
            onChange={(e) => setRoom(e.target.value)}
          ></input>
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={`${s.button} ${s["mt-20"]}`} type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
