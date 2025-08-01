/**
 * Merge sort (Matthew)
 * O(n log n)
 */

export function mergeSort(l: number[]): number[] {
    if (l.length <= 1) {
        return l;
    }

    let q = Math.floor(l.length / 2)
    let left = mergeSort(l.slice(0, q))
    let right = mergeSort(l.slice(q, l.length))
    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    let a = left.length;
    let b = right.length;
    let i = 0;
    let j = 0;
    let result = [];

    // Append larger until one of the lists is finished
    while (i < a && j < b) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Append rest of remaining list
    while (i < a) {
        result.push(left[i]);
        i++;
    }

    while (j < b) {
        result.push(right[j]);
        j++;
    }

    return result;
}