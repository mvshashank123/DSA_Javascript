const collectAllOdds = (arr) => {
    let result = [];

    const helper = (compArr) => {
        if (compArr.length === 0) {
            return;
        }
        if (compArr[0] % 2 !== 0) {
            result.push(compArr[0]);
        }
        helper(compArr.slice(1));
    }

    helper(arr);

    return result;
}

const collectOdds = (arr1, arr2) => {
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr1[0] % 2 != 0) {
        arr2.push(arr1[0]);
    }
    return collectOdds(arr1.slice(1), arr2);
}

const collectOdds1 = (arr) => {
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 != 0){
        newArr.push(arr[0]);
    }

    newArr = [...newArr, ...collectOdds1(arr.slice(1))]

    return newArr;
}