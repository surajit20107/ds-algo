/**
 * @param {number} sum
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
    countTriplets(sum, arr) {
        // code here
        arr.sort((a, b) => a - b)
        let res = 0
        for (let i=0;i<arr.length-2;i++){
            let j = i+1
            let k=arr.length-1
            while (j<k) {
                let val = arr[i]+arr[j]+arr[k]
                if (val >= sum) {
                    k--
                } else {
                    res += k - j
                    j++
                }
            }
        }
        return res
    }
}
