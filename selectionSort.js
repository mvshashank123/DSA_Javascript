const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
};

//O(N**2)  LESSER SWAPS THAN BUBBLE SORT
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    arr = swap(arr, i, min);
  }
  return arr;
};

console.log(selectionSort([2, 1, 5, 3, 6, 4]));
