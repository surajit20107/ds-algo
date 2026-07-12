/**
 * gfg - https://www.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */

class Solution {
    countTriplets(sum, arr) {
        arr.sort((a, b) => a - b);
        let res = 0;
        for (let i = 0; i < arr.length - 2; i++) {
            let j = i + 1;
            let k = arr.length - 1;
            while (j < k) {
                let val = arr[i] + arr[j] + arr[k];
                if (val >= sum) {
                    k--;
                } else {
                    res += k - j;
                    j++;
                }
            }
        }
        return res;
    }
}
const solution = new Solution();

// test cases
console.log(solution.countTriplets(12, [-2, 0, 1, 3]));  // 4
console.log(solution.countTriplets(100, [5, 1, 3, 4, 7]));  // 10
console.log(solution.countTriplets(10, [1, 2, 3, 4, 5]));  // 6
console.log(solution.countTriplets(2, [-2, 0, 1, 3])); // 2
console.log(solution.countTriplets(12, [5, 1, 3, 4, 7])); // 4
