import { connectToDatabase } from "./mongo/connection";

export const pollsRepo = {
    getAll,
    getById,
    find: x => polls.find(x),
    create,
    update,
    delete: _delete
};

async function getAll() {
  const { db } = await connectToDatabase();
  const polls = await db.collection('mealPolls').find({}).toArray();
  return polls;
}

async function getById(id) {
  const { db } = await connectToDatabase();

  return await db.collection('mealPolls').findOne({id: id});
}

async function find(poll) {
  const { db } = await connectToDatabase();

  return await db.collection('mealPolls').findOne({...poll});
}

async function create(poll) {
  const { db } = await connectToDatabase();
  
  await db.collection('mealPolls').insertOne({...poll});
}

async function update(id, params) {
  const { db } = await connectToDatabase();
  const poll = await db.collection('mealPolls').findOne({id: id});

  // set date updated
  const updatedDate = new Date().toISOString();

  // update and save
  const data = Object.values(params);
  await db.collection('mealPolls').updateOne({id: id}, { $set: { options: data, updatedDate: updatedDate } });
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
async function _delete(id) {
  const { db } = await connectToDatabase();
  
  await db.collection('mealPolls').deleteOne({id: id});
}