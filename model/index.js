const db = require('../data/dbConfig');

const add = async user => {
  const [id] = await db('users').insert(user);

  return db('users')
    .where({ id })
    .first();
};

const findBy = username =>
  db('users')
    .where({ username })
    .first();

const get = () => db('users');

module.exports = {
  add,
  findBy,
  get,
};
