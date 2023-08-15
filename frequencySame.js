const checkIfSame = (arr1, arr2) => {
    const freqObj1 = {};
    const freqObj2 = {};

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let elem of arr1) {
        if (freqObj1[elem]) {
            freqObj1[elem] += 1;
        } else {
            freqObj1[elem] = 1;
        }
    }

    for (let elem of arr2) {
        freqObj2[elem] = (freqObj2[elem] || 0) + 1;
    }

    console.log(Object.keys(freqObj1), freqObj2);

    const arrKey1 = Object.keys(freqObj1);

    for (let elem of arrKey1) {
        console.log('check', elem ** 2);
        if (freqObj1[elem] !== freqObj2[elem ** 2]) {
            return false;
        }
    }
    return true;
}


console.log(checkIfSame([2, 5, 1, 3, 3], [4, 9, 25, 1, 9]));
