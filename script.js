/**
 * 
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
var slots = [];
var nummer1 = 0;
var nummer2 = 0;
var nummer3 = 0;

function setup() {

  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
  for(i=0;i<3;i++){
    var kleurR = 0;
    var kleurG = 0;
    var kleurB = 0;
    var x = 345;
    var y = 575;
    nummerSlot();
    if(nummer1 === nummer2 && nummer2 === nummer3) {
      kleurG = 255;
    }
    var slot = new Slots(nummer1,nummer2,nummer3,kleurR,kleurG,kleurB,x,y)
    slots.push(slot);
  }
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('white');
}

function nummerSlot() {
  nummer1 = Math.ceil(random(0,9));
  nummer2 = Math.ceil(random(0,9));
  nummer3 = Math.ceil(random(0,9));
}



/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  for(i=0;i<slots.length;i++){
  slots[i].show()
  }
}