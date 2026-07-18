func canPlaceFlowers(flowerbed []int, n int) bool {
	var length int = len(flowerbed)
	for i := 0; i < length; i++ {
		if flowerbed[i] == 0 && // current index is zero ?
			(i == 0 || flowerbed[i-1] == 0) && // left neighbour is 0 ?
			(i == length-1 || flowerbed[i+1] == 0) { // right neighbour is 0 ?
			flowerbed[i] = 1
			n--
			i++ // skip the next neighbour because here planted
		}
	}
	return n <= 0
}