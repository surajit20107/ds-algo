int helper(int num) {
    int sum = 0;
    while (num > 0) {
        int d = num % 10;
        num = num / 10;
        sum = sum + d * d;
    }
    return sum;
}

class Solution {
public:
    bool isHappy(int n) {
        int slow = n;
        int fast = n;
        while (fast != 1) {
            slow = helper(slow);
            fast = helper(fast);
            fast = helper(fast);
            if (slow == fast && slow != 1) return false;
        }
        return true;
    }
};