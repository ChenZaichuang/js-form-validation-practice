'use strict';

describe('checkPasswordSame test', () => {
    it('should recognize that the two passwords are the different', () => {
        const password1 = 'ABCD.1234.abcd';
        const password2 = 'ABCD.1234.abce';
        const expectResult = false;
        expect(checkPasswordSame(password1 , password2)).toEqual(expectResult);
    });
});

describe('checkPasswordSame test', () => {
    it('should recognize that the two passwords are the same', () => {
        const password1 = 'ABCD.1234.abcd';
        const password2 = 'ABCD.1234.abcd';
        const expectResult = true;
        expect(checkPasswordSame(password1 , password2)).toEqual(expectResult);
    });
});
