// Require the employee class for testing
const Employee = require("../lib/employee");

// Instantiate a new employee object and appropriate test variables.
const testEmployee = new Employee(
  "Leto",
  "1",
  "leto@email.com"
);
const testName = "Leto";
const testID = "1";
const testEmail = "leto@email.com";
const testRole = "Employee";

// Suite of tests for the employee class. Checks that an object is created. Checks objects property input values against test variables. Checks that
// the get property methods return the corresponding property values.
describe("Employee", () => {
  it("Generates a new employee object, based off the appropriate model", () => {
    expect(typeof testEmployee).toBe("object");
  });

  it("Sets name value to provided input", () => {
    expect(testEmployee.name).toBe(testName);
  });

  it("Sets ID value to provided input", () => {
    expect(testEmployee.id).toBe(testID);
  });

  it("Sets email value to provided input", () => {
    expect(testEmployee.email).toBe(testEmail);
  });

  describe("getName", () => {
    it("Returns the value within the objects name property", () => {
      expect(testEmployee.getName()).toBe(testName);
    });
  });

  describe("getId", () => {
    it("Returns the value within the objects ID property", () => {
      expect(testEmployee.getId()).toBe(testID);
    });
  });

  describe("getEmail", () => {
    it("Returns the value within the objects email property", () => {
      expect(testEmployee.getEmail()).toBe(testEmail);
    });
  });

  describe("getRole", () => {
    it("Returns the value within the objects role property", () => {
      expect(testEmployee.getRole()).toBe(testRole);
    });
  });
});
