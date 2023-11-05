const app = require('express')();

app.get('/users', (req, res) => res.send('Hello Users Services, API!'));

app.listen(3002, () => console.log(`Users Services API listening on port 3002!`));