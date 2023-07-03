const calculateChars1 = (str) => {
    const obj = {};
    for (let ind in str) {
        const ch = str[ind].toLowerCase();
        if ((ch.charCodeAt(0) > 'a'.charCodeAt(0) && ch.charCodeAt(0) < 'z'.charCodeAt(0)) || (ch.charCodeAt(0) > '0'.charCodeAt(0) && ch.charCodeAt(0) < '9'.charCodeAt(0))) {
            if (obj[ch]) {
                obj[ch] += 1;
            } else {
                obj[ch] = 1;
            }
        }
    }

    return obj;
}


console.log(calculateChars1('Checking if 1231'));