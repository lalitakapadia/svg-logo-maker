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
        return `<circle width="300" height="200" cx="150" cy="115" r="80" fill="${this.fillColor}"></circle>`;
    }
}
class Square extends Shape {
  draw(){
    return `<rect width="120" height="120" x="90" y="40" fill="${this.fillColor}"></rect>`;
    }
}
class Triangle extends Shape {
    draw(){
        return ` <polygon points="200, 60 400, 200 0, 220" fill="${this.fillColor}"/>`;
    }
}

class SVG {
    textColor = "";
    textTag = "";
    shapeTag = "";

    setText(textValue){
        this.textTag = `<text x="150" y="125" font-size="60" fill="${this.textColor}">${textValue}</text>`;
    }
    setTextColor(color){
        this.textColor = color;
    }
    setShape(shape){
        this.shapeTag = shape;
    }
    getSVG(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.shapeTag} ${this.textTag} </svg>`; 
    }
}

module.exports = { Triangle, Square, Circle, SVG, };