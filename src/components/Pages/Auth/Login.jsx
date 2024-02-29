import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

export default function Login() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    console.log("state --> ", state);

    const { username, password } = state;

    axios
      .post("https://dummyjson.com/auth/login", {
        username,
        password,
      })
      .then((res) => {
        localStorage.setItem("userData", JSON.stringify(res.data));
        window.location.href = "/";
      })
      .catch((err) => {
        console.log("err", err);

        alert("Login or password is error.")
      });
  };

  return (
    <div className="login__card">
      <div action="" className="login__form">
        <label for="username">Username:</label>
        <br />
        <input
          onChange={(e) => {
            setState((prev) => ({
              ...prev,
              username: e.target.value,
            }));
          }}
          type="text"
          id="username"
          placeholder=" Username"
        />
        <br />
        <label for="pin">Password:</label>
        <br />
        <input
          onChange={(e) => {
            setState((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
          type="password"
          id="pin"
          placeholder=" Password"
        />
        <br />
        <button onClick={handleLogin} type="submit">
          Login
        </button>
      </div>
    </div>
  );
}



//     username: "kminchelle",
//     password: "0lelplR",
