func maximumSum(arr []int) int {
	keep := arr[0];
	del := -1000000000;
	ans := arr[0];

	for i := 1; i < len(arr); i++ {
		prevKeep := keep;
		prevDel := del;

		keep = max(prevKeep+arr[i], arr[i]);
		del = max(prevDel+arr[i], prevKeep);
		ans = max(keep, del, ans);
	}
	return ans;
}