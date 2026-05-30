import ships from "../data/ships.json" assert { type: "json" };

export default function (req, res) {
  res.status(200).json(ships);
}
