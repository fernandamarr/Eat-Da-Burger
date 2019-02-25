// Routes 
var express = require("express");

// Use router method off of express object to control routes in the application
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgerControl = require("../models/burger.js");

// Export routes for server.js to use.
module.exports = router;