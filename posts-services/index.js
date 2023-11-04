const app = require('express')();

app.get('/posts', (req, res) => res.send('Hello Post Services, API!'));

app.listen(3000, () => console.log(`Post Services API listening on port 3000!`));