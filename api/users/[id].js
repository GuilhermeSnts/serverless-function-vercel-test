export default function users(req, res) {
  const { id } = req.query;

  const database = [
    { name: "Ana", id: 1 },
    { name: "Alfredo", id: 2 },
  ];

  const result = database.find((i) => i.id === parseInt(id));

  res.status(200).json(result || { response: `id ${id} not found` });
}
