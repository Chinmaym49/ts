abstract class A {
    public x : string;
    public y : string;

    w() : void {
        console.log("Definition in abstract class");
    }

    abstract z() : void;
}

class B extends A {
    constructor() {
        super();
        this.x = "1";
        this.y = "2";
    }

    z = () => {
        console.log(`${this.x} ${this.y}`);
    }

    w() : void {
        console.log("Definition outside abstract class");
    }
}

let obj = new B();
console.log(obj.x, obj.y);
obj.w();
obj.z();