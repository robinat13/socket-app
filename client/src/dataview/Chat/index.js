import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import s from "./style.module.css";
import { InfoBar } from "../../components/Infobar";
import Input from "../../components/Input";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io("http://localhost:5000");
    setName(name);
    setRoom(room);
    // console.log(socket);
    socket.emit("join", { name, room }, (callback) => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };

  console.log(message, messages);

  return (
    <div className={s.outerContainer}>
      <div className={s.container}>
        <InfoBar roomName={room} />

        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
