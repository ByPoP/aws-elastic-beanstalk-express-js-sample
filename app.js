const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! Nesta 2024 v03'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
