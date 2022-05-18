import { pollsRepo } from "../../../../../data/poll-repo";

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      return castVote(req);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function castVote(req) {
    const pollId = parseInt(req.query.pollId);
    const option = parseInt(req.query.mealId);

    const body = JSON.parse(req.body);
    
    try {
      await pollsRepo.update(parseInt(pollId), body);
      return res.status(200).json({});
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}
