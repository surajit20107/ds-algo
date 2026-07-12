<h2><a href="https://www.geeksforgeeks.org/problems/segregate-0s-and-1s5106/1">Segregate 0s and 1s</a></h2>
<h3>Easy</h3>
<hr>

<p>Given an array <code>arr[]</code> consisting only of <code>0</code>s and <code>1</code>s, sort the array in ascending order.</p>

<p><strong>Note:</strong> You need to solve this problem without using any built-in sorting function.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [0, 1, 0, 1, 0]
<strong>Output:</strong> [0, 0, 0, 1, 1]
<strong>Explanation:</strong> All 0s are placed before all 1s.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [1, 1, 1, 0, 0]
<strong>Output:</strong> [0, 0, 1, 1, 1]
<strong>Explanation:</strong> The array is rearranged so that all 0s come before all 1s.
</pre>

<p><strong>Constraints:</strong></p>

<ul>
    <li><code>1 ≤ arr.length ≤ 10<sup>6</sup></code></li>
    <li><code>arr[i] ∈ {0, 1}</code></li>
</ul>

<p><strong>Expected Time Complexity:</strong> <code>O(n)</code></p>

<p><strong>Expected Auxiliary Space:</strong> <code>O(1)</code></p>

<strong>Follow-up:</strong> Can you solve this problem in a single traversal using the two-pointer technique?
