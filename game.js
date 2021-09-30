class Slots {
    nummer1;
    nummer2;
    nummer3;
    kleurR;
    kleurG;
    kleurB;
    slots;
    x;
    y;


    constructor(_nummer1,_nummer2,_nummer3, _kleurR, _kleurG, _kleurB,_x,_y) {
        this.nummer1 = _nummer1;
        this.nummer2 = _nummer2;
        this.nummer3 = _nummer3;
        this.kleurR = _kleurR;
        this.kleurG = _kleurG;
        this.kleurB = _kleurB;
        this.slots = [];
        this.x = _x;
        this.y = _y;


    }


        show() {
            fill(this.kleurR,this.kleurG,this.kleurB);
            rect(700,500,120,120);
            rect(500,500,120,120);
            rect(300,500,120,120);
            fill(255,255,255);
            textSize(50);
            text(this.nummer1,345,575);
            text(this.nummer2,545,575);
            text(this.nummer3,745,575);

        }
}