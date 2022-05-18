// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pollsRepo } from "../../../data/poll-repo";

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      return createPoll(req);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function createPoll(req) {
    const body = req.body;
    const all = await pollsRepo.getAll();
    const newId = all[all.length - 1].id + 1;
    const currentDate = new Date().toISOString();
    const poll = {
      id: newId,
      question: body.question,
      options: body.options,
      createdDate: currentDate,
      updatedDate: currentDate,
    };

    await pollsRepo.create(poll);
    const newPoll = await pollsRepo.getById(newId);
    return res.status(200).json(newPoll);
  }

 
}
