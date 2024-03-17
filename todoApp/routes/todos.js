const express  = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");

//define APi routes
router.post("/createTodo", createTodo);
//Aviiiiii

module.exports = router;