function foo(s : string) : number {
    return s.length;
}

let fooo = function(f : string, l : string) : void {
    console.log(`Full Name : ${f} ${l}`);
}

let foooo = (n : number) : boolean => {
    return n % 2 === 0;
}

// never is explicitly used for exceptions
let handleError = (msg : string) : never => {
    throw new Error(msg);    
}

console.log(foo("bkjbcekur"));
fooo("ckb", "kcwbrc");
console.log(foooo(3));
console.log(handleError("error"));
