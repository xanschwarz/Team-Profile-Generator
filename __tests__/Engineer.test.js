// Require the engineer subclass for testing
const Engineer = require("../lib/engineer");

// Instantiate a new engineer object and appropriate test variables.
const testEngineer = new Engineer(
  "Paul",
  "3",
  "paul@email.com",
  "PaulMuadDib"
);
const testGitHub = "PaulMuadDib";
const testRole = "Engineer";

// Suite of tests for the engineer subclass. Checks engineer-specific GitHub username property input value against test variable. Checks that the get
// property methods return the corresponding property values.
describe("Engineer", () => {
  it("Sets GitHub username value to provided input", () => {
    expect(testEngineer.github).toBe(testGitHub);
  });

  describe("getGitHub", () => {
    it("Returns the value within the GitHub username property", () => {
      expect(testEngineer.getGitHub()).toBe(testGitHub);
    });
  });

  describe("getRole", () => {
    it("Returns the value within the objects role property", () => {
      expect(testEngineer.getRole()).toBe(testRole);
    });
  });
});
