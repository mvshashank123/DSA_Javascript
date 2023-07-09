const checkIfAnagram = (arr1, arr2) => {
    const freqObj1 = {};
    const freqObj2 = {};

    for (let elem of arr1) {
        console.log('c1', elem);
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
        if (freqObj1[elem] !== freqObj2[elem]) {
            return false;
        }
    }
    return true;
}

console.log(checkIfAnagram('cinema', 'iceman'));