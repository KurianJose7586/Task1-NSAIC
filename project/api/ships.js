const fs = require("fs");

module.exports = (req, res) => {
  const ships = JSON.parse(
    fs.readFileSync(__dirname + "/data.json", "utf8")
  );

  res.status(200).json(ships);
};
