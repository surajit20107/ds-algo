// leetcode 977 problem: https://leetcode.com/problems/squares-of-a-sorted-array

// Time: O(n) Space: O(n)
// But 3 pass by
function sortedSquares2(nums) {
  let negetiveArr = [];
  let positiveArr = [];

  // for begginer friendly and simplicity putting negetive and positive in a different arrays
  for (let num of nums) {
    if (num < 0) {
      negetiveArr.push(num);
    } else {
      positiveArr.push(num);
    }
  }

  // storeing the square of negetive nums in place
  for (let i = 0; i < negetiveArr.length; i++) {
    negetiveArr[i] = negetiveArr[i] * negetiveArr[i];
  }

  // storeing the square of positive nums in place
  for (let i = 0; i < positiveArr.length; i++) {
    positiveArr[i] = positiveArr[i] * positiveArr[i];
  }

  // merging two sorted arrays
  let i = negetiveArr.length - 1;
  let j = 0;
  let res = [];
  while (i >= 0 && j < positiveArr.length) {
    if (negetiveArr[i] > positiveArr[j]) {
      res.push(positiveArr[j]);
      j++;
    } else {
      res.push(negetiveArr[i]);
      i--;
    }
  }

  // if j have nothing to push add all i
  while (i >= 0) {
    res.push(negetiveArr[i]);
    i--;
  }

  // if i have nothing to push add all j
  while (j < positiveArr.length) {
    res.push(positiveArr[j]);
    j++;
  }

  // return the final result
  return res;
}

// Time: O(n) Space: O(n)
// single pass by
function sortedSquares(nums) {
  let left = 0;
  let right = nums.length - 1;
  let output = new Array(nums.length);
  let pos = output.length - 1;
  while (left <= right) {
    let value;
    if (nums[left] * nums[left] >= nums[right] * nums[right]) {
      value = nums[left] * nums[left++];
    } else {
      value = nums[right] * nums[right--];
    }
    output[pos--] = value;
  }
  return output;
}

const arr = [-4, -1, 0, 3, 10];
console.log(sortedSquares(arr));
