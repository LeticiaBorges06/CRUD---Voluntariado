
//RAPAZ AQUI TAVA O CONNECTION.JS E ACABOU QUE MUDEI PRA UM BATABSE//

//const getAll = async () => {
//  const [opportunities] = await connection.execute('SELECT * FROM opportunities');
//  return opportunities;
//};

//const createOpportunity = async (opportunity) => {
//  const { title, description, date, location, skills } = opportunity;
//  const query = 'INSERT INTO opportunities (title, description, date, location, skills) VALUES (?, ?, ?, ?, ?)';
//  const [createdOpportunity] = await connection.execute(query, [title, description, date, location, skills.join(', ')]);
//  return { insertId: createdOpportunity.insertId };
//};

//const deleteOpportunity = async (id) => {
//  const [removedOpportunity] = await connection.execute('DELETE FROM opportunities WHERE id = ?', [id]);
//  return removedOpportunity;
//};

//const updateOpportunity = async (id, opportunity) => {
//  const { title, description, date, location, skills } = opportunity;
//  const query = 'UPDATE opportunities SET title = ?, description = ?, date = ?, location = ?, skills = ? WHERE id = ?';
//  const [updatedOpportunity] = await connection.execute(query, [title, description, date, location, skills.join(', '), id]);
//  return updatedOpportunity;
//};

//module.exports = {
//  getAll,
//  createOpportunity,
//  deleteOpportunity,
//  updateOpportunity,
//};

const database = require('../database/userDataBase');

const getAll = async () => {
  return database.getAllOpportunities();
};

const createOpportunity = async (title) => {
  return database.createOpportunity(title);
};

const deleteOpportunity = async (id) => {
  return database.deleteOpportunity(id);
};

const updateOpportunity = async (id, opportunity) => {
  return database.updateOpportunity(id, opportunity.title, opportunity.status);
};

module.exports = {
  getAll,
  createOpportunity,
  deleteOpportunity,
  updateOpportunity,
};
