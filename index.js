const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle, SVG} = require("./lib/shapes.js");
const Utils = require("./lib/utils.js");

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
        message: "please select the color of the text using key word (or a #hexadecimal number)?"
        
    },
    {
        type: "input",
        name: "shapeColor",
        message: "please select the color of the shape using key word (or a #hexadecimal number)?",
        
    },
    ])
   .then((answers) => {
    
    const utils = new Utils();
    let shape = utils.shapeSelector(answers.selectedShape);

    shape.setFillColor(answers.shapeColor);
    let svg = new SVG(300, 200);
    svg.setTextColor(answers.textColor);
    svg.setText(answers.text);
    svg.setShape(shape.draw());
    let xmlString = svg.getSVG();
    console.log(xmlString);
    let fileName = utils.generateFile(answers.shapeColor, answers.selectedShape, answers.textColor, answers.text, xmlString);
    console.log(`Generated ${fileName} successfully`);
});
        
