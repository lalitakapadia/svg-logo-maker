class Shape {
    constructor(){
        this.fillColor = "";
    }
    setFillColor(color){
        this.fillColor = color;
    }
}

class Circle extends Shape {
    draw(){
        return `<circle cx="150" cy="150" r="100" fill="${this.fillColor}"></circle>`;
    }
}
class Square extends Shape {
  draw(){
    return `<rect  x="50" y="50" width="200" height="200" fill="${this.fillColor}"></rect>`;
    }
}
class Triangle extends Shape {
    draw(){
        return ` <polygon points="150, 18 300, 182 20, 182" fill="${this.fillColor}"/>`;
    }
}

class SVG {
    textColor = "";
    textTag = "";
    shapeTag = "";

    setText(textValue){
        this.textTag = `<text x="70" y="160" font-size="120" fill="${this.textColor}">${textValue}</text>`;
    }
    setTextColor(color){
        this.textColor = color;
    }
    setShape(shape){
        this.shapeTag = shape;
    }
    getSVG(){
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"> ${this.shapeTag} ${this.textTag} </svg>`; 
    }
}

module.exports = { Triangle, Square, Circle, SVG, };