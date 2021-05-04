import { JavaScriptGreeter } from "./JSGreeter";

describe("Tests for JavaScriptGreeter Class", () => {

    test("returns greeting based on greeting prop and name parameter", () => {
        let greeting1: JavaScriptGreeter = new JavaScriptGreeter("Sup")
        let result = greeting1.greet("Boba?");
        expect(result).toEqual("console.log(Sup, Boba?)");
    });

    test("returns greeting based on greeting prop and name parameter", () => {
        let greeting2: JavaScriptGreeter = new JavaScriptGreeter("Fancy seeing you here")
        let result = greeting2.greet("Han.");
        expect(result).toEqual("console.log(Fancy seeing you here, Han.)");
    });

    test("returns nothing with no arguments passed", () => {
        let greeting3: JavaScriptGreeter = new JavaScriptGreeter("")
        let result = greeting3.greet("");
        expect(result).toEqual("console.log(, )");
    });


});