class Game {
    nummer;
    kleurR;
    kleurG;
    kleurB;
    rectX;
    rectY;
    slots;

    constructor(_nummer, _kleurR, _kleurG, _kleurB, _rectX, _rectY) {
        this.nummer = _nummer;
        this.kleurR = _kleurR;
        this.kleurG = _kleurG;
        this.kleurB = _kleurB;
        this.rectY = _rectY;
        this.rectX = _rectX;
        this.slots = [];

    }


    setup() {
        function setup() {
            createCanvas(1280, 720);
            background('white');
          }
    }

    draw() {
        // subclasses
        
    }
}