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