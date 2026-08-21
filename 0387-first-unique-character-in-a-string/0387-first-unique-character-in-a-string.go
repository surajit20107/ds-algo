func firstUniqChar(s string) int {
    freq := make([]int, 26)
    for i := 0; i < len(s); i++ {
        freq[s[i] - byte('a')]++
    }

    for i := 0; i < len(s); i++ {
        if freq[s[i] - byte('a')] == 1 {
            return i
        }
    }

    return -1
}