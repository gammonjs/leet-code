export function minFlipsMonoIncr(s: string): number {
    const iterator = new Iterator(s);

    let zeros = values(s, '0');
    let ones = values(s, '1');

    let result = s.length;

    let temp = 0;

    while (iterator.hasNext()) {
        const pair = iterator.next();

        if (pair === '00') {
            // if we leave as "0 ... 0" then all the 1's between would need to be 0's
            const proposal = temp + ones;
            if (proposal < result) {
                result = proposal;
            }

            // if we switch to "0 ... 1" then add this to the total
            temp += 1;
            zeros -= 2;
        } else if (pair === '01') {
            zeros -= 1;
            ones -= 1;
        } else if (pair === '10') {
            // if we switch to "1 ... 1" then all the 0's would need to be 1's
            let proposal = temp + zeros;
            if (proposal < result) {
                result = proposal;
            }

            // if we switch to "0 ... 0" then all the 1's would need to be 0's
            proposal = temp + ones;
            if (proposal < result) {
                result = proposal;
            }

            // if we switch to "0 ... 1" then add this to the total
            temp += 2;
            zeros -= 1;
            ones -= 1;
        } else if (pair === '11') {
            // if we leave as "1 ... 1" then all the 0's would need to be 1's
            let proposal = temp + zeros;
            if (proposal < result) {
                result = proposal;
            }

            // if we switch to "0 ... 1"
            temp += 1;
            ones -= 2;
        }
    }

    if (temp < result) {
        result = temp;
    }

    return result;
}

interface Iterable {
    hasNext(): boolean;
    next(): string;
}

const values = (input: string, value: string): number => {
    let first = 0;
    const last = input.length - 1;
    let total = 0;
    while (first <= last) {
        if (input.charAt(first) === value) {
            total += 1;
        }
        first += 1;
    }
    return total;
};

class Iterator implements Iterable {
    private _left: number;
    private _right: number;

    constructor(private readonly _input: string) {
        this._left = 0;
        this._right = this._input.length - 1;
    }

    hasNext(): boolean {
        return this._left < this._right;
    }

    next(): string {
        const result =
            this._input.charAt(this._left) + this._input.charAt(this._right);
        this._left += 1;
        this._right -= 1;

        return result;
    }
}
