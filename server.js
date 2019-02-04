const express = require("express");
const app = express();
app.use("/", express.static("public"));

app.post("/formOne", (req, res) => {
  console.log("pahunch gye-----------------------");
  console.log(req.body.nameOne + "dsjdjsd");
  res.sendStatus(200);
});

app.listen(5000, function(req, res) {
  console.log("Port listening on 5000");
});
