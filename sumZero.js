//works only for an array which is sorted.
//I/P: [-4,-2,-1,0,1,2,3,5]  O/P: [-2,2]

const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
    return [-1, -1];
}

console.log(sumZero([-4, -2, -1, 0, 1, 2, 3, 5]));