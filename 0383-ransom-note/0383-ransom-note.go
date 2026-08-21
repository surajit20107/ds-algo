func canConstruct(ransomNote string, magazine string) bool {
    arr := [26]int{}
    
    for _, ch := range(magazine) {
        arr[ch - 'a']++
    }

    for _, ch := range(ransomNote) {
        index := ch - 'a'
        if arr[index] > 0 {
            arr[index]--
        } else {
            return false
        }
    }

    return true
}