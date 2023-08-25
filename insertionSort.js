const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        arr = swap(arr, j, j - 1);
      } else {
        break;
      }
    }
  }
  return arr;
};

console.log("Insertion Sort", insertionSort([2, 1, 5, 3, 6, 4]));
