//This works only for a sorted array.

function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    
    let i = 0;
    let j = 1;
    
    if(arr.length === 0){
        return 0;
    }
    
    while(j<arr.length-1){
        if(arr[i] !== arr[j] && (j === i+1)){
            j++;
            i++;
        }else if(arr[i] !== arr[j]){
            const temp = arr[i+1];
            arr[i+1] = arr[j];
            arr[j] = temp;
            j++;
            i++;
        }else{
            j++;
        }
    }
    
    return i+2;
  }


function countUniqueValues1(arr) {
    let i = 0;

    if(arr.length === 0) {
        return 0;
    }

    for(let j=1; j<arr.length; j++) {
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }

    return i+1;
}