var express = require('express');
var router = express.Router();
const multer = require('multer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HVAC Doctor' });
});

var upload = multer({ storage: storage })

router.post('/upload', upload.single('resultfile'),(req,res,next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next (error)
  }
  res.send(file)
})

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

module.exports = router;
