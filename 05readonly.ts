type Emp = {
    readonly id : number,
    name : string,
    dept : string,
    salary : number,
    readonly skills : string[]
};

let e : Emp = {
    id : 1,
    name : "lcen",
    dept : "ckej",
    salary : 6245854,
    skills : ["python", "java"]
};

// e.id+=1;                         // Error
e.skills.push("js");                // No err coz not changing reference
e.skills.shift();
// e.skills = [...e.skills, "ts"];  // Error coz of changing reference

export {};