<h2><a href="https://www.geeksforgeeks.org/problems/count-the-triplets4615/1">Count the Triplets</a></h2>
<h3>Medium</h3>
<hr>

<p>Given an array <code>arr[]</code> of distinct integers, count all the triplets such that the sum of two elements is equal to the third element.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [1, 5, 3, 2]
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are two valid triplets:
(1, 2, 3) and (2, 3, 5).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [2, 3, 4]
<strong>Output:</strong> 0
<strong>Explanation:</strong> No triplet exists such that the sum of two elements equals the third.
</pre>

<p><strong>Constraints:</strong></p>

<ul>
    <li><code>1 ≤ arr.length ≤ 10<sup>3</sup></code></li>
    <li><code>1 ≤ arr[i] ≤ 10<sup>5</sup></code></li>
    <li>All elements in the array are distinct.</li>
</ul>

<p><strong>Expected Time Complexity:</strong> <code>O(n<sup>2</sup>)</code></p>

<p><strong>Expected Auxiliary Space:</strong> <code>O(1)</code></p>

<strong>Follow-up:</strong> Can you solve this problem in <code>O(n<sup>2</sup>)</code> time by first sorting the array and then using the two-pointer technique?
