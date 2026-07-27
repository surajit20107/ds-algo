func merge(intervals [][]int) [][]int {
    sort.Slice(intervals, func(i, j int) bool {
        return intervals[i][0] < intervals[j][0]
    })

    ans := [][]int{}
    start1 := intervals[0][0]
    end1 := intervals[0][1]

    for i := 1; i < len(intervals); i++ {
        start2 := intervals[i][0]
        end2 := intervals[i][1]

        if end1 < start2 {
            ans = append(ans, []int{start1, end1})
            start1 = start2
            end1 = end2
        } else {
            start1 = min(start1, start2)
            end1 = max(end1, end2)
        }
    }
    
    ans = append(ans, []int{start1, end1})
    return ans
}