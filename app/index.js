const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get('/' , (req, res) => {
	res.json({
		message: 'healthy'
	})
});

app.listen(PORT, () => {
	console.log(`Sever established at ${PORT}`);
});