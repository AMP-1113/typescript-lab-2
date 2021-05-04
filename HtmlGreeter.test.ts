import { HtmlGreeter } from "./HtmlGreeter"

describe("Tests for HtmlGreeter Class", () => {
    test("returns greeting with name inside DEFAULT HTML tag", () => {
        let greeting1: HtmlGreeter = new HtmlGreeter("Hello");
        let result: string = greeting1.greet("Albert");
        expect(result).toEqual("<h1>Hello, Albert!</h1>")
    });

    test("returns greeting with name with specified HTML tag", () => {
        let greeting1: HtmlGreeter = new HtmlGreeter("Hello");
        greeting1.tagName = "p";
        let result: string = greeting1.greet("Stan");
        expect(result).toEqual("<p>Hello, Stan!</p>")
    });

    test("returns greeting with name with specified HTML tag", () => {
        let greeting1: HtmlGreeter = new HtmlGreeter("Greetings");
        greeting1.tagName = "div";
        let result: string = greeting1.greet("Chelsea");
        expect(result).toEqual("<div>Greetings, Chelsea!</div>")
    });



});