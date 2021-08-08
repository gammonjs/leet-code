import { minCut } from './week-1-august-1st-august-7th/Palindrome';

const testcases = [
    {
        input: 'aab',
        output: 1
    },
    {
        input: 'a',
        output: 0
    },
    {
        input: 'ab',
        output: 1
    },
    {
        input: 'aaabbbccc',
        output: 2
    },
    {
        input: 'aaabbbcccddd',
        output: 3
    },
    {
        input: 'aaaaabbbbbcccccdddddeeeee',
        output: 4
    },
    {
        input: 'eegiicgaeadbcfacfhifdbiehbgejcaeggcgbahfcajfhjjdgj',
        output: 42
    }
    // {
    //     input: "fifgbeajcacehiicccfecbfhhgfiiecdcjjffbghdidbhbdbfbfjccgbbdcjheccfbhafehieabbdfeigbiaggchaeghaijfbjhi",
    //     output: 0
    // }
];

testcases.forEach((testcase) => {
    console.log(minCut(testcase.input));
});
