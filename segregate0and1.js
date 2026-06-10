// Problem: https://www.geeksforgeeks.org/problems/segregate-0s-and-1s5106/1

// Time: O(n^2), Space: O(1)
function segregate0and1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[i] === 1) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
}

// Time: O(n), Space: O(1)
function segregate0and1(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] === 0) {
            left++;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            right--;
        }
    }
}

const arr = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];
segregate0and1(arr);
console.log(arr);
