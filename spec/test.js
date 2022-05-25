const hasUppercase = require('./validations/hasUpperCase');
const hasLowercase = require('./validations/hasLowerCase');
const hasNumeric = require('./validations/hasNumeric');

let year = 2022;

describe('get year date', () => {
    it('should be a number', () => {
        expect(year).toBe(2022);
    });
});

let admin = true;

describe('verify authority', () => {
    it('should be true', () => {
        expect(admin).toBe(true);
    });
});

let password = 'AAAAa1';
describe('Validate password ->', () => {

    describe('checking case', () => {
        it('password should contain uppercase', () => {

            expect(hasUppercase(password)).toBe(true);
        });
    });

    describe('checking case ->', () => {
        it('should contain lowercase', () => {
            expect(hasLowercase(password)).toBe(true);
        });
    });

    describe('checking numeric ->', () => {
        it('password should contain number', () => {
            expect(hasNumeric(password)).toBe(true);
        });
    });
})