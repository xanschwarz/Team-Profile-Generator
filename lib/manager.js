const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;

// Can you do it like this?
// class Manager extends Employee {
//     constructor(officeNumber) {
//         this.officeNumber = officeNumber;
//     }

//     getRole() {
//         return 'Manager';
//     }

//     getOfficeNumber() {
//         return this.officeNumber;
//     }
// }
