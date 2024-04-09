import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import { ScrollToTop } from "./components";

const root = document.getElementById("root");

root
  ? ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </React.StrictMode>
    )
  : null;
