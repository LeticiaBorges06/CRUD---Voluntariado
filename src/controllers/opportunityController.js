const opportunitiesModel = require('../models/opportunityModel');

const getAll = async (_request, response) => {
  const opportunities = await opportunitiesModel.getAll();
  return response.status(200).json(opportunities);
};

const createOpportunity = async (request, response) => {
  const { title } = request.body;
  const createdOpportunity = await opportunitiesModel.createOpportunity(title);
  return response.status(201).json(createdOpportunity);
};

const deleteOpportunity = async (request, response) => {
  const { id } = request.params;
  const success = await opportunitiesModel.deleteOpportunity(Number(id));
  if (success) {
    return response.status(204).json();
  } else {
    return response.status(404).json({ message: 'Opportunity not found' });
  }
};

const updateOpportunity = async (request, response) => {
  const { id } = request.params;
  const updatedOpportunity = await opportunitiesModel.updateOpportunity(Number(id), request.body);
  if (updatedOpportunity) {
    return response.status(200).json(updatedOpportunity);
  } else {
    return response.status(404).json({ message: 'Opportunity not found' });
  }
};

module.exports = {
  getAll,
  createOpportunity,
  deleteOpportunity,
  updateOpportunity,
};


// const opportunityModel = require('../models/opportunityModel.js');

// const getAll = async (_request, response) => {
//   const opportunities = await opportunityModel.getAll();
//   return response.status(200).json(opportunities);
// };

// const createOpportunity = async (request, response) => {
//   const createdOpportunity = await opportunityModel.createOpportunity(request.body);
//   return response.status(201).json(createdOpportunity);
// };

// const deleteOpportunity = async (request, response) => {
//   const { id } = request.params;
//   await opportunityModel.deleteOpportunity(id);
//   return response.status(204).json();
// };

// const updateOpportunity = async (request, response) => {
//   const { id } = request.params;
//   await opportunityModel.updateOpportunity(id, request.body);
//   return response.status(204).json();
// };

// module.exports = {
//   getAll,
//   createOpportunity,
//   deleteOpportunity,
//   updateOpportunity,
// };
