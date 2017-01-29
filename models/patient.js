var mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({


           name :{
                  first :String,
                   last :String,
                 },
          ageOf : Number,
      birthDate : String,
         gender : String,
        phoneNo : String,
          info  : String

});

module.exports = mongoose.model('Patient',PatientSchema);
