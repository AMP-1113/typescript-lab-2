import { LoudGreeter } from "./LoudGreeter";

describe("Tests for LoudGreeter Class", () => {
    test("returns greeting based on greeting prop and name parameter, no calls to addVolume", () => {
        let greeting1: LoudGreeter = new LoudGreeter("Sup")
        let result = greeting1.greet("Boba?");
        expect(result).toEqual("Sup, Boba?!");
    });

    test("returns greeting based on greeting prop and name parameter, two calls to addVolume", () => {
        let greeting2: LoudGreeter = new LoudGreeter("Sup");
        greeting2.addVolume();
        greeting2.addVolume();
        let result = greeting2.greet("Boba?");
        expect(result).toEqual("Sup, Boba?!!!");
    });

    test("returns greeting based on greeting prop and name parameter, four calls to addVolume", () => {
        let greeting2: LoudGreeter = new LoudGreeter("Sup");
        greeting2.addVolume();
        greeting2.addVolume();
        greeting2.addVolume();
        greeting2.addVolume();
        let result = greeting2.greet("Boba?");
        expect(result).toEqual("Sup, Boba?!!!!!");
    });



});