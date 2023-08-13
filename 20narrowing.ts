// Type 1 (Checking type)
function fo(arg : number | string | number[]) {
    if (typeof arg === "number") {
        arg+1;
        console.log("NUMBER");
    } else if (typeof arg === "object") {
        arg.push(1);
        console.log("ARRAY");
    } else {
        arg.length;
        console.log("STRING");
    }
}

type t1 = {
    x : number;
}

type t2 = {
    y : string;
};

// Type 2 (Checking property)
let foo = (arg : t1 | t2) => {
    if ("x" in arg) {
        console.log("T1");
    } else {
        console.log("T2");
    }
}

// Type 3 (Works if object is created using new keyword)
let fooo = (arg : Date | string) => {
    if (arg instanceof Date) {
        arg.getTime();
        console.log("DATE");
    } else {
        arg.charCodeAt(0);
        console.log("STRING");
    }
}

// Type 4 (Casting) [Predicate]
type Fish = {
    swim : () => void;
}

type Bird = {
    fly : () => void;
}

function foooo(arg : Fish | Bird) {
    if (isFish(arg)) {
        arg.swim();
        console.log("FISH");
    } else {
        arg.fly();
        console.log("BIRD");
    }
}

function isFish(arg : Fish | Bird) : arg is Fish {      // if we specify bool instead of arg is Fish, then TS still won't know if FISH or BIRD above while suggesting methods
    return (arg as Fish).swim !== undefined;            // "arg is Fish" means, if return value is true, then tell TS that arg is of Fish type
}

export {};