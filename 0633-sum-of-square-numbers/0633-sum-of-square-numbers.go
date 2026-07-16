func judgeSquareSum(c int) bool {
    a := 0;
    b := int(math.Sqrt(float64(c)));

    for a <= b {
        sum := int64(a)*int64(a)+int64(b)*int64(b);
        if sum == int64(c) {
            return true;
        } else if sum > int64(c) {
            b--;
        } else {
            a++;
        }
    }
    return false;
}