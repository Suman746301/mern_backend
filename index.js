const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const mongodb = require("./db");
mongodb();

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Cantrol-Allow-Origin", "https://localhost:3000");
  res.header(
    "Acess-Cantrol-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
