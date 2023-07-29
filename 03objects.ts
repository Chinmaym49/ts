let obj1 = {
    name : "clsdlc",
    age : 23,
    isOk : true
};

var obj2 = {
    name : "kbfkve",
    age : "67",
    isOk : false
};

let foo = (obj : {name : string, age : number}) : void => {
    console.table(obj);
}

foo(obj1);
// foo(obj2);           // type not matching

let fooo = () : {name : string, age : string} => {
    // return obj1;     // type not matching
    return obj2;
}

console.table(fooo());

export {};