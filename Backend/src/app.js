const express = require("express");
const app = express();
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/ai", aiRoutes);

module.exports = app;
