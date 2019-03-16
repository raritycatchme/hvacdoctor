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
    console.log('reads')
    console.log(`${myworkbook}`)

    myworkbook.then(function(result){
        try {
            writeFile(myworkbook)
            console.log('tried')

        } catch(err){
            console.log(err)
        }}
    )

}


    // var promise1 = new Promise(function(resolve, reject) {
    //     setTimeout(function() {
    //       resolve('foo');
    //     }, 300);
    //   });

    //   promise1.then(function(value) {
    //     console.log(value);
    //     // expected output: "foo"
    //   });

    //   console.log(promise1);
    //   // expected output: [object Promise]



readFile(myworkbook)

// remove and change readfile() if code does not work.