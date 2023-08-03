class Human {
    public name : string;
    protected gender : string;
    private age : number;

    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    get getName() : string {
        return this.name;
    }

    set setName(name : string) {
        this.name = name;
    }
}

let h : Human = new Human("kebr", "M", 23);
console.log(h.name);
// console.log(h.age, h.gender);      // Err
console.log(h.getName);
h.setName = "cnic3r"
console.log(h);

class User extends Human {
    private readonly id : number;

    constructor(id : number) {
        super("", "F", 0);
        this.id = id;
    }

    print = () : void => {
        console.log(this.id, this.gender);
    }

    get getId() : number {
        return this.id;
    }
}

let u : User = new User(347);
u.print();
console.log(u.getId);