var express = require('express');
var router = express.Router();
const multer = require('multer');
var Excel = require('exceljs');
const index = require("../routes/index")
const path = require('path')

console.log('hvac doctor loads')


var workbook = new Excel.Workbook();
var myworkbook = workbook.csv.readFile('uploads/HVACresultfile.csv')
var worksheet = workbook.getWorksheet('uploads/HVACresultfile.csv')

function readFile (myworkbook) {
    myworkbook.then(function(result){
        try {
            workbook.csv.writeFile('uploads/wutwutpromise.xlsx')
            console.log('Look in uploads/wutwutpromise')
        } catch(err){
            console.log(err)
        }}
    )

writeFile(myworkbook)
}

function writeFile (myworkbook) {
    workbook.xlsx.writeFile('uploads/wutwut2')
        .then(function() {
            console.log('written as xlsx')
        });
    }



readFile(myworkbook)

// remove and change readfile() if code does not work.