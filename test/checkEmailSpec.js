'use strict';

describe('checkEmail test', () => {
    it('should recognize the invalidation that the email address not contains \'@\'', () => {
        const invalidEmail = '1234.com';
        const invalidEmailResult = false;
        expect(checkEmail(invalidEmail)).toEqual(invalidEmailResult);
    });
});

describe('checkEmail test', () => {
    it('should recognize the invalidation that the email address not contains \'.\'', () => {
        const invalidEmail = '1234@567com';
        const invalidEmailResult = false;
        expect(checkEmail(invalidEmail)).toEqual(invalidEmailResult);
    });
});

describe('checkEmail test', () => {
    it('should recognize that that the email address is valid', () => {
        const validEmail = '1234@567.com';
        const validEmailResult = true;
        expect(checkEmail(validEmail)).toEqual(validEmailResult);
    });
});