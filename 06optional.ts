type User = {
    name : string,
    age : number,
    isOk? : boolean
}

let foo = (u : User) : void => {
    if (u.isOk == undefined)
        console.log("isOK not passed!");
    else
        console.log("isOK passed!");
}

foo({name : "cence", age : 46});
foo({name : "kuerhckn", age : 34, isOk : true});