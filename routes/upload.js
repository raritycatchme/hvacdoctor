var express = require('express');
var router = express.Router();
const multer = require('multer');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
