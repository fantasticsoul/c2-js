import "./runConcent";
import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { clearContextIfHot } from "concent";

console.log("  ****** render App ******  ");
clearContextIfHot();
ReactDom.render(<App />, document.getElementById("root"));


/** please press ⌘(or ctrl in winOS) and click mouse left button to review BasicDemo code*/
/** @type {import('pages/BasicDemo')} */