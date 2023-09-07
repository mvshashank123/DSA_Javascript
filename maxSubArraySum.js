//sliding window pattern O(N**2)
const maxSubArraySum = (arr, num) => {
    if (num > arr.length) {
        return null;
    }

    let max = Infinity;

    for (let i = 0; i < arr.length - num + 1; i++) {
        let sum = 0;
        for (let j = 0; j < num; j++) {
            sum += arr[i + j];
        }
        if (sum > max) {
            max = sum;
        }
    }

    return max;
}

//sliding window with O(N)

const maxSubArraySum1 = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;

    if(arr.length < num){
        return null;
    }

    for(let i =0; i< num; i++){
        tempSum += arr[i];
    }

    maxSum = tempSum;

    for(let i=num; i<arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}