const express = require("express");
const app = express();
app.use("/", express.static("public"));

PORT = process.env.PORT || 5000;
app.listen(PORT, function(req, res) {
  console.log("Port listening on 5000");
});
