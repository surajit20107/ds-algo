func intervalIntersection(firstList [][]int, secondList [][]int) [][]int {
	var i int = 0
	var j int = 0
	res := [][]int{}

	for i < len(firstList) && j < len(secondList) {
		start := max(firstList[i][0], secondList[j][0])
		end := min(firstList[i][1], secondList[j][1])

		if start <= end {
			res = append(res, []int{start, end})
		}

		end1 := firstList[i][1]
		end2 := secondList[j][1]

		if end1 < end2 {
			i++
		} else {
			j++
		}
	}
	return res
}