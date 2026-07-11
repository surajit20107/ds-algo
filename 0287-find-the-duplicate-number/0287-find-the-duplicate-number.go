func findDuplicate(nums []int) int {
    slow := 0;
    fast := 0;
    for true {
        slow = nums[slow];
        fast = nums[fast];
        fast = nums[fast];
        if slow == fast {
            slow = 0;
            for slow != fast {
                slow = nums[slow];
                fast = nums[fast];
            }
            return slow;
        }
    }
    return 0;
}