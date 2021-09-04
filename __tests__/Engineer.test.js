const Engineer = require('../lib/engineer');

const testEngineer = new Engineer('Paul', '3', 'paul@email.com');
const testName = 'Paul';
const testID = '3';
const testEmail = 'paul@email.com';
const testRole = 'Engineer';

describe('Engineer', () => {
    it('Generates a new Engineer object, based off the appropriate model', () => {
        expect(typeof(testEngineer)).toBe('object');
    })

    it('Sets name value to provided input', () => {
        expect(testEngineer.name).toBe(testName);
    })

    it('Sets ID value to provided input', () => {
        expect(testEngineer.id).toBe(testID);
    })

    it('Sets email value to provided input', () => {
        expect(testEngineer.email).toBe(testEmail);
    })

    describe('getName', () => {
        it('Returns the value within the objects name property', () => {
            expect(testEngineer.getName()).toBe(testName);
        })
    })
    
    describe('getId', () => {
        it('Returns the value within the objects ID property', () => {
            expect(testEngineer.getId()).toBe(testID);
        })
    })

    describe('getEmail', () => {
        it('Returns the value within the objects email property', () => {
            expect(testEngineer.getEmail()).toBe(testEmail);
        })
    })

    describe('getRole', () => {
        it('Returns the value within the objects role property', () => {
            expect(testEngineer.getRole()).toBe(testRole);
        })
    })
})