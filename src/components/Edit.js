import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Edit() {
  const [edited, setEdited] = useState({
    salt: "10",
    gold: "20",
    diamonds: "40",
    pearls: "20",
  });

  //   const updateAsset = () => {
  //     axios
  //       .put("http://localhost:3000/treasure/update/", {
  //         asset: value,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         // setRes("Successfully updated");
  //         // setErr("");
  //       })
  //       .catch((err) => {
  //         if (err.response) {
  //           console.log(err);
  //           // setErr(err.response.data);
  //           // setRes("");
  //         }
  //       });
  //   };
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
            onChange={(e) => setEdited({ ...edited, gold: e.target.value })}
          />
        </form>
        <form className="form">
          <input
            type="number"
            onChange={(e) => setEdited({ ...edited, diamonds: e.target.value })}
          />
        </form>
        <form className="form">
          <input
            type="number"
            onChange={(e) => setEdited({ ...edited, salt: e.target.value })}
          />
        </form>
        <form className="form">
          <input
            type="number"
            onChange={(e) => setEdited({ ...edited, pearls: e.target.value })}
          />
        </form>
        <button className="btn">
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
