// 25 / 33 test cases passed.

export function minCut(s: string): number {
    for (let i: number = 0; i < s.length; i++) {
        const combinations: Array<Array<string>> = combinationsOf(s, i);

        for (let j: number = 0; j < combinations.length; j++) {
            const partitions = combinations[j];
            let result = true;

            for (
                let k: number = 0;
                k < partitions.length && result === true;
                k++
            ) {
                result = isPalindrome(partitions[k]) && result;
            }

            if (result) {
                return i;
            }
        }
    }

    return 0;
}

export function combinationsOf(s: string, i: number): Array<Array<string>> {
    if (isPalindrome(s)) {
        return [[s]];
    }

    if (i === 0) {
        return [];
    }

    let paritions: Array<Array<string>> = [];

    for (let j: number = 0; j < s.length; j++) {
        const thing = s.slice(0, j);

        if (isPalindrome(thing)) {
            const rest = s.slice(j, s.length);

            combinationsOf(rest, i - 1).forEach((x) => {
                let foo = true;
                for (let z = 0; z < x.length && foo; z++) {
                    foo = foo && isPalindrome(x[z]);
                }
                if (foo) {
                    paritions.push([thing, ...x]);
                }
            });
        }
    }

    return paritions;
}

export function isPalindrome(s: string): boolean {
    if (s.length === 0) {
        return false;
    }
    return s === s.split('').reverse().join('');
}
