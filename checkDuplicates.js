// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

function areThereDuplicates(...args) {
    let elements = [...args];
    let frequencyOfElements = {};

    for (let element of elements) {
        if (frequencyOfElements[element]) {
            return true
        } else {
            frequencyOfElements[element] = 1;
        }
    }

    return false;
}
//areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates1() {
    let collection = {}
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for (let key in collection) {
        if (collection[key] > 1) return true
    }
    return false;
}
    
//areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates2(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

//areThereDuplicates One Liner Solution
function areThereDuplicates3() {
    return new Set(arguments).size !== arguments.length;
}