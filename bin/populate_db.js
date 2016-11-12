var async = require('async');
var mongoose = require('mongoose');
require(process.cwd()+'/lib/connection');

var Employee = mongoose.model('Employee');
var Team = mongoose.model('Team');

var data = {
    employees: [
        {
            id: '1000003',
            name: {
                first: 'Colin',
                last: 'Ihrig'
            },
            image: 'images/employees/1000003.png',
            address: {
                lines: ['11 Wall Street'],
                city: 'New York',
                state: 'NY',
                zip: 10118
            }
        },
        {
            id: '1000021',
            name: {
                first: 'Adam',
                last: 'Bretz'
            },
            address: {
                lines: ['46 18th St', 'St 210'],
                city: 'Pittsburgh',
                state: 'PA',
                zip: 15222
            }
        },
        {
            id: '1000022',
            name: {
                first: 'Matt',
                last: 'Liegly'
            },
            address: {
                lines: ['2 S Market Square', '(Market Square)'],
                city: 'Pittsburgh',
                state: 'PA',
                zip: 15222
            }
        },
        {
            id: '1000025',
            name: {
                first: 'Aleksey',
                last: 'Smolenchuk'
            },
            image: 'images/employees/1000025.png' /*invalid image*/,
            address: {
                lines: ['3803 Forbes Ave'],
                city: 'Pittsburgh',
                state: 'PA',
                zip: 15213
            }
        },
        {
            id: '1000030',
            name: {
                first: 'Sarah',
                last: 'Gay'
            },
            address: {
                lines: ['8651 University Blvd'],
                city: 'Pittsburgh',
                state: 'PA',
                zip: 15108
            }
        },
        {
            id: '1000031',
            name: {
                first: 'Dave',
                last: 'Beshero'
            },
            address: {
                lines: ['1539 Washington Rd'],
                city: 'Mt Lebanon',
                state: 'PA',
                zip: 15228
            }
        }
    ],
    teams: [
        {
            name: 'Software and Services Group'
        },
        {
            name: 'Project Development'
        }
    ]
};

