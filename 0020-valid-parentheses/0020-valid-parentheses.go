func isValid(s string) bool {
	stack := []rune{}

	hash := map[rune]rune{
		')': '(',
		']': '[',
		'}': '{',
	}

	for _, curr := range s {
		if opening, exists := hash[curr]; exists {
			if len(stack) > 0 && stack[len(stack)-1] == opening {
				stack = stack[:len(stack)-1]
			} else {
				return false
			}
		} else {
			stack = append(stack, curr)
		}
	}

	return len(stack) == 0
}