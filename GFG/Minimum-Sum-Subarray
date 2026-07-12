// Problem https://www.geeksforgeeks.org/problems/smallest-sum-contiguous-subarray/1

/**
* @param {number[]} A
* @param {number} N
* @return s {number}
*/

class Solution {
	// Function to find the subarray with the smallest sum.
	smallestSumSubarray(A, N) {
		// your code here
		let res = Infinity;
		let sum = 0;
		for (let i = 0; i < A.length; i++) {
			sum = sum + A[i];
			res = Math.min(res, sum);
			sum = Math.min(sum, 0);
		}
		return res
	}
}
