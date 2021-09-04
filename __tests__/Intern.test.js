const Intern = require('../lib/intern');

const testIntern = new Intern('Alia', '3', 'alia@email.com');
const testName = 'Alia';
const testID = '3';
const testEmail = 'alia@email.com';
const testRole = 'Intern';

describe('Intern', () => {
    it('Generates a new Intern object, based off the appropriate model', () => {
        expect(typeof(testIntern)).toBe('object');
    })

    it('Sets name value to provided input', () => {
        expect(testIntern.name).toBe(testName);
    })

    it('Sets ID value to provided input', () => {
        expect(testIntern.id).toBe(testID);
    })

    it('Sets email value to provided input', () => {
        expect(testIntern.email).toBe(testEmail);
    })

    describe('getName', () => {
        it('Returns the value within the objects name property', () => {
            expect(testIntern.getName()).toBe(testName);
        })
    })
    
    describe('getId', () => {
        it('Returns the value within the objects ID property', () => {
            expect(testIntern.getId()).toBe(testID);
        })
    })

    describe('getEmail', () => {
        it('Returns the value within the objects email property', () => {
            expect(testIntern.getEmail()).toBe(testEmail);
        })
    })

    describe('getRole', () => {
        it('Returns the value within the objects role property', () => {
            expect(testIntern.getRole()).toBe(testRole);
        })
    })
})