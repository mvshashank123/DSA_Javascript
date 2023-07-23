function capitalizeFirst(arr1) {
  // add whatever parameters you deem necessary - good luck!

  let res = [];

  const helper = (arr) => {
    if (arr.length === 0) {
      return res;
    }
    const capitalized = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);

    res.push(capitalized);

    helper(arr.slice(1));
  };
  helper(arr1);
  return res;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
