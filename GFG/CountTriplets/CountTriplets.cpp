class Solution {
	public:
	int countTriplet(vector<int>& arr) {
		sort(arr.begin(), arr.end());
		
		int count = 0;
		int n = arr.size();
		unordered_set<int> countedSum;
		
		for (int k = 2; k < n; k++) {
			int i = 0;
			int j = k - 1;
			
			if (countedSum.count(arr[k]))
				continue;
			
			while (i < j) {
				int sum = arr[i] + arr[j];
				
				if (sum == arr[k]) {
					count++;
					countedSum.insert(arr[k]);
					i++;
					j--;
					
					while (i < j && arr[i] == arr[i - 1])
						i++;
					
					while (i < j && arr[j] == arr[j + 1])
						j--;
				}
				else if (sum < arr[k]) {
					i++;
				}
				else {
					j--;
				}
			}
		}
		
		return count;
	}
};
