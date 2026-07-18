func findGCD(nums []int) int {
    var mn int = nums[0];
    var mx int = nums[0];
    for _, num := range nums {
        mn = min(mn, num);
        mx = max(mx, num);
    }
    return gcd(mn, mx);
}

func gcd(a, b int) int {
    for b != 0 {
        a, b = b, a % b;
    }
    return a;
}