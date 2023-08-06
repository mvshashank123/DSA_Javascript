const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

const collectStrings = (obj) => {
    let arr=[]
    let keys = Object.keys(obj);
    for(let key of keys){
        if(typeof obj[key] == 'object'){
            arr = arr.concat(collectStrings(obj[key]));
        }else if(typeof obj[key] == 'string'){
            arr =arr.concat(obj[key]);
        }
    }
    return arr;
}

collectStrings(obj) // ["foo", "bar", "baz"])

