const Manager = require('../lib/manager');

const testManager = new Manager('Jessica', '2', 'jessica@email.com', '100');
const testOfficeNumber = '100';
const testRole = 'Manager';

describe('Manager', () => {
    it('Sets office number value to provided input', () => {
        expect(testManager.officeNumber).toBe(testOfficeNumber);
    })

    describe('getOfficeNumber', () => {
        it('Returns the value within the objects office number property', () => {
            expect(testManager.getOfficeNumber()).toBe(testOfficeNumber);
        })
    })
    
    describe('getRole', () => {
        it('Returns the value within the objects role property', () => {
            expect(testManager.getRole()).toBe(testRole);
        })
    })
})