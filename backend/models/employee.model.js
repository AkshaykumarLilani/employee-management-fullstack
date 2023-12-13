const {Schema, model} = require('mongoose');
/*
- First Name
- Last Name
- Email
- Department (Select Tag with Tech, Marketing, and Operations as options)
- Salary
*/
const employeeSchema = Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    department: {
        type: String,
        enums: ["Tech", "Marketing", "Operations"],
        required: true
    },
    salary: {
        type: Number,
        min: 0,
        required: true
    }
}, {timestamps: true});

const Employee = model("employee", employeeSchema);

module.exports = Employee;