import { minDeletions } from './character-frequencies';

describe('function minDeletions(s: string): number', () => {
    it('returns 0 for input "aab"', () => {
        // arrange
        const input = 'aab';
        const expected = 0;

        // act
        const actual = minDeletions(input);

        // assert
        expect(actual).toBe(expected);
    });

    it('returns 2 for input "aaabbbcc"', () => {
        // arrange
        const input = 'aaabbbcc';
        const expected = 2;

        // act
        const actual = minDeletions(input);

        // assert
        expect(actual).toBe(expected);
    });

    it('returns 2 for input "ceabaacb"', () => {
        // arrange
        const input = 'ceabaacb';
        const expected = 2;

        // act
        const actual = minDeletions(input);

        // assert
        expect(actual).toBe(expected);
    });

    it('returns 2 for input "bbcebab"', () => {
        // arrange
        const input = 'bbcebab';
        const expected = 2;

        // act
        const actual = minDeletions(input);

        // assert
        expect(actual).toBe(expected);
    });
});
