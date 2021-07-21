import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [treasure, setTreasure] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTreasure = async () => {
      setLoading(true);
      const res = await axios.get(`http://localhost:3000/treasure`);
      setTreasure(res.data);
      setLoading(false);
    };
    fetchTreasure();
  }, []);

  console.log(treasure);

  return (
    <div className="container">
      <div className="banner">Kings Asset Management Tool</div>
      <div className="title">Assets Manager</div>
      <div className="intro">Intro Text</div>
      <div className="tablecontainer">
        <div className="tabledescription">Gold Salt Diamonds Perls</div>
        <div className="gold">{treasure.gold}</div>
        <div className="salt">{treasure.salt}</div>
        <div className="diamonds">{treasure.diamonds}</div>
        <div className="pearls">{treasure.perls}</div>
      </div>
      <div className="edit">Edit Table</div>
    </div>
  );
}

export default App;
