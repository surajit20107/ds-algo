/**
 * Leetcode Problem 16: 3Sum Closest
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */

function threeSumClosest(arr, target) {
    arr.sort((a, b) => a - b);
    let closestSum = Infinity;
    let closestDiff = Infinity;
    for (let i = 0; i < arr.length - 2; i++) {
        let j = i + 1;
        let k = arr.length - 1;
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            let diff = Math.abs(sum - target);

            if (diff < closestDiff) {
                closestDiff = diff;
                closestSum = sum;
            }

            if (sum > target) {
                k--;
            } else if (sum < target) {
                j++;
            } else {
                return sum;
            }
        }
    }
    return closestSum;
}

// test cases
console.log("Test 1:", threeSumClosest([-1, 2, 1, -4], 1)); // Expected 2
console.log("Test 2:", threeSumClosest([0, 0, 0], 1)); // Expected 0
console.log("Test 3:", threeSumClosest([1, 2, 3, 4, 5], 10)); // Expected 10
console.log("Test 4:", threeSumClosest([-10, -5, 0, 5, 10], 0)); // Expected 0
console.log("Test 5:", threeSumClosest([1, 1, 1, 1], 0)); // Expected 3
console.log("Test 6:", threeSumClosest([0, 0, 0], 1));  // Expected 0
console.log("Test 7:", threeSumClosest([1, 1, 1, 0], -100)); // Expected 2
console.log("Test 8:", threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82));  // Expected 82
