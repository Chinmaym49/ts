interface I {
    x : string,
    y : number,
    z : () => string
}

class A implements I {
    public x: string;
    public y: number;

    constructor(x : string, y : string) {
        this.x = x;
        this.y = Number(y);
    }

    z = () : string => {
        return `${this.x} ${this.y}`;
    }
    
}

let obj = new A("abc", "123");
console.log(obj.z());