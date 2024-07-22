const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`O CRUD tá rodando na porta: http://localhost:${PORT}`);
});
