const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle, SVG} = require("./lib/shapes.js");

inquirer
   .prompt([
    {
        type: "list",
        name: "selectedShape",
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
        message: "please select the color of the text using key word or #hexadecimal?"
        
    },
    {
        type: "input",
        name: "shapeColor",
        message: "please select the color of the shape using key word or #hexadecimal?",
        
    },
    ])
   .then((answers) => {
  switch(answers.selectedShape) {
    case "Circle":
      shape = new Circle();
      break;
    case "Square":
      shape = new Square();
      break;
    case "Triangle":
      shape = new Triangle();
      break;
    default:
     console.log("Please select a valid shape");
     return;
    }
    shape.setFillColor(answers.shapeColor);
    let svg = new SVG(300, 200);
    svg.setTextColor(answers.textColor);
    svg.setText(answers.text);
    svg.setShape(shape.draw());
    let xmlString = svg.getSVG();
    console.log(xmlString);
    fs.writeFile("logo.svg", xmlString, (err) =>
   err? console.error(err) : console.log('Generated logo.svg'));
});
        