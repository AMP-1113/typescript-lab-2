import { Greeter } from "./greeter";

export class LoudGreeter extends Greeter {
    private extra: string = "!";

    addVolume(): void {
        this.extra += "!";
       // console.log(this.extra);
    }

    greet(name: string): string {
        //console.log(this.extra);
        return `${this.greeting}, ${name}${this.extra}`;
    }


};

// return super.greet(name) + this.extra