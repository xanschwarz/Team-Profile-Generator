// Require the intern subclass for testing
const Intern = require("../lib/intern");

// Instantiate a new intern object and appropriate test variables.
const testIntern = new Intern(
  "Alia",
  "3",
  "alia@email.com",
  "University of California San Diego"
);
const testSchool = "University of California San Diego";
const testRole = "Intern";

// Suite of tests for the intern subclass. Checks intern-specific School attending property input value against test variable. Checks that the get
// property methods return the corresponding property values.
describe("Intern", () => {
  it("Sets school attending value to provided input", () => {
    expect(testIntern.school).toBe(testSchool);
  });

  describe("getSchool", () => {
    it("Returns the value within the objects school attending property", () => {
      expect(testIntern.getSchool()).toBe(testSchool);
    });
  });

  describe("getRole", () => {
    it("Returns the value within the objects role property", () => {
      expect(testIntern.getRole()).toBe(testRole);
    });
  });
});
