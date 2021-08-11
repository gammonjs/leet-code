/*
    Constraints:

    1 <= num1.length, num2.length <= 104
    num1 and num2 consist of only digits.
    num1 and num2 don't have any leading zeros except for the zero itself.

 */

export function addStrings(num1: string, num2: string): string {
    const iterator1: INumberParser = new NumberParser(num1);
    const iterator2: INumberParser = new NumberParser(num2);
    const adder = new Adder();

    let carry = '0';
    let sum = '';

    while (iterator1.hasNext() || iterator2.hasNext()) {
        const digit1: string = iterator1.next();
        const digit2: string = iterator2.next();

        const result = adder.add(digit1, digit2, carry);
        sum = result.sum + sum;
        carry = result.carry;
    }

    if (carry !== '0') {
        sum = carry + sum;
    }

    if (sum === '') {
        sum = '0';
    }

    return sum;
}

interface INumberParser {
    hasNext(): boolean;
    next(): string;
}

class NumberParser implements INumberParser {
    private _index: number;
    constructor(private readonly _number: string) {
        this._index = this._number.length - 1;
    }

    hasNext = (): boolean => this._index >= 0;

    next = (): string => {
        if (this.hasNext() === false) {
            return '0';
        }

        return this._number.charAt(this._index--);
    };
}

interface IResult {
    sum: string;
    carry: string;
}

interface IAdder {}

class Adder implements IAdder {
    private readonly _lookup: Map<string, IResult>;
    constructor() {
        this._lookup = new Map<string, IResult>();
        for (let num1: number = 0; num1 < 10; num1++) {
            for (let num2: number = 0; num2 < 10; num2++) {
                for (let carry: number = 0; carry < 10; carry++) {
                    const key =
                        num1.toString() + num2.toString() + carry.toString();
                    let sum = (num1 + num2 + carry).toString();

                    if (sum.length === 1) {
                        sum = '0' + sum;
                    }
                    const value = <IResult>{
                        sum: sum.charAt(1),
                        carry: sum.charAt(0)
                    };

                    this._lookup.set(key, value);
                }
            }
        }
    }

    add = (num1: string, num2: string, carry: string): IResult => {
        return (
            this._lookup.get(num1 + num2 + carry) ??
            <IResult>{ sum: '0', carry: '0' }
        );
    };

    debug = () => {
        console.log(this._lookup);
    };
}
