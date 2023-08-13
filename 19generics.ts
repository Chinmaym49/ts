// used comma to tell developer that this is not a jsx tag.
function foo<Type,>(arg : Type) : Type {
    return arg;
}

let fooo = <Type,>(args : Type) : Type => {
    return args;
}

console.log(typeof foo("clwnc"));
console.log(typeof foo(242));
console.log(typeof fooo({x : 1, y : 2}));