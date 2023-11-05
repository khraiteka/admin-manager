const app = require('express')();

app.get('/comments', (req, res) => res.send('Hello Comments Services, API!'));

app.listen(3004, () => console.log(`Users Services API listening on port 3004!`));