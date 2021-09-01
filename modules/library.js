let message = "ES6 Modules";

function user(name){
    return `Hello ${name}`;
}

class test{
    constructor(){
        console.log("Constructor Method");
    }
}


export { message, user, test };

// default function Example

export default function(){
    console.log("Hello default function");
}