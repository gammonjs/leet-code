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

    it('returns [[1,1],[1,1]] for input [[7,7],[7,7]]', () => {
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

    it('returns [[4,2,3],[1,3,4],[5,1,6],[1,3,4]] for input [[20,-21,14],[-19,4,19],[22,-47,24],[-19,4,19]]', () => {
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

    it('returns [[5,1,4],[1,2,3],[6,3,1]] for input [[7,3,6],[1,4,5],[9,8,2]]', () => {
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

    it('returns [[2,1,4,6],[2,6,5,4],[5,2,4,3],[4,3,1,5]] for input [[-37,-50,-3,44],[-37,46,13,-32],[47,-42,-3,-40],[-17,-22,-39,24]]', () => {
        // arrange
        const input = [
            [-37, -50, -3, 44],
            [-37, 46, 13, -32],
            [47, -42, -3, -40],
            [-17, -22, -39, 24]
        ];
        const expected = [
            [2, 1, 4, 6],
            [2, 6, 5, 4],
            [5, 2, 4, 3],
            [4, 3, 1, 5]
        ];

        // act
        const actual = matrixRankTransform(input);

        // assert
        expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });

    it.skip('returns [[2,1,4,6],[2,6,5,4],[5,2,4,3],[4,3,1,5]] for input [[-37,-26,-47,-40,-13],[22,-11,-44,47,-6],[-35,8,-45,34,-31],[-16,23,-6,-43,-20],[47,38,-27,-8,43]]', () => {
        // arrange
        const input = [
            [-37, -26, -47, -40, -13],
            [22, -11, -44, 47, -6],
            [-35, 8, -45, 34, -31],
            [-16, 23, -6, -43, -20],
            [47, 38, -27, -8, 43]
        ];
        const expected = [
            [3, 4, 1, 2, 7],
            [9, 5, 3, 10, 8],
            [4, 6, 2, 7, 5],
            [7, 9, 8, 1, 6],
            [12, 10, 4, 5, 11]
        ];

        // act
        const actual = matrixRankTransform(input);

        // assert
        expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });

    it.skip('returns [[2,1,4,6],[2,6,5,4],[5,2,4,3],[4,3,1,5]] for input [[-37,-50,-3,44],[-37,46,13,-32],[47,-42,-3,-40],[-17,-22,-39,24]]', () => {
        // arrange
        const input = [
            [-5, -42, -39, -44, 31, -46, 13, -48, -5, 30, 1, 48],
            [31, 42, 33, -44, -5, 14, -47, 48, 7, -34, -19, -20],
            [11, 2, 37, 24, 39, -6, -27, 20, -1, 14, 5, 8],
            [7, 38, 29, -28, -1, 10, 13, 12, 3, 26, 9, 16],
            [-49, 38, -47, 40, 35, -42, -43, -8, -21, 22, -39, -8],
            [-17, -38, -15, 24, -41, -46, -19, 16, 3, -42, -39, 24],
            [-9, -14, 37, -40, -9, 26, 17, -28, 3, 38, -15, -28],
            [-21, -34, 1, 36, -37, 18, 25, 16, 39, 6, -3, -20],
            [-9, 46, 25, 24, -45, -26, -39, -16, -29, -2, -35, 28],
            [43, 18, 37, 4, -49, 18, 37, 24, -9, -46, 49, 48],
            [43, -46, -39, -8, 35, 26, 49, 48, -29, -42, 5, -44],
            [-5, 18, 9, -20, 35, -18, -47, -4, -5, -14, -47, 44]
        ];
        const expected = [
            [14, 4, 5, 3, 25, 2, 21, 1, 14, 24, 15, 29],
            [21, 28, 26, 3, 14, 20, 1, 29, 17, 4, 10, 9],
            [19, 16, 27, 23, 28, 10, 5, 22, 15, 20, 17, 18],
            [17, 27, 25, 5, 15, 19, 21, 20, 16, 23, 18, 22],
            [1, 27, 2, 28, 26, 4, 3, 10, 8, 21, 5, 10],
            [9, 6, 10, 23, 4, 2, 7, 21, 16, 3, 5, 23],
            [13, 12, 27, 4, 13, 23, 22, 5, 16, 28, 11, 5],
            [8, 7, 13, 24, 5, 22, 23, 21, 25, 15, 12, 9],
            [13, 29, 24, 23, 2, 8, 4, 9, 7, 14, 6, 25],
            [28, 22, 27, 10, 1, 22, 27, 23, 9, 2, 30, 29],
            [28, 1, 5, 8, 26, 23, 30, 29, 7, 3, 17, 2],
            [14, 22, 16, 6, 26, 9, 1, 15, 14, 10, 1, 27]
        ];

        // act
        const actual = matrixRankTransform(input);

        // assert
        expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });
});
