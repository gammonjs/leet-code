import { minCut } from "./week1/Palindrome"

const testcases = [
    {
        input: "aab",
        output: 1
    },
    {
        input: "a",
        output: 0
    },
    {
        input: "ab",
        output: 1
    },
    {
        input: "aaabbbccc",
        output: 2
    },
    {
        input: "aaabbbcccddd",
        output: 3
    },
    {
        input: "aaaaabbbbbcccccdddddeeeee",
        output: 4
    },
    {
        input: "eegiicgaeadbcfacfhifdbiehbgejcaeggcgbahfcajfhjjdgj",
        output: 42
    },
    // {
    //     input: "fifgbeajcacehiicccfecbfhhgfiiecdcjjffbghdidbhbdbfbfjccgbbdcjheccfbhafehieabbdfeigbiaggchaeghaijfbjhi",
    //     output: 0
    // }
] 

testcases.forEach((testcase => {
    console.log(minCut(testcase.input))
}))
