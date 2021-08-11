import { addStrings } from './add-strings';

// this was a pretty simple problem so no other testing was necessary for acceptance

describe('function addStrings(num1: string, num2: string): string', () => {
    it('returns "134" for inputs "11" and "123', () => {
        // arrange
        const num1: string = '11';
        const num2: string = '123';
        const expected: string = '134';

        //act
        const actual: string = addStrings(num1, num2);

        //assert
        expect(actual).toBe(expected);
    });
});
