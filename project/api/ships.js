import ships from "../data/ships.json";

export default function handler(req, res) {
  res.status(200).json(ships);
}
