var express = require('express');
var router = express.Router();
const multer = require('multer');
var Excel = require('exceljs');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var workbook = new Excel.Workbook();

workbook.creator = 'Check console.log for time'
workbook.lastModifiedBy = 'Her';
workbook.created = new Date(1985, 8, 30);
workbook.modified = new Date(Date.now());
workbook.lastPrinted = new Date(2016, 9, 27);
console.log(${Date.now()},'excel file should have been modified ')