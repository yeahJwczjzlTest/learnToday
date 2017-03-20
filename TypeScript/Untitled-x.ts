class Grxeeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Grxeeter.standardGreeting;
        }
    }
}

let greeter1: Grxeeter;
greeter1 = new Grxeeter();
console.log(greeter1.greet());

let greeterMaker: typeof Grxeeter = Grxeeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Grxeeter = new greeterMaker();
console.log(greeter2.greet());