var colors = require('colors');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var db = mongoose.connection;
var dbUrl = 'mongodb://localhost/HR';

var TeamSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

var Team = mongoose.model('Team', TeamSchema);

var EmployeeSchema = new Schema({
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    image: {
        type: String,
        default: 'images/user.png'
    },
    address: {
        lines: {
            type: [String]
        },
        postal: {
            type: String
        }
    }
});

var Employee = mongoose.model('Employee', EmployeeSchema);

db.on('error', function () {
    console.log('there was an error communicating with the database');
});

function insertTeams (callback) {
    Team.create([{
        name: 'Product Development'
    },
    {
        name: 'Dev Ops'
    },
    {
        name: 'Accounting'
    }], function (error, pd, ops, acct) {
        if (error) {
            return callback(error);
        } else {
            console.info('teams successfully added');
            callback(null, pd, ops, acct);
        }
    });
}
function insertEmployees (pd, ops, acct, callback) {
    Employee.create([{
        name: {
            first: 'John',
            last: 'Adams'
        },
        team: pd._id,
        address: {
            lines: ['2 Lincoln Memorial Cir NW'],
            zip: 20037 }
    },
    {
        name: {
            first: 'Thomas',
            last: 'Jefferson'
    },
        team: acct,
        address: {
            lines: ['1600 Pennsylvania Avenue', 'White House'],
            zip: 20500 }
    },
    {
        name: {
            first: 'James',
            last: 'Madison'
    },
        team: acct,
        address: {
            lines: ['2 15th St NW', 'PO Box 8675309'],
            zip: 20007 }
    },
    {
        name: {
            first: 'James',
            last: 'Monroe'
    },
        team: acct,
        address: {
            lines: ['1850 West Basin Dr SW', 'Suite 210'],
            zip: 20242 }
    }], function (error, johnadams) {
        if (error) {
            return callback(error);
        } else {
            console.info('employees successfully added');
            callback(null, {
                team: pd,
                employee: johnadams
            });
        } })
}

mongoose.connect(dbUrl, function (err) {
    if (err) {
        return console.log('there was a problem connecting to the database!' + err);
    }
    console.log('connected!');
    insertTeams(function (err, pd, ops, acct) {
        if (err) {
            return console.log(err);
        }
        insertEmployees(pd, ops, acct, function (err, result) {
            if (err) {
                console.error(err);
            } else {
                console.info('database activity complete');
            }
            db.close();
            process.exit();
        });
    });
});

// mongoose.connect(dbUrl, function(err){
//
//     if(err){
//         console.log(err);
//     }
//     console.log('Connected');
//
//     //creating multiple instances of team model at a time with the create() method
//     //you pass in an array of objects and than as second parameter a function
//     Team.create(
//         [
//             {
//                 name: 'Production development'
//             },
//             {
//                 name: 'Dev Ops'
//             },
//             {
//                 name: 'Accounting'
//             }
//             //function expects two parameters, error and docs(pd, devops, acct)
//         ], function (error, docs) {
//             if (error) {
//                 console.log(error);
//             } else {
//                 // console.dir(pd);
//                 // console.dir(devops);
//                 // console.dir(acct);
//                 console.log(docs);
//                 db.close();
//                 process.exit();
//             }
//         });
// });

// mongoose.connect(dbUrl, function(err){
//    if(err){
//        console.log(err);
//    }else{
//        console.log("Connected");
//    }
// //creating a reference to the model and making a new instance out of it
//     var team = new Team(
//         {
//             name: 'MyTeam'
//         }
//     );
//
//     team.save(function(err, doc){
//
//         if(err){
//             console.log(err);
//         }else{
//             console.log(doc);
//         }
//     });
//
// });




