let opportunities = [
    
];
let nextId = 1;

class Opportunity {
  constructor(title, status = 'available') {
    this.id = nextId++;
    this.title = title;
    this.status = status;
    this.created_at = new Date().toUTCString();
  }
}

const getAllOpportunities = () => {
  return opportunities;
};

const createOpportunity = (title) => {
  const newOpportunity = new Opportunity(title);
  opportunities.push(newOpportunity);
  return newOpportunity;
};

const deleteOpportunity = (id) => {
  const index = opportunities.findIndex(op => op.id === id);
  if (index !== -1) {
    opportunities.splice(index, 1);
    return true;
  }
  return false;
};

const updateOpportunity = (id, title, status) => {
  const opportunity = opportunities.find(op => op.id === id);
  if (opportunity) {
    opportunity.title = title;
    opportunity.status = status;
    return opportunity;
  }
  return null;
};

module.exports = {
  getAllOpportunities,
  createOpportunity,
  deleteOpportunity,
  updateOpportunity,
};
