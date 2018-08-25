import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainMenu from "./mainMenu";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<MainMenu />, document.getElementById("root"));
registerServiceWorker();
