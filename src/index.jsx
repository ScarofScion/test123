import React from "react";
import ReactDOM from "react-dom";
import App from "./frontend/components/App";
import mountPoint from "./frontend/utils/mountPoint";
import globalTheme from "./frontend/assets/themes/global";

globalTheme();

ReactDOM.render(<App />, mountPoint);

module.hot.accept();
