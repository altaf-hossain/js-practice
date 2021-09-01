import { message, test, user } from './bridge.js';

console.log(message);

document.body.innerHTML = message;

console.log(user("Alam Baba"));

let a = new test();

// import * as baba from "./library.js"; // another way import
// console.log(baba.message);
// console.log(baba.user("Alam Baba"));
// let a = new baba.test();

// default function import example

//import { default as yahoo } from "./library.js";
//import yahoo from "./bridge.js"; // another way to import default function
import { default as yahoo} from "./bridge.js"; 
yahoo();