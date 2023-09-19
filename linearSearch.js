function linearSearch(arr, elem) {
  // add whatever parameters you deem necessary - good luck!

  for (let ind = 0; ind < arr.length; ind++) {
    if (arr[ind] === elem) {
      return ind;
    }
  }
  return -1;
}
