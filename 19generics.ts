function foo<Type>(arg : Type) : Type {
    return arg;
}

console.log(typeof foo("clwnc"));
console.log(typeof foo(242));
console.log(typeof foo({x : 1, y : 2}));