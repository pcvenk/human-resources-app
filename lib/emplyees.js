var colors = require('colors');
var db = require('../database/employees');

exports.getEmployees = getEmployees;
exports.getEmployee = getEmployee;

function getEmployees (callback){

    setTimeout(function(){
        //null passed in as the first parameter refers to an err object, because
        //there isn't any, null is passed in as the parameter.
        callback(null, db);
    }, 500);

};

function getEmployee (employeeID, callback){

    //a common convention in node is to pass two parameters as the callback function.
    //first is the error object, second refers to the actual data.
    getEmployees(function (err, data){
       if(err){
           return callback(err);
       }

       var result = data.find(function(employee){
          return employee.id === employeeID;
       });

        callback(null, result);
    });
};

console.log(Date.now());
// → 1387407600000
console.log(new Date(1477928866223));
// → Thu Dec 19 2013 00:00:00 GMT+0100 (CET)

console.log('this should be red'.red);