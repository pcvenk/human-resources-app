var mongoose = require('mongoose');
var dbURL = 'mongodb://localhost/HR';

require('../database/models/employee');
require('../database/models/team');

mongoose.connect(dbURL);

// mongoose.connection.on('error', function(error){
//    if(error){
//        console.log(error);
//    }
// });
//
// mongoose.connection.once('open', function(success){
//    if(success){
//        console.log('Connection established');
//    }
// });

//close the mongoose connection on Control+C
process.on('SIGINT', function(){
   mongoose.connection.close(function(){
       console.log('Mongoose default connection closed');
       process.exit(0);
   });
});

