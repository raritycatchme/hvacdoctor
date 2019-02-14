var express = require('express');
var router = express.Router();
const multer = require('multer');
var Excel = require('exceljs');
var workbook1 = new Excel.Workbook();
var sheet = workbook1.addWorksheet('My Sheet');
var excel = require("exceljs");
const index = require("../routes/index")
const fs = require('fs')
var csv = require('fast-csv');

console.log('hvac doctor loads')


//const uploadedFile = Excel.readFile('../uploads/HVACresultfile.csv')

// const workbook =  new Excel.Workbook();
// workbook.csv.readFile(uploadedFile)
//     .then(function(worksheet) {
//         console.log('read good')
//         // use workbook or worksheet
//     });


var stream = fs.createReadStream("uploads/HVACresultfile.csv");

var csvStream = csv(stream)
    .on("data", function(data){
         console.log(data + "reads data");
    })
    .on("end", function(){
         console.log("done");
    });

stream.pipe(csvStream);