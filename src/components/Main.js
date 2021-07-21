import React from "react";
import { Link } from "react-router-dom";

function Main({ treasure }) {
  return (
    <div>
      <div className="container">
        <div className="banner">Kings Asset Management Tool</div>
        <div className="title">Kingdom Treasure Overview</div>
        <div className="intro">
          Welcome my Lord!
          <p>
            You must be the Kings new treasurer? I hope your ready for this job,
            the last one got beheaded quickly. Here is the overview over the
            Kings treasure!
          </p>
        </div>
        <div className="tablecontainer">
          <div className="assets">Gold</div>
          <div className="assets">Diamonds</div>
          <div className="assets">Salt</div>
          <div className="assets">Pearls</div>
          <div className="assetsnum">{treasure.gold}</div>
          <div className="assetsnum">{treasure.diamonds}</div>
          <div className="assetsnum">{treasure.salt}</div>
          <div className="assetsnum">{treasure.pearls}</div>
        </div>
        <Link to="/edit" id="submit">
          <button className="btn">
            <span>Change the Books</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Main;
