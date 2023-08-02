type TUser = {
    name : string,
    id : number,
    print : (greeting : string) => void
};

interface IUser {
    name : string;
    id : number;
    print : (greeting : string) => void;
}

let u1 : TUser = {
    name : "ckwh",
    id : 12,
    print : function(greet : string) : void {
        console.log(greet, this.id, this.name);
    }
};

u1.print("Hello");

let u2 : IUser = {
    name : "cwrc",
    id : 32,
    print : function(greet : string) : void {
        console.log(greet, this.id, this.name);
    }
};

u2.print("Hi");

// From above example, both look the same.
// There are only 2 differences between type and interface:
// 1. Extending.
// 2. Reopening.

// 1.
type T1 = {
    x : string
}
type T2 = T1 & {
    y : number
}

interface I1 {
    x : string
}
interface I2 extends I1 {
    y : number
}

// 2.
// Not allowed as already defined earlier
type T1 = {
    a : number;
}

// Reopening / injecting more props in same interface
interface I1 {
    a : number
}

let obj : I1 = {
    x : "lcje",
    a : 23
};

export {};