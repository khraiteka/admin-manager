const app = require('express')();

app.get('/category', (req, res) => res.send('Hello Category Services, API!'));

app.listen(3001, () => console.log(`Category Services API listening on port 3001!`));