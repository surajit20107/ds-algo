<h2><a href="https://www.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1">Triplets with Smaller Sum</a></h2>
<h3>Medium</h3>
<hr>

<p>Given an array <code>arr[]</code> of distinct integers of size <code>n</code> and an integer <code>sum</code>, count the number of triplets <code>(i, j, k)</code> such that <code>i &lt; j &lt; k</code> and <code>arr[i] + arr[j] + arr[k] &lt; sum</code>.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 4, sum = 2
arr = [-2, 0, 1, 3]

<strong>Output:</strong> 2

<strong>Explanation:</strong>
The valid triplets are:
(-2, 0, 1)
(-2, 0, 3)
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 5, sum = 12
arr = [5, 1, 3, 4, 7]

<strong>Output:</strong> 4

<strong>Explanation:</strong>
The valid triplets are:
(1, 3, 4)
(1, 3, 5)
(1, 3, 7)
(1, 4, 5)
</pre>

<p><strong>Constraints:</strong></p>

<ul>
    <li><code>3 ≤ n ≤ 10<sup>3</sup></code></li>
    <li><code>-10<sup>3</sup> ≤ arr[i] ≤ 10<sup>3</sup></code></li>
    <li>All elements in the array are distinct.</li>
</ul>

<p><strong>Expected Time Complexity:</strong> <code>O(n<sup>2</sup>)</code></p>

<p><strong>Expected Auxiliary Space:</strong> <code>O(1)</code></p>

<strong>Follow-up:</strong> Can you solve this problem in <code>O(n<sup>2</sup>)</code> time by sorting the array and using the two-pointer technique to count multiple triplets at once? :contentReference[oaicite:0]{index=0}
