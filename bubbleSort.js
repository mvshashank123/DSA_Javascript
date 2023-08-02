//O(N**2)
const bubbleSort = (arr) => {
  let noSwaps = true;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
};

console.log(bubbleSort([2, 1, 5, 3, 6, 4]));
