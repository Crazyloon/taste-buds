// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pollsRepo } from "../../../../data/poll-repo";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getPollById(req);
    case "PUT":
      return updatePoll(req);
    case "DELETE":
      return deletePoll(req);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getPollById(req) {
    const id = parseInt(req.query.id);
    const poll = await pollsRepo.getById(id);
    return res.status(200).json(poll);
  }

  async function updatePoll(req) {
    try {
      await pollsRepo.update(req.query.id, req.body);
      return res.status(200).json({});
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async function deletePoll(req) {
    await pollsRepo.delete(req.query.id);
    return res.status(200).json({});
  }
}
