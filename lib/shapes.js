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
    return `<square side="200" fill="${this.fillColor}"></square>`;
    }
}
class Triangle extends Shape {
    draw(){
        return `<triangle base="200" height="200" fill="${this.fillColor}"></triangle>`;
    }
}

class SVG {
    textColor = "";
    textTag = "";
    shapeTag = "";

    setText(textValue){
        this.textTag = `<text x="150" y="125" font-size="60" fill=${this.textColor}">${textValue}</text>`;
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