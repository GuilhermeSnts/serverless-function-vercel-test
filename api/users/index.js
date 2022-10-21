export default function users(req, res) {
  res.status(200).json([
    { name: "Ana", id: 1 },
    { name: "Alfredo", id: 2 },
  ]);
}
