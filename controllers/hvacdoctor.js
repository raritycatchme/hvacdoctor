var express = require('express');
var router = express.Router();
const multer = require('multer');
var Excel = require('exceljs');
var workbook1 = new Excel.Workbook();
var sheet = workbook1.addWorksheet('My Sheet');
var excel = require("exceljs");
const index = require("../routes/index")

console.log('hvac doctor loads')

var workbook = new Excel.Workbook();
workbook.csv.read('HVACresultfile.csv')
    .then(function(worksheet) {
        console.log('reads')
    });


