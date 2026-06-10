function findSecondLargestAndSmallest(arr) {
  // edge case for arr only have 1 element
  if (arr.length < 2) {
    return [-1];
  }
  
  let large = -Infinity;
  let second_large = -Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      second_large = large;
      large = arr[i];
    } else if (arr[i] > second_large && arr[i] !== large) {
      second_large = arr[i];
    }
  }
  
  let small = Infinity;
  let second_small = Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      second_small = small;
      small = arr[i];
    } else if (arr[i] < second_small && arr[i] !== small) {
      second_small = arr[i];
    }
  }

  // edge case like [7, 7, 7]
  if (second_large === -Infinity && second_small === Infinity) {
    return [-1];
  } else {
    return [second_large, second_small];
  }
}

// test cases
console.log(findSecondLargestAndSmallest([1, 2, 4, 7, 7, 5]));
console.log(findSecondLargestAndSmallest([-5, -2, -10, -1]));
console.log(findSecondLargestAndSmallest([5]));
console.log(findSecondLargestAndSmallest([7, 7, 7]));
