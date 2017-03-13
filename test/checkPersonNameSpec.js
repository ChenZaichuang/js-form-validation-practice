'use strict';

describe('checkPersonName test', () => {
    it('should recognize the invalidation that the personName is too short', () => {
        const shortPersonName = 'abcdefg';
        const shortPersonNameResult = false;
        expect(checkPersonName(shortPersonName)).toEqual(shortPersonNameResult);
    });
});

describe('checkPersonName test', () => {
    it('should recognize the invalidation that the personName contains non-word character', () => {
        const nonWordPersonName = 'abcdefg.1234';
        const nonWordPersonNameResult = false;
        expect(checkPersonName(nonWordPersonName)).toEqual(nonWordPersonNameResult);
    });
});

describe('checkPersonName test', () => {
    it('should recognize the invalidation that the personName is too long', () => {
        const longPersonName = '123456781234567812345678123456781';
        const longPersonNameResult = false;
        expect(checkPersonName(longPersonName)).toEqual(longPersonNameResult);
    });
});

describe('checkPersonName test', () => {
    it('should recognize the invalidation that the personName is null', () => {
        const nullPersonName = '';
        const nullPersonNameResult = false;
        expect(checkPersonName(nullPersonName)).toEqual(nullPersonNameResult);
    });
});

describe('checkPersonName test', () => {
    it('should recognize that the personName is valid', () => {
        const validPersonName = 'abcdefg_1234';
        const validPersonNameResult = true;
        expect(checkPersonName(validPersonName)).toEqual(validPersonNameResult);
    });
});

describe('checkPersonName test', () => {
    it('should recognize that the personName is undefined', () => {
        const validPersonName = undefined;
        const validPersonNameResult = false;
        expect(checkPersonName(validPersonName)).toEqual(validPersonNameResult);
    });
});



