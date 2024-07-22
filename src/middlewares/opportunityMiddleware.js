const validateFieldTitle = (request, response, next) => {
    const { body } = request;
  
    if (body.title === undefined) {
      return response.status(400).json({ message: 'The field "title" is required' });
    }
  
    if (body.title === '') {
      return response.status(400).json({ message: 'title cannot be empty' });
    }
  
    next();
};
  
  const validateFieldDescription = (request, response, next) => {
    const { body } = request;
  
    if (body.description === undefined) {
      return response.status(400).json({ message: 'The field "description" is required' });
    }
  
    if (body.description === '') {
      return response.status(400).json({ message: 'description cannot be empty' });
    }
  
    next();
};
  
  module.exports = {
    validateFieldTitle,
    validateFieldDescription,
};
  