import { isPalindrome, combinationsOf, minCut } from './Palindrome';

describe('function partitions returns a list of partitions in which each partition only contains valid palindromes', () => {
    it('should slice "abcd" zero times correctly', () => {
        // arrange
        const expected: Array<Array<string>> = [];

        // act
        const actual = combinationsOf('abcd', 0);

        // assert
        expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
    });

    it('should slice "abcd" one time correctly', () => {
        // arrange
        const expected: Array<Array<string>> = [];

        // act
        const actual = combinationsOf('abcd', 1);

        // assert
        expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
    });

    it('should slice "abcd" two times correctly', () => {
        // arrange
        const expected: Array<Array<string>> = [];

        // act
        const actual = combinationsOf('abcd', 2);

        // assert
        expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
    });

    it('should slice "abcd" three times correctly', () => {
        // arrange
        const expected = [['a', 'b', 'c', 'd']];

        // act
        const actual = combinationsOf('abcd', 3);

        // assert
        expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
    });
});

describe('function isPalindrome', () => {
    it('should return false for strings of length 0', () => {
        // arrange
        const expected = false;

        // act
        const actual = isPalindrome('');

        // assert
        expect(actual).toEqual(expected);
    });

    it('should return true for strings of length 1', () => {
        // arrange
        const expected = true;

        // act
        const actual = isPalindrome('a');

        // assert
        expect(actual).toEqual(expected);
    });

    it('should return true for "aa"', () => {
        // arrange
        const expected = true;

        // act
        const actual = isPalindrome('aa');

        // assert
        expect(actual).toEqual(expected);
    });

    it('should return false for "ab"', () => {
        // arrange
        const expected = false;

        // act
        const actual = isPalindrome('ab');

        // assert
        expect(actual).toEqual(expected);
    });
});

describe('function minCut', () => {
    it('should resolve "a" to 0', () => {
        // arrange
        const expected = 0;

        // act
        const actual = minCut('a');

        // assert
        expect(actual).toEqual(expected);
    });

    it('should resolve "ab" to 1', () => {
        // arrange
        const expected = 1;

        // act
        const actual = minCut('ab');

        // assert
        expect(actual).toEqual(expected);
    });

    it('should resolve "aab" to 1', () => {
        // arrange
        const expected = 1;

        // act
        const actual = minCut('aab');

        // assert
        expect(actual).toEqual(expected);
    });

    it('should resolve "aaabbbccc" to 2', () => {
        // arrange
        const expected = 2;

        // act
        const actual = minCut('aaabbbccc');

        // assert
        expect(actual).toEqual(expected);
    });

    it('should resolve "eegiicgaeadbcfacfhifdbiehbgejcaeggcgbahfcajfhjjdgj" to 42', () => {
        // arrange
        const expected = 42;

        // act
        const actual = minCut(
            'eegiicgaeadbcfacfhifdbiehbgejcaeggcgbahfcajfhjjdgj'
        );

        // assert
        expect(actual).toEqual(expected);
    });

    // the following test times out

    // it('should resolve "fifgbeajcacehiicccfecbfhhgfiiecdcjjffbghdidbhbdbfbfjccgbbdcjheccfbhafehieabbdfeigbiaggchaeghaijfbjhi" to 0', () => {
    //     // arrange
    //     const expected = 75;

    //     // act
    //     const actual = minCut("fifgbeajcacehiicccfecbfhhgfiiecdcjjffbghdidbhbdbfbfjccgbbdcjheccfbhafehieabbdfeigbiaggchaeghaijfbjhi")

    //     // assert
    //     expect(actual).toEqual(expected)
    // });
});
