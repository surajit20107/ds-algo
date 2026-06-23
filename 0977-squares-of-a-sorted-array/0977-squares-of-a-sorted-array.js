/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0
    let right = nums.length-1
    let arr = new Array(nums.length)
    let pos = arr.length-1

    while (left <= right) {
        const leftSqaue = nums[left]*nums[left]
        const rightSquare = nums[right]*nums[right]
        let value;
        if (leftSqaue > rightSquare) {
            value = leftSqaue
            left++
        } else {
            value = rightSquare
            right--
        }
        arr[pos--] = value
    }
    return arr
};