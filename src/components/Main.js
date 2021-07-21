import React from "react";
import { Link } from "react-router-dom";

function Main({ treasure }) {
  return (
    <div>
      <div className="container">
        <div className="banner">Kings Asset Management Tool</div>
        <div className="title">Assets Manager</div>
        <div className="intro">Intro Text</div>
        <div className="tablecontainer">
          <div className="goldtitle">Gold</div>
          <div className="diamondtitle">Diamonds</div>
          <div className="salttitle">Salt</div>
          <div className="pearltitle">Pearls</div>
          <div className="gold">{treasure.gold}</div>
          <div className="diamonds">{treasure.diamonds}</div>
          <div className="salt">{treasure.salt}</div>
          <div className="pearls">{treasure.perls}</div>
        </div>
        <div className="edit">
          <Link to="/edit">Edit Table</Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
