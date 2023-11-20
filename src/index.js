// Import the React and ReactDom libraries
//Get a reference to the div with id root
//Tell React to take control of that element
//Create a Componenet
//Show the Component on the screen

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);

root.render(<App />);
