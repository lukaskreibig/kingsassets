import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Edit from "./components/Edit";
import Main from "./components/Main";

function App() {
  const [treasure, setTreasure] = useState([]);
  useEffect(() => {
    const fetchTreasure = async () => {
      const res = await axios.get(`http://localhost:3000/treasure`);
      setTreasure(res.data);
    };
    fetchTreasure();
  }, []);

  console.log(treasure);

  return (
    <>
      <Switch>
        <Route exact path="/edit" component={Edit}></Route>
        <Route
          exact
          path="/"
          component={() => <Main treasure={treasure} />}
        ></Route>
      </Switch>
    </>
  );
}

export default App;
