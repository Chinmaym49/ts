npm install -g typescript

tsc -v

Ts is just a dev tool, a wrapper over js. At the end, ts is transpiled to js. It just helps to reduce the possibility of errors because of type safety.

To run, first do tsc name.ts. This will generate js file, Now run the js file using node.

let name : type = ....

function foo(param : type) : type {}

let foo = (param : type) : type => {}

It is not always required to specify type. If, we are initializing a variable while declaring it, typescript will intelligently deduce/infer the type. This is called type inference.

"any" is not a type. It just tells typescript to not check the type for such variables.

"never" is used explicitly for exceptions.

we can also specify object as type of param or return type.

type alias -> structure of types for a particular requirement.

readonly -> used in type against an attr.

optional -> name? : type

type t3 = t1 & t2 & { x : number} (Can't spread t1 and t2 in t3 as they are not objects)

unions allow to have variables / params of many types but limited. (use if else in function to distinguish)

literals can have fixed value (like const or enum)

let obj : User; typeof obj returns "object", not "User".

array with mixed datatype can be obtained by a : (string | number)[];

tuples allows us to maintain order of types in a fixed length array.

only diff between type and interface : (way of extending), (reopening)

just like object can have function in them, even type can have function declaration in them.

we can have 2d arrays in ts. let arr : number[][] = [[], []];

enums exist in ts.

tsc --init -> creates tsconfig.json where we mention transpiler settings.

npm init -y -> creates package.json without asking questions.

every project has src and dist. dist contains the transpiled ts and this is what goes to PROD.

public private keywords need to be used in ts classes

getters and setters in ts classes use keywords get and set.

set cannot have return type, not even void.

getters and setters are used as variables and not funtions.

classes can implement interfaces. Interfaces cannot have function definition.

