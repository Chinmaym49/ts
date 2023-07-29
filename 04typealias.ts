type ComplexNumber = {
    r : number,
    i : number;
};

let c1 : ComplexNumber = {
    r : 1,
    i : -2
}

let print = (c : ComplexNumber) : void => {
    console.log(`Complex number is ${c.r} ${c.i >= 0 ? "+" : "-"} ${Math.abs(c.i)}i`);
}

let negate = (c : ComplexNumber) : ComplexNumber => {
    return {r : -c.r, i : -c.i};
}

print(c1);
let c2 : ComplexNumber = negate(c1);
print(c2);

export {};