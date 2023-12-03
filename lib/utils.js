const {Circle, Square, Triangle, SVG} = require("../lib/shapes.js");

class Utils {
   shapeSelector(shape) {
        switch(shape) {
            case "Circle":
                return new Circle();
            case "Square":
                return new Square();
            case "Triangle":
                return new Triangle();
            default:
                console.log("Please select a valid shape");
                return;
        }
    }
}

module.exports = {Utils};