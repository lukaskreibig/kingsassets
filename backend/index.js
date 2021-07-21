const express = require("express");
const connection = require("./db/config");
const cors = require("cors");
const treasureRoute = require("./routes/treasure-route");

const app = express();

connection.connect((err) => {
  if (err) {
    console.error("aiaiaiai, error connecting: " + err.stack);
  } else {
    console.log(
      "connected to treasure with treasureId :  " + connection.threadId
    );
  }
});

app.use(express.json());
app.use(cors);

const port = 3000;

app.get("/", (request, response) => {
  response.send("Behold. This is the Kings Assets API.");
});

app.use("/treasure", treasureRoute);

app.listen(port, () => {
  console.log(`Magic is running on ${port}`);
});
