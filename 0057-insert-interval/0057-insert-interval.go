func insert(intervals [][]int, newInterval []int) [][]int {
    ans := [][]int{}
    isMerged := false

    for i := 0; i < len(intervals); i++ {
        if !isMerged && newInterval[0] < intervals[i][0] {
            ans = append(ans, newInterval)
            isMerged = true
        }
        ans = append(ans, intervals[i])
    }

    if !isMerged {
        ans = append(ans, newInterval)
    }

    result := mergeIntervals(ans)
    return result
}

func mergeIntervals(ans [][]int) [][]int {
    res := [][]int{}
    start1 := ans[0][0]
    end1 := ans[0][1]

    for i := 1; i < len(ans); i++ {
        start2 := ans[i][0]
        end2 := ans[i][1]

        if end1 < start2 {
            res = append(res, []int{start1, end1})
            start1 = start2
            end1 = end2
        } else {
            start1 = min(start1, start2)
            end1 = max(end1, end2)
        }
    }
    res = append(res, []int{start1, end1})
    return res
}