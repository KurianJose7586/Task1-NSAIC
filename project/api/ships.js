import fs from "fs";

export default function handler(req, res) {
  const ships = JSON.parse(
    fs.readFileSync(new URL("./data.json", import.meta.url), "utf8")
  );

  res.status(200).json(ships);
}
