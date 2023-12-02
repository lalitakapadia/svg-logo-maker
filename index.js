const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require("./lib/shapes.js");

inquirer
   .prompt([
    {
        type: "list",
        name: "shapes",
        message: "What shape would you like?",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        name: "text",
        message: "Enter up to three character"
        
    },
    {
        type: "input",
        name: "textColor",
        message: "What is the color of the text or #hexadecimal?"
        
    },
    {
        type: "input",
        name: "shapeColor",
        message: "please select the color of the shape using key word or #hexadecimal?",
        
    },
    ])
   .then((answers) => {
    const{shapes, text, textColor, shapeColor} = answers;
    let shape;
  switch(shape) {
    case "Circle":
      shape = new Circle(text);
      break;
    case "Square":
      shape = new Square(text);
      break;
    case "Triangle":
      shape = new Triangle(text);
      break;
    default:
     console.log("Please select a valid shape");
     return;
    }
   shape.setColor(shapeColor);
   shape.setTextColor(textColor);
   shape.setShape(shape.render());
   return writeFile(".example/logo.svg", shape.render(), (err) =>
   err? console.error(err) : console.log('Generated logo.svg'));

});
        