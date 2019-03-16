var express = require('express');
var router = express.Router();
const multer = require('multer');
var Excel = require('exceljs');
const index = require("../routes/index")
const path = require('path')
const fs = require('fs')
console.log('hvac doctor loads')


var workbook = new Excel.Workbook();
//var myworkbook = workbook.csv.readFile('uploads/HVACresultfile.csv')
// if no workbook await the file function should go here or something.

function findFile() {

var myworkbook = workbook.csv.readFile('uploads/HVACresultfile.csv')
var worksheet = workbook.getWorksheet('hvac_report_csv2')

assessFile(myworkbook,worksheet)
}

function assessFile(myworkbook,worksheet) {
   myworkbook.then(function(result){
    try {
        worksheet.getCell('A6').fill = {
            type: solid,
            bgcolor: {argb:'FFFF0000'}
        }
    } catch(err){
        console.log(err)
    }
    workbook.xlsx.writeFile('uploads/derf.xlsx')
})

    writeFile(myworkbook,worksheet)
}

function formatWorkbook(myworkbook) {

}


function writeFile (myworkbook,worksheet) {
    myworkbook.then(function(result){
        try {
            workbook.xlsx.writeFile('uploads/wutwutpromise')
            console.log('Look in uploads/wutwutpromise')
        } catch(err){
            console.log(err)
        }}
    )
}

findFile()




// remove and change readfile() if code does not work.