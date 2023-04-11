import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import App from "./app";
import "./index.css";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider desiredChainId={ChainId.Goerli}>
    <Router>
      <App />
      {/* <div>
        <h1 className="text-yellow-500 text-8xl">Hwwlo</h1>
      </div> */}
    </Router>
  </ThirdwebProvider>
);
