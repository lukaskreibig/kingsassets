import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Edit({ treasure, handleTreasure }) {
  const [edited, setEdited] = useState({
    salt: treasure.salt,
    gold: treasure.gold,
    diamonds: treasure.diamonds,
    pearls: treasure.pearls,
  });

  const updateAsset = (edited) => {
    axios({
      method: "put",
      url: "http://localhost:3000/treasure/update",
      data: edited,
    }).then(
      (response) => {
        console.log(response.statusText);
        handleTreasure(edited);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="container">
      <div className="banner">Kings Asset Management Tool</div>
      <div className="title">Assets Manager</div>
      <div className="intro">Editing Text</div>
      <div className="tablecontainer">
        <div className="goldtitle">Gold</div>
        <div className="diamondtitle">Diamonds</div>
        <div className="salttitle">Salt</div>
        <div className="pearltitle">Pearls</div>
        <form className="form">
          <input
            type="number"
            placeholder={treasure.gold}
            onChange={(e) => setEdited({ ...edited, gold: e.target.value })}
          />
        </form>
        <form className="form">
          <input
            type="number"
            placeholder={treasure.diamonds}
            onChange={(e) => setEdited({ ...edited, diamonds: e.target.value })}
          />
        </form>
        <form className="form">
          <input
            type="number"
            placeholder={treasure.salt}
            onChange={(e) => setEdited({ ...edited, salt: e.target.value })}
          />
        </form>
        <form className="form">
          <input
            type="number"
            placeholder={treasure.pearls}
            onChange={(e) => setEdited({ ...edited, pearls: e.target.value })}
          />
        </form>
        <button className="btn" onClick={() => updateAsset(edited)}>
          <span>Submit Changes</span>
        </button>
      </div>
      <div className="edit">
        <Link to="/">Finished Editing</Link>
      </div>
    </div>
  );
}

export default Edit;
