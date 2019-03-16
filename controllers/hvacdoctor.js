var express = require('express');
var router = express.Router();
const multer = require('multer');
var Excel = require('exceljs');
const index = require("../routes/index")
<<<<<<< HEAD
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
=======
const path = require('path')
const fs = require('fs')

var workbook = new Excel.Workbook();
>>>>>>> 6bc00aefaea32c5e9aafc11fa28e9cb7a4a6eb5e

//var myworkbook = workbook.csv.readFile('uploads/HVACresultfile.csv')
// if no workbook await the file function should go here or something.

function findFile(workbook) {
    /*function will be to wait for file upload and confirm it is there before
    calling convert file **move csvworkbook variable when I do adjust.*/
convertFile(workbook)
}

findFile()


function convertFile(workbook) {
    var workbook = new Excel.Workbook();
    csvWorkbook = workbook.csv.readFile('uploads/HVACresultfile.csv')
    csvWorkbook.then(function(result){
    try {
    workbook.xlsx.writeFile('uploads/success.xlsx')
    console.log('converted')

    } catch(err){
    console.log(err)
    }
})

}

function formatWorkbook(workbook) {
    var workbook = new Excel.Workbook();
    var xlsxWorkbook = workbook.xlsx.readFile('uploads/success.xlsx')
    var xlsxWorksheet = workbook.getWorksheet('sheet1')

    xlsxWorkbook.then(function(result){
        try {
            assessFile(xlsxWorkbook,xlsxWorksheet)
            console.log('assessing')
        } catch(err) {
            console.log(err)
        }
    })
}

function assessFile(workbook,xlsxWorkbook,xlsxWorksheet) {
    console.log('burf')
}


formatWorkbook()

<<<<<<< HEAD
// writeFile(uploadStream)
=======
// remove and change readfile() if code does not work.
>>>>>>> 6bc00aefaea32c5e9aafc11fa28e9cb7a4a6eb5e
