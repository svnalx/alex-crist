/*
 * Simple Node.js and Express application server for serving static assets.
 * https://gist.github.com/ryanoglesby08/1e1f49d87ae8ab2cabf45623fc36a7fe
*/
const express = require('express');
const router = express.Router();
const path = require('path');
const port = process.env.PORT || 8085;
const app = express();
const bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// test route GET http://localhost:8085/api
router.get('/', function(req, res) {
    res.json({ message: 'Alex-Crist API' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


function expressServer() {
  app.use(express.static(__dirname + '/app/dist'));
  app.listen(port);
  console.log("server started on localhost:" + port);
};

module.exports = expressServer();
