/**
 * gfg - https://www.geeksforgeeks.org/problems/count-the-triplets4615/1
 * 
 * Time O(n²) | Space O(n)
 */
class Solution {
    countTriplet(arr) {
        arr.sort((a, b) => a - b);
        let count = 0;
        let n = arr.length;
        let countedSum = new Set();
        for (let k = 2; k < n; k++) {
            let i = 0;
            let j = k - 1;
            if (countedSum.has(arr[k])) continue;

            while (i < j) {
                let sum = arr[i] + arr[j];
                if (sum === arr[k]) {
                    count++;
                    countedSum.add(arr[k]);
                    i++;
                    j--;

                    while (i < j && arr[i] === arr[i - 1]) i++;
                    while (i < j && arr[j] === arr[j + 1]) j--;
                } else if (sum < arr[k]) {
                    i++;
                } else {
                    j--;
                }
            }
        }
        return count;
    }
}


const sol = new Solution();
// test cases
console.log(sol.countTriplet([1, 5, 3, 2])); // 2
console.log(sol.countTriplet([2, 3, 4])); // 0
console.log(sol.countTriplet([1, 1, 1, 2, 2])); // 1
console.log(sol.countTriplet([1, 2, 1, 1])); // 1
