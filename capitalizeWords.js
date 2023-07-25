function capitalizeWords (arr1) {
    // add whatever parameters you deem necessary - good luck!
    
    let res = [];
    
    const helper = (arr) => {
        if(arr.length === 0){
            return res;
        }
        res = res.concat(arr[0].toUpperCase());
        
        return helper(arr.slice(1));
    }
    
    helper(arr1);
    
    return res;
  }
  
  // let words = ['i', 'am', 'learning', 'recursion'];
  // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']