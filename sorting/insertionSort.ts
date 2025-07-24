/**
 * Insertion sort (Elliott)
 * O(n^2)
 */

export function insertionSort(l: number[]) {
    for (let unsortedIndex = 1; unsortedIndex < l.length; unsortedIndex++) {
        // sortIndex represents the end of the sorted part of the array
        // at every step, we take one element from the unsorted part, and move it to the sorted part
        let unsortedElement = l[unsortedIndex];
        let checkedIndex = unsortedIndex-1;
        while (checkedIndex >= 0 && unsortedElement < l[checkedIndex]) {
            // shift it backwards
            l[checkedIndex + 1] = l[checkedIndex];
            checkedIndex--;
        }

        l[checkedIndex+1] = unsortedElement;
    }

    return l;
}