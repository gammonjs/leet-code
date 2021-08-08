import { findMinDifference } from './minimum-time-difference';

describe('function findMinDifference', () => {
    it('returns 1 when timePoints = ["23:59","00:00"]', () => {
        // arrange
        const timePoints = ['23:59', '00:00'];
        const expected = 1;

        // act
        const actual = findMinDifference(timePoints);

        // assert
        expect(actual).toBe(expected);
    });

    it.skip('returns 1 when timePoints = ["00:00","23:59","00:00"]', () => {
        // arrange
        const timePoints = ['00:00', '23:59', '00:00'];
        const expected = 0;

        // act
        const actual = findMinDifference(timePoints);

        // assert
        expect(actual).toBe(expected);
    });
});
