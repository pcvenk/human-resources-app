var mongoose = require('mongoose');

var schema = new mongoose.Schema({

    id: {
        type: String,
        required: true,
        unique: true
    },
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
        //referencing to a another model. for clarification you can add a new
        //variable Schema = mongoose.Schema
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    },
    image: {
        type: String,
        default: '../images/user.png'
    },
    address: {
        lines: {
            type: [String]
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        zip: {
            type: String
        }
    }
});

mongoose.exports = mongoose.model('Employee', schema);

