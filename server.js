const express = require('express')
const serve   = require('express-static');
const log = require('./libs/log')(module);
const port = process.env.PORT || 8001;
const bodyParser = require('body-parser');
const usersave = require('./controllers/form');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) // parse application/json
app.post('/api/user', usersave.createUser); 
app.use(serve(__dirname + '/public'));
app.listen(port, () => log.info('Express GraphQL Server Now Running On localhost:' + port));
