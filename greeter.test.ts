import { Greeter } from "./greeter";

describe("Tests for Greeter Class", () => {

    test("returns greeting based on greeting prop and name parameter", () => {
        let greeting1: Greeter = new Greeter("Sup")
        let result = greeting1.greet("Boba?");
        expect(result).toEqual("Sup, Boba?");
    });

    test("returns greeting based on greeting prop and name parameter", () => {
        let greeting2: Greeter = new Greeter("Fancy seeing you here")
        let result = greeting2.greet("Han.");
        expect(result).toEqual("Fancy seeing you here, Han.");
    });

    test("returns nothing with no arguments passed", () => {
        let greeting3: Greeter = new Greeter("")
        let result = greeting3.greet("");
        expect(result).toEqual(", ");
    });


});