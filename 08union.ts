let foo = (x : string | number) : void => {
    if (typeof x === "string")
        console.log(x.toUpperCase());
    else
        console.log(x + 2);
}

foo(1);
foo("one");

type User = {
    name : string,
    pwd : number
};

type Admin = {
    name : string,
    pwd : string
};

let login = (obj : User | Admin) : void => {
    console.log(typeof(obj));         // object
    if (typeof obj.pwd === "number"){
        console.log(`Hi ${obj.name}! You have logged in as a USER`);
    } else {
        console.log(`Hi ${obj.name}! You have logged in as an ADMIN`);
    }
};

let u : User = {name : "cefe", pwd : 34965};
login(u);
let a : Admin = {name : "fuf", pwd : "ckh73fb"};
login(a);