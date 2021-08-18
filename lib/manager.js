const Employee = require('./employee');

// This works but if there's issues further in development consider the following edit.
class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

// class Manager extends Employee {
//     constructor(name, id, email, officeNumber) {
//         super (name, id, email);
//         this.officeNumber = officeNumber;
//     }

//     getOfficeNumber() {
//         return this.officeNumber;
//     }

//     getRole() {
//         return 'Manager';
//     }
// }

module.exports = Manager;