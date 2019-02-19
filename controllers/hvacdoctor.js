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


const uploadStream = fs.createReadStream("uploads/uploadedFile.csv");

const readFile = (uploadStream) => {
    var workbook = new Excel.Workbook();
    workbook.csv.read(uploadStream)
    .then(function(worksheet) {
        console.log('reads')
    });
}

readFile(uploadStream)

const writeFile = (uploadStream) => {
    var workbook = createAndFillWorkbook(uploadStream);
    workbook.csv.writeFile('diagnosis.csv')
        .then(function() {
            console.log('writes but is it with data ?')
        });}


// writeFile(uploadStream)