// Constructor and methods for engineer subclass, extending on employee class.
const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGitHub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
