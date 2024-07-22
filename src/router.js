const express = require('express');
const router = express.Router();

const opportunityController = require('./controllers/opportunityController.js');
const opportunityMiddleware = require('./middlewares/opportunityMiddleware.js');

router.get('/opportunities', opportunityController.getAll);
router.post('/opportunitiesz', 
  opportunityMiddleware.validateFieldTitle, 
  opportunityMiddleware.validateFieldDescription, 
  opportunityController.createOpportunity
);
router.delete('/opportunities/:id', opportunityController.deleteOpportunity);
router.put('/opportunities/:id',
  opportunityMiddleware.validateFieldTitle,
  opportunityMiddleware.validateFieldDescription,
  opportunityController.updateOpportunity
);

module.exports = router;
