var express = require('express');
var router = express.Router();
const multer = require('multer');
const doctor = require('../controllers/hvacdoctor');
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HVAC Doctor' });
});


const storage = multer.diskStorage({
  destination: function (req,file,cb) {
    cb(null,'uploads')
  },
  filename: function (req,file,cb) {
    cb(null,'HVACresultfile' + '.' + 'csv');
  }
})

var upload = multer({ storage:storage})
/* defined storage , so var upload could use it , defined var upload so router.post could use it.
This is critical for defining scope*/
function fileFilter (req,file,cb) {
  if (file.mimetype != 'text/csv') {
    console.log('You must upload CSV files.')
    cb(null,false)
  }
}

router.post('/upload', upload.single('HVACresultfile.csv'),(req,res,next) => {
  const file = req.file

  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next (error)
  } else if (! req.file.path) {
    const error = new Error('file uploaded no path')
    error.httpStatusCode = 400
    return next (error)
  }

  console.log(file)
  res.send(file)
})

module.exports = router;

