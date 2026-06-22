/**
 * leetcode 75: Dutch National Flag Algorithm
 * Time: O(n) | Space: O(1)
 */

var sortColors = function (nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[mid++], nums[low++]] = [nums[low], nums[mid]];
        } else if (nums[mid] === 1) {
            mid++;
        } else if (nums[mid] === 2) {
            [nums[mid], nums[high--]] = [nums[high], nums[mid]];
        }
    }
};

// test cases
let arr;
arr = [2, 0, 2, 1, 1, 0];
sortColors(arr);
console.log(arr);
arr = [2, 0, 1];
sortColors(arr);
console.log(arr);
arr = [2, 0, 2, 1, 1, 0, 2, 0];
sortColors(arr);
console.log(arr);
arr = [2, 2, 1, 0, 2, 0, 1, 0, 2]
sortColors(arr);
console.log(arr);
