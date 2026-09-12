/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseBetween(head *ListNode, left int, right int) *ListNode {
    if head == nil || left == right {
        return head
    }

    dummy := &ListNode{Next: head}
    prev := dummy

    for i := 1; i < left; i++ {
        prev = prev.Next
    }

    curr := prev.Next
    for i := 0; i < right - left; i++ {
        nextTmp := curr.Next
        curr.Next = nextTmp.Next
        nextTmp.Next = prev.Next
        prev.Next = nextTmp
    }

    return dummy.Next
}