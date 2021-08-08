import { matrixRankTransform } from './matrix-rank-transform';

describe('function matrixRankTransform(matrix: number[][]): number[][]', () => {
    it('returns [[1,2],[2,3]] for input [[1,2],[3,4]]', () => {
        // arrange
        const input = [
            [1, 2],
            [3, 4]
        ];
        const expected = [
            [1, 2],
            [2, 3]
        ];

        // act
        const actual = matrixRankTransform(input);

        // assert
        expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });

    it.skip('returns [[1,1],[1,1]] for input [[7,7],[7,7]]', () => {
        // arrange
        const input = [
            [7, 7],
            [7, 7]
        ];
        const expected = [
            [1, 1],
            [1, 1]
        ];

        // act
        const actual = matrixRankTransform(input);

        // assert
        expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });

    it.skip('returns [[4,2,3],[1,3,4],[5,1,6],[1,3,4]] for input [[20,-21,14],[-19,4,19],[22,-47,24],[-19,4,19]]', () => {
        // arrange
        const input = [
            [20, -21, 14],
            [-19, 4, 19],
            [22, -47, 24],
            [-19, 4, 19]
        ];
        const expected = [
            [4, 2, 3],
            [1, 3, 4],
            [5, 1, 6],
            [1, 3, 4]
        ];

        // act
        const actual = matrixRankTransform(input);

        // assert
        expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });

    it.skip('returns [[5,1,4],[1,2,3],[6,3,1]] for input [[7,3,6],[1,4,5],[9,8,2]]', () => {
        // arrange
        const input = [
            [7, 3, 6],
            [1, 4, 5],
            [9, 8, 2]
        ];
        const expected = [
            [5, 1, 4],
            [1, 2, 3],
            [6, 3, 1]
        ];

        // act
        const actual = matrixRankTransform(input);

        // assert
        expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });
});
