// Attributed Grayton Savickas

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// This is the employee schema
// It will have an ID, First and Last name and position in the company.

let employeeSchema = new Schema({
    empId:{type: String, unique: true},
    firstName: {type: String},
    lastName: {type: String}
}, {collection: 'employees'} )

module.exports = mongoose.model('Employee', employeeSchema);