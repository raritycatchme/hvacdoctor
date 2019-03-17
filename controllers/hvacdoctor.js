var express = require('express');
var router = express.Router();
const multer = require('multer');
var Excel = require('exceljs');
const index = require("../routes/index")

var workbook = new Excel.Workbook();

//var myworkbook = workbook.csv.readFile('uploads/HVACresultfile.csv')
// if no workbook await the file function should go here or something.


    /*function will be to wait for file upload and confirm it is there before
    calling convert file **move csvworkbook variable when I do adjust.*/


    async function convertFile(workbook) {
    var workbook = new Excel.Workbook();
    csvWorkbook = workbook.csv.readFile('./uploads/HVACresultfile.csv')
        await csvWorkbook.then(async function(result){
            await workbook.xlsx.writeFile('./uploads/success.xlsx').then( () => {
            console.log('converted')
            })

        })
    }

    function formatWorkbook(workbook) {
        var workbook = new Excel.Workbook();
        var xlsxWorkbook = workbook.xlsx.readFile('uploads/success.xlsx')
        var xlsxWorksheet = workbook.getWorksheet('sheet1')

        xlsxWorkbook.then(async function(result){
            try {
                // CALL CONVERT WHEN YOU FINISH READING YOUR FILE
                await convertFile(workbook)
                // assessFile(xlsxWorkbook,xlsxWorksheet)
                console.log('assessing')
            } catch(err) {
                console.log(err)
            }
        })
    }

formatWorkbook(workbook)

// function assessFile(xlsxWorkbook,xlsxWorksheet) {
//     var workbook = new Excel.Workbook();
//     workbook.xlsx.readFile('uploads/success.xlsx')
//     workbook.addWorksheet('success')
// }




// remove and change readfile() if code does not work.
