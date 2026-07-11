func isHappy(n int) bool {
    slow := n;
    fast := n;
    for fast != 1 {
        slow = helper(slow);
        fast = helper(fast);
        fast = helper(fast);
        if slow == fast && slow != 1 {
            return false;
        }
    }
    return true;
}

func helper(num int) int {
    sum := 0;
    for num > 0 {
        d := num % 10;
        num = num / 10;
        sum = sum + d * d;
    }
    return sum;
}