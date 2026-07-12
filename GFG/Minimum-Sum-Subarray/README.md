<h2><a href="https://www.geeksforgeeks.org/problems/smallest-sum-contiguous-subarray/1">Smallest Sum Contiguous Subarray</a></h2>
<h3>Medium</h3>
<hr>

<p>Given an array <code>arr[]</code>, find the contiguous subarray containing at least one element which has the minimum sum and return its sum.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [3, -4, 2, -3, -1, 7, -5]
<strong>Output:</strong> -6
<strong>Explanation:</strong> The subarray [-4, 2, -3, -1] has the minimum sum of -6.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [2, 6, 8, 1, 4]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The smallest sum is obtained from the subarray [1].
</pre>

<p><strong>Constraints:</strong></p>

<ul>
    <li><code>1 ≤ arr.length ≤ 10<sup>5</sup></code></li>
    <li><code>-10<sup>6</sup> ≤ arr[i] ≤ 10<sup>6</sup></code></li>
</ul>

<p><strong>Expected Time Complexity:</strong> <code>O(n)</code></p>

<p><strong>Expected Auxiliary Space:</strong> <code>O(1)</code></p>

<strong>Follow-up:</strong> Can you solve this problem using a modified version of <code>Kadane's Algorithm</code> in linear time?
