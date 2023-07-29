let x : string = "hello";
let y : number = 1;
let z : boolean = true;

console.log(x, y,z);

let foo = (n : number) : boolean => {
    return n % 2 === 0;
}

function fooo(s : string) : number {
    return s.length;
}

console.log(foo(3));
console.log(fooo("bkjbcekur"));

export {};