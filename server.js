const express = require('express')
const serve   = require('express-static');
const log = require('./libs/log')(module);
const port = process.env.PORT || 8001;

const app = express();
 
app.use(serve(__dirname + '/public'));

app.listen(port, () => log.info('Express GraphQL Server Now Running On localhost:' + port));
