const {Circle, Square, Triangle, SVG} = require("../lib/shapes.js");
const fs = require("fs");
function Utils() {}
    
Utils.prototype.shapeSelector=(shape) => {
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
};

Utils.prototype.generateFile = (shapeColor,shape,textColor, text, xmlString) => {
    let fileName = `logo-${shapeColor}-${shape}-${textColor}-${text}.svg`;
    fs.writeFile(fileName, xmlString, (err, fileName) => {
        if (err) { return err; }
    });
    return fileName;
};

module.exports = Utils;