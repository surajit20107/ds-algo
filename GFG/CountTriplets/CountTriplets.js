/**
* @param {number[]} arr
* @return {number}
*/
class Solution {
	countTriplet(arr) {
		// code here
		arr.sort((a, b)=>a - b)
		let count = 0
		let n = arr.length
		let countedSum = new Set()
		for (let k = 2; k<n; k++) {
			let i = 0
			let j = k - 1
			
			if (countedSum.has(arr[k])) continue
			
			while (i < j) {
				let sum = arr[i]+arr[j]
				
				if (sum === arr[k]) {
					count++
					countedSum.add(arr[k])
					i++
					j--
					
					while (i < j && arr[i] === arr[i - 1]) i++
					while (i < j && arr[j] === arr[j + 1]) j--
					
				} else if (sum < arr[k]) {
					i++
				} else {
					j--
				}
			}
			
		}
		return count
	}
}
