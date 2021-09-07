// Require the manager subclass for testing
const Manager = require("../lib/manager");

// Instantiate a new manager object and appropriate test variables.
const testManager = new Manager(
  "Jessica",
  "2",
  "jessica@email.com",
  "100"
);
const testOfficeNumber = "100";
const testRole = "Manager";

// Suite of tests for the manager subclass. Checks manager-specific Office Number property input value against test variable. Checks that the get
// property methods return the corresponding property values.
describe("Manager", () => {
  it("Sets office number value to provided input", () => {
    expect(testManager.officeNumber).toBe(testOfficeNumber);
  });

  describe("getOfficeNumber", () => {
    it("Returns the value within the objects office number property", () => {
      expect(testManager.getOfficeNumber()).toBe(testOfficeNumber);
    });
  });

  describe("getRole", () => {
    it("Returns the value within the objects role property", () => {
      expect(testManager.getRole()).toBe(testRole);
    });
  });
});
