const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: String
    },
    class: {
        type: String,
    },
    subjects: {
        type: Array,
    },
    attendance: {
        type: Array
    }
})

module.exports = mongoose.model('Employee', EmployeeSchema);