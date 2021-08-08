function clone(grid: number[][]): number[][] {
    const foo: number[][] = [];

    grid.forEach((row: number[]) => {
        const newRow: number[] = [];
        row.forEach((cell: number) => newRow.push(cell));
        foo.push(newRow);
    });

    return foo;
}

function compute(grid: number[][], row: number, col: number): number {
    if (col < 0 || row < 0 || col > grid.length - 1 || row > grid.length - 1) {
        return 0;
    }

    if (grid[row][col] === 0) {
        return 0;
    }

    let area = 1;
    grid[row][col] = 0;

    area += compute(grid, row + 1, col);
    area += compute(grid, row - 1, col);
    area += compute(grid, row, col + 1);
    area += compute(grid, row, col - 1);

    // grid[row][col] = 1;

    return area;
}

function largestIsland(grid: number[][]): number {
    // create permutations of the grid with one zero changed to a 1

    const permuations = [];

    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 0) {
                const permuation = clone(grid);
                permuation[i][j] = 1;
                permuations.push(permuation);
            }
        }
    }

    if (permuations.length === 0) {
        return Math.pow(grid.length, 2);
    }

    let maxArea = 0;

    permuations.forEach((permuation) => {
        for (let i: number = 0; i < grid.length; i++) {
            for (let j: number = 0; j < grid[i].length; j++) {
                const area = compute(permuation, i, j);
                if (area > maxArea) {
                    maxArea = area;
                }
            }
        }
    });

    return maxArea;
}

interface ITestcase {
    grid: number[][];
    expected: number;
}

const testCases: Array<ITestcase> = [
    {
        /*
            1     0     
            
            0     1
         */
        grid: [
            [1, 0],
            [0, 1]
        ],

        /*
            1     1     
            
            0     1
         */
        expected: 3
    },
    {
        /*
            1     1     
            
            1     0    
        */
        grid: [
            [1, 1],
            [1, 0]
        ],
        expected: 4
    },
    /*
            1     1     
            
            1     1    
        */
    {
        grid: [
            [1, 1],
            [1, 1]
        ],
        expected: 4
    },
    /*
            1    1    0    1
            
            1    1    0    1

            0    0    0    0

            0    0    0    0
        */
    {
        grid: [
            [1, 1, 0, 1],
            [1, 1, 0, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        expected: 7
    },
    /*
        1    1    0    1
        
        1    1    0    1

        0    0    0    0

        0    0    0    0
    */
    {
        grid: [
            [1, 1, 0, 1],
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [1, 0, 1, 1]
        ],
        expected: 9
    }
];

testCases.forEach((testcase: ITestcase) => {
    console.log(testcase.grid);
    console.log(testcase.expected);
    console.log(largestIsland(testcase.grid));
    console.log(largestIsland(testcase.grid) === testcase.expected);
});
