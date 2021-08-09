/*
    Given an m x n matrix, return a new matrix answer where answer[row][col] is the rank of matrix[row][col].

    The rank is an integer that represents how large an element is compared to other elements. It is calculated using the following rules:

    The rank is an integer starting from 1.
    If two elements p and q are in the same row or column, then:
    If p < q then rank(p) < rank(q)
    If p == q then rank(p) == rank(q)
    If p > q then rank(p) > rank(q)
    The rank should be as small as possible.
    It is guaranteed that answer is unique under the given rules.

    Constraints:

    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 500
    -109 <= matrix[row][col] <= 109
 */

// 9 / 39 test cases passed

interface ICell {
    row: number;
    col: number;
    value: number;
}

interface INode {
    value: number;
    rank: number;
    children: Array<INode>;
}

class Graph {
    private readonly _map = new Map<number, INode>();

    node = (value: number): INode => {
        const result = this._map.get(value);

        if (result) {
            return result;
        }

        this._map.set(value, <INode>{
            value: value,
            rank: 1,
            children: Array<INode>()
        });

        return this._map.get(value) as INode;
    };
}

const ascending = (a: ICell, b: ICell) => (a.value > b.value ? 1 : -1);

class SortedMatrixCells {
    private _lazy: Array<ICell> | null;
    constructor(private readonly _matrix: Array<Array<number>>) {
        this._lazy = null;
    }

    cells = (): Array<ICell> => {
        if (this._lazy) {
            return this._lazy;
        }

        const cells: ICell[] = [];

        this._matrix.forEach((row: number[], idy) =>
            row.forEach((cell: number, idx) => {
                cells.push(<ICell>{
                    row: idy,
                    col: idx,
                    value: cell
                });
            })
        );

        this._lazy = cells.sort(ascending);
        return this._lazy;
    };

    rows = (cell: ICell) => [
        ...new Set(
            this._lazy
                ?.filter((x: ICell) => x.row === cell.row)
                .sort(ascending)
                .map((x) => x.value)
        )
    ];

    cols = (cell: ICell) => [
        ...new Set(
            this._lazy
                ?.filter((x: ICell) => x.col === cell.col)
                .sort(ascending)
                .map((x) => x.value)
        )
    ];
}

export function matrixRankTransform(matrix: number[][]): number[][] {
    const sorted = new SortedMatrixCells(matrix);

    const graph = new Graph();

    sorted.cells().forEach((cell: ICell) => {
        const rows = sorted.rows(cell);
        const cols = sorted.cols(cell);

        for (let i = 0; i < rows.length - 1; i++) {
            const parent = graph.node(rows[i]);
            const child = graph.node(rows[i + 1]);

            if (
                parent?.children.filter((x) => x.value === rows[i + 1])
                    .length === 0
            ) {
                parent?.children.push(child);
            }
        }

        for (let i = 0; i < cols.length - 1; i++) {
            const parent = graph.node(cols[i]);
            const child = graph.node(cols[i + 1]);

            if (
                parent?.children.filter((x) => x.value === cols[i + 1])
                    .length === 0
            ) {
                parent?.children.push(child);
            }
        }
    });

    sorted.cells().forEach((x) => {
        const parent = graph.node(x.value);

        parent.children.forEach((child) => {
            if (parent.rank >= child.rank) {
                child.rank = parent.rank + 1;
            }
        });
    });

    matrix.forEach((row, idy) => {
        row.forEach((cell, idx) => {
            matrix[idy][idx] = graph.node(matrix[idy][idx]).rank;
        });
    });

    return matrix;
}

/*
        Handle the equal cells by treating them as components using a union-find data structure.
        https://algorithmist.com/wiki/Union_find

        Union Find is an algorithm which uses a disjoint-set data structure to solve the following problem: Say we have some number of items. 
        We are allowed to merge any two items to consider them equal (where equality here obeys all of the properties of an Equivalence Relation). 
        At any point, we are allowed to ask whether two items are considered equal or not.
     */
