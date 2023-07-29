type Dept = {
    readonly id : number,
    name : string,
    strength? : number
}

type Emp = {
    readonly id : number,
    name : string,
    salary? : number,
    dept : Dept
}

let e : Emp = {
    id : 1,
    name : "hwjbr",
    salary : 3468373,
    dept : {
        id : 3,
        name : "cjke"
    }
};

type t1 = {
    x : string,
    y : number
}

type t2 = {
    a : boolean,
    b : string
}

type t3 = t1 & t2 & {
    // ...t1,           // cannot use spread here
    // ...t2
    z : boolean,
    c : number
}

let o : t1 = {
    x : "+",
    y : 1
};

let obj : t3 = {
    a : true,
    b : "-",
    z : false,
    c : 2,
    ...o
};

export {};