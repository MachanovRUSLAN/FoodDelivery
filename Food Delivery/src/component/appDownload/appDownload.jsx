import React from "react";
import "./appDownload.css";

function AppDownload() {
  return (
    <div className="app-download" id="app">
      <p>
        For Better Experience Download <br />
        Tomato App
      </p>
      <div className="app-download-platforms">
        <img src="/src/assets/appstore.png" alt="" />
        <img className="store" src="/src/assets/store.png" alt="" />
      </div>
    </div>
  );
}

export default AppDownload;
