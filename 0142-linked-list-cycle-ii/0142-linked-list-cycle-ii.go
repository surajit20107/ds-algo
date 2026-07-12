/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func detectCycle(head *ListNode) *ListNode {
    slow := head;
    fast := head;
    for fast != nil && fast.Next != nil {
        slow = slow.Next;
        fast = fast.Next.Next;
        if fast == slow {
            slow = head;
            for slow != fast {
                slow = slow.Next;
                fast = fast.Next;
            }
            return slow;
        }
    }
    return nil;
}