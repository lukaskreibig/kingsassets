import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Edit() {
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
          <input type="number" />
        </form>
        <form className="form">
          <input type="number" />
        </form>
        <form className="form">
          <input type="number" />
        </form>
        <form className="form">
          <input type="number" />
        </form>
        <div className="goldupdate">Update</div>
        <div className="diamondsupdate">Update</div>
        <div className="saltupdate">Update</div>
        <div className="pearlsupdate">Update</div>
      </div>
      <div className="edit">
        <Link to="/">Finished Editing</Link>
      </div>
    </div>
  );
}

export default Edit;
