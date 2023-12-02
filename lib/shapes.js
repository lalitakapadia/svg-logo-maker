class shape {
    constructor(){
        this.fillColor = "";
    }
    setFillColor(color){
        this.fillColor = color;
    }
}
class circle extends shape {
    constructor(radius){
        super();
        this.radius = radius;
    }
}
class square extends shape {
   constructor(side){
    super();
    this.side = side;
   }
}
class triangle extends shape {
    constructor(base, height){
        super();
        this.base = base;
        this.height = height;
    }
}
