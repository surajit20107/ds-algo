/**
* @param {number[]} arr
*/
class Solution {
	segregate0and1(arr) {
		// code here
		let left = 0;
		let right = arr.length - 1;
		while (left < right) {
		    if (arr[left] === 0)  {
		        left++;
		    } else {
		        [arr[left], arr[right]] = [arr[right], arr[left]];
		        right--;
		    }
		}
	}
}
