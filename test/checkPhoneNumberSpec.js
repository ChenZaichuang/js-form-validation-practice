'use strict';

describe('checkPhoneNumber test', () => {
    it('should recognize that the phoneNumber of type 1 is valid', () => {
        const validPhoneNumber = '+12 123 1234 1234';
        const validPhoneNumberResult = true;
        expect(checkPhoneNumber(validPhoneNumber)).toEqual(validPhoneNumberResult);
    });
});

describe('checkPhoneNumber test', () => {
    it('should recognize that the phoneNumber of type 2 is valid', () => {
        const validPhoneNumber = '+(12) 123-1234-1234';
        const validPhoneNumberResult = true;

        expect(checkPhoneNumber(validPhoneNumber)).toEqual(validPhoneNumberResult);
    });
});

describe('checkPhoneNumber test', () => {
    it('should recognize that the phoneNumber of type 3 is valid', () => {
        const validPhoneNumber = '+1234567890123';
        const validPhoneNumberResult = true;
        expect(checkPhoneNumber(validPhoneNumber)).toEqual(validPhoneNumberResult);
    });
});

describe('checkPhoneNumber test', () => {
    it('should recognize that the phoneNumber of type 4 is valid', () => {
        const validPhoneNumber = '+(12) 123-1234-1234';
        const validPhoneNumberResult = true;
        expect(checkPhoneNumber(validPhoneNumber)).toEqual(validPhoneNumberResult);
    });
});