const {Circle, Square, Triangle, SVG} = require("../lib/shapes.js");
const {Utils} = require("../lib/utils.js");

describe("utils", () => {
    describe("shapeSelector", () => {
        it("should return a circle", () => {
            const utils = new Utils();
            const circle = utils.shapeSelector("Circle");
            expect(circle).toBeInstanceOf(Circle);
        });
        it("should return a square", () => {
            const utils = new Utils();
            const square = utils.shapeSelector("Square");
            expect(square).toBeInstanceOf(Square);
        });
        it("should return a triangle", () => {
            const utils = new Utils();
            const triangle = utils.shapeSelector("Triangle");
            expect(triangle).toBeInstanceOf(Triangle);
        });
        it("should throw an error if an invalid shape is selected", () => {
            expect(() => Utils.shapeSelector("invalid")).toThrow();
        });
    });
});