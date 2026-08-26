func longestPalindrome(s string) int {
	freq := make([]int, 128)

	for _, ch := range s {
		freq[ch]++
	}

	result := 0
	hasOdd := false

	for _, count := range freq {
		result += (count / 2) * 2

		if count%2 == 1 {
			hasOdd = true
		}
	}

	if hasOdd {
		result++
	}

	return result
}