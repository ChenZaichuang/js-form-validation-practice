'use strict';

describe('checkPassword test', () => {
    it('should recognize the invalidation that the contains no capital letter', () => {
        const invalidPassword = '123456.abcdef';
        const invalidPasswordResult = false;
        expect(checkPassword(invalidPassword)).toEqual(invalidPasswordResult);
    });
});

describe('checkPassword test', () => {
    it('should recognize the invalidation that the contains no number', () => {
        const invalidPassword = 'ABCDEF.abcdef';
        const invalidPasswordResult = false;
        expect(checkPassword(invalidPassword)).toEqual(invalidPasswordResult);
    });
});

describe('checkPassword test', () => {
    it('should recognize the invalidation that the contains no pecial character', () => {
        const invalidPassword = 'ABCDEF123456abcdef';
        const invalidPasswordResult = false;
        expect(checkPassword(invalidPassword)).toEqual(invalidPasswordResult);
    });
});

describe('checkPassword test', () => {
    it('should recognize the invalidation that the password is too short', () => {
        const invalidPassword = 'AB12.ab';
        const invalidPasswordResult = false;
        expect(checkPassword(invalidPassword)).toEqual(invalidPasswordResult);
    });
});

describe('checkPassword test', () => {
    it('should recognize the invalidation that the password is too long', () => {
        var invalidPassword = 'AB.ab.12';
        const invalidPasswordResult = false;
        for(let i = 0; i < 128; i++){
            invalidPassword += '1';
        }
        expect(checkPassword(invalidPassword)).toEqual(invalidPasswordResult);
    });
});

describe('checkPassword test', () => {
    it('should recognize that the password is valid', () => {
        const validPassword = 'ABCDEF.123456.abcdef';
        const validPasswordResult = true;
        expect(checkPassword(validPassword)).toEqual(validPasswordResult);
    });
});