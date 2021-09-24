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
            createCanvas(1280, 720);
            background('white');

            for(var i = 0; i < 3;i++) {
                var rectX = 200;
                var rectY = 100;

                var slot = new Slot(-,-,-,-,rectX,rectY)
            }
          }

    draw() {
        
        
    }
}