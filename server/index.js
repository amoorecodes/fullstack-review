const express = require('express');
const parser = require('body-parser');
const db = require('./../database/index.js');
const router = require('./router/index.js');

let app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(parser.json());
app.use(parser.urlencoded({ extended:true }));
app.use(router);

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
