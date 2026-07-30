<h2><a href="https://www.geeksforgeeks.org/problems/overlapping-intervals--174556/1">Overlapping Intervals</a></h2>
<h3>Easy</h3>
<hr>

<p>You are given a 2D array <code>arr[][]</code> representing a set of intervals, where each interval is of the form <code>[start, end]</code>. Your task is to determine whether any two intervals in the given set overlap.</p>

<p><strong>Note:</strong> Two intervals <code>[a, b]</code> and <code>[c, d]</code> overlap if they have at least one common value, i.e., <code>a ≤ d</code> and <code>c ≤ b</code>.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr[][] = [[1, 3], [5, 7], [2, 4], [6, 8]]
<strong>Output:</strong> true
<strong>Explanation:</strong> The intervals [1, 3] and [2, 4] overlap.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr[][] = [[1, 3], [7, 9], [4, 6], [10, 13]]
<strong>Output:</strong> false
<strong>Explanation:</strong> No pair of intervals overlap.
</pre>

<p><strong>Constraints:</strong></p>

<ul>
    <li><code>2 ≤ arr.size() ≤ 10<sup>5</sup></code></li>
    <li><code>1 ≤ arr[i][0] &lt; arr[i][1] ≤ 10<sup>5</sup></code></li>
</ul>

<p><strong>Expected Time Complexity:</strong> <code>O(n log n)</code></p>

<p><strong>Expected Auxiliary Space:</strong> <code>O(1)</code></p>

<strong>Follow-up:</strong> Can you solve this problem by sorting the intervals and checking only adjacent intervals for overlap?
