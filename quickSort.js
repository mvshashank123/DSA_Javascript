// const swap = (arr, idx1,idx2) => {
//     const temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
// }

// const partition = (arr,l,h) => {
//     let i = l;
//     let j = h;
//     let pivot = arr[l];

//     while(i<j){
//         do{
//             i++;
//         }while(arr[i]<pivot);
//         do{
//             j++;
//         }while(arr[j]>pivot);

//         if(i<j){
//             swap(arr,i,j);
//         }
//     }

//     //swap to the actual position of the element
//     swap(arr,l,j);

//     //partition position
//     return j;
// }

// const quickSort = (arr,l=0,h=arr.length-1) => {
//     const j = partition(arr,l,h);

//     quickSort(arr,l,j);
//     quickSort(arr,j,h);

//     return arr;
// }


const quickSort = (arr) => {
    if(arr.length <= 1){
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for(let i=1; i<arr.length;i++){
        if(arr[i]<=pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i]);
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)];
}