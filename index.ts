import { Greeter } from "./greeter";
import { JavaScriptGreeter } from "./JSGreeter";
import { LoudGreeter } from "./LoudGreeter";

let greeter: Greeter = new Greeter("Hello");
console.log( greeter.greet("Adam") );

let JSGreeter: JavaScriptGreeter = new JavaScriptGreeter("Yo");
console.log (JSGreeter.greet("Alex"));