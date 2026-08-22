func maxNumberOfBalloons(text string) int {
    freq := make([]int, 26)
    
    for _, c := range text {
        freq[c-'a']++
    }
    
    b := freq['b'-'a']
    a := freq['a'-'a']
    l := freq['l'-'a'] / 2
    o := freq['o'-'a'] / 2
    n := freq['n'-'a']
    
    return min(b, a, l, o, n)
}

func min(values ...int) int {
    minVal := values[0]
    for _, v := range values[1:] {
        if v < minVal {
            minVal = v
        }
    }
    return minVal
}