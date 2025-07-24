// Bubble sort in-place
export function bubbleSort(l: number[]) {
    for (let i = 0; i < l.length - 1; i++) {
        for (let j = 0; j < l.length - i - 1; j++) {
            if (l[j] > l[j + 1]) {
                [l[j], l[j + 1]] = [l[j + 1], l[j]];
            }
        }
    }
    return l;
}