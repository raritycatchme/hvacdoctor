var express = require('express');
var router = express.Router();
const multer = require('multer');
var Excel = require('exceljs');
const index = require("../routes/index")
const path = require('path')
const fs = require('fs')

var workbook = new Excel.Workbook();

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

// remove and change readfile() if code does not work.