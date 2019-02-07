var express = require('express');
var router = express.Router();
const multer = require('multer');
const doctor = require('../controllers/hvacdoctor');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HVAC Doctor' });
});

var upload = multer({ dest: 'uploads' })

var storage = multer.diskStorage({
  destination: function (req,file,cb) {
    cb(null,'uploads')
  },
  filename: function (req,file,cb) {
    cb(null,file.fieldname)
  }
})


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

  console.log(file.name)
  res.send(file)
})

module.exports = router;