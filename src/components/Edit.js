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

  const updateAsset = async (edited) => {
    await axios({
      method: "put",
      url: "http://localhost:3000/treasure/update",
      data: edited,
    }).then(
      (response) => {
        console.log(response);
        if (response.statusText === "OK") {
          handleTreasure(edited);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="container">
      <div className="banner">Kings Asset Management Tool</div>
      <div className="title">Treasurer Book</div>
      <div className="intro">
        <p> The king "found" new loot? Or are this desperate times?</p>
        <p>
          Here you have to update the treasures. They will be stored
          permanently! But beware, you'll better be thorough or the king will
          get very mad...
        </p>
      </div>
      <div className="tablecontainer">
        <div className="assets">Gold</div>
        <div className="assets">Diamonds</div>
        <div className="assets">Salt</div>
        <div className="assets">Pearls</div>
        <form className="form">
          <input
            type="number"
            placeholder={treasure.gold}
            className="assetsnumedit"
            onChange={(e) => setEdited({ ...edited, gold: e.target.value })}
          />
        </form>
        <form className="form">
          <input
            type="number"
            placeholder={treasure.diamonds}
            className="assetsnumedit"
            onChange={(e) => setEdited({ ...edited, diamonds: e.target.value })}
          />
        </form>
        <form className="form">
          <input
            type="number"
            placeholder={treasure.salt}
            className="assetsnumedit"
            onChange={(e) => setEdited({ ...edited, salt: e.target.value })}
          />
        </form>
        <form className="form">
          <input
            type="number"
            placeholder={treasure.pearls}
            className="assetsnumedit"
            onChange={(e) => setEdited({ ...edited, pearls: e.target.value })}
          />
        </form>
      </div>

      <button
        className="btn green"
        id="submit"
        onClick={() => updateAsset(edited)}
      >
        <span>Submit Changes</span>
      </button>

      <Link to="/" id="back">
        <button className="btn">
          <span>Back to Main</span>
        </button>
      </Link>
    </div>
  );
}

export default Edit;
