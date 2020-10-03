import React from "react";
import ReactDOM from "react-dom";
import App from "./ui/App";
import "./styles/main.css";

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
