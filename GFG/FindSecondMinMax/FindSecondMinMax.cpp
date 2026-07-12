class Solution {
	public:
	int countTriplets(int sum, vector<int>& arr) {
		// code here
		sort(arr.begin(), arr.end());
		
		long long res = 0;
		int n = arr.size();
		
		for (int i = 0; i < n - 2; i++) {
			int j = i + 1;
			int k = n - 1;
			
			while (j < k) {
				int val = arr[i] + arr[j] + arr[k];
				
				if (val >= sum) {
					k--;
				} else {
					res += (k - j);
					j++;
				}
			}
		}
		
		return res;
	}
};
