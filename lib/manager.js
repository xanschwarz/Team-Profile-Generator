const Employee = require('./employee');

class Manager extends Employee {
    // Check against subclass examples, may need to change/add to this.
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}