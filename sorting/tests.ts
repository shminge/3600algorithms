import { bubbleSort } from "./bubbleSort";
import { insertionSort } from "./insertionSort";

const sortingAlgorithms: ((l: number[]) => number[])[] = [
    bubbleSort,
    insertionSort,
]

const cases: {input: number[], output: number[]}[] = 
    [
        {input: [], output: []},
        {input: [1], output: [1]},
        {input: [5,4,3,2,1], output: [1,2,3,4,5]},
        {input: [2,232,5,7,2,7], output: [2,2,5,7,7,232]}
    ]


for (const algo of sortingAlgorithms) {
    let numCases = 0;
    let numPassed = 0;
    for (const testCase of cases) {
        numCases++;

        try {
            let sorted = algo(testCase.input.slice());
            if (sorted.length === testCase.output.length && sorted.every((value, index) => value === testCase.output[index])) {
                numPassed++;
            } else {
                console.error("Algorithm", algo, "failed", testCase.input,"\n Output:", sorted, "\n Expected:", testCase.output);
            }
        } catch {
            console.error("Algorithm", algo, "hit an error on case", testCase.input);
        }
    }
    console.log("Algorithm", algo, "passed " + numPassed + "/" + numCases);
    console.log();
}