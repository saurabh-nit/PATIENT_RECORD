var express = require('express');
var router = express.Router();
var Patient = require("../models/patient");
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Add Patient Details' });
});


router.get('/list', function(req, res, next) {

      Patient.find({ }).exec(function(err,patients){
        if(err)
            {}
        else {
            res.render('list', { pts : patients });
              //res.json(students);
             }
      })

});



router.post('/',function(req,res){
     var data1 = req.body;        // data coming from client
     //res.send(std1);          // send response to clint
     //console.log(data1);       // will show on server terminal
     var pts = new Patient(data1);
    // console.log(pts);
     pts.save(function(err,result){
    //   console.log(err);
           if(err){
                return res.json({
                              error : true,
                              reason : err,
                               });
           }else{
                return res.json({
                              error : false,
                              });
                }
        });
  });

module.exports = router;
