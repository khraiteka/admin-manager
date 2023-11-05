const app = require('express')();

app.get('/favourites', (req, res) => res.send('Hello Favourites Services, API!'));

app.listen(3003, () => console.log(`Users Services API listening on port 3003!`));