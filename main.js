var animals = "";
var street = "";
var garden = "";
var farm = "";
var beach = "";

var object = "";
var opencanvas = "";

function preload() {
    animals = loadImage("animals.jpg");
    street = loadImage("Street.jpg");
    garden = loadImage("garden.jpg");
    farm = loadImage("farm.jpg");
    beach = loadImage("beach.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    
    if (opencanvas == "yes") {
        if (object=="animals"){
            image(animals, 0, 0, 640, 420);
    
            strokeWeight(5);

            fill("#BF53FF");
            text("Elephant", 190, 30);
            noFill();
            stroke("#BF53FF");
            rect(190, 15, 300, 300);
            noStroke();

            fill("rgb(255, 222, 172)");
            text("Crocodile", 200, 300);
            noFill();
            stroke("rgb(255, 222, 172)");
            rect(190, 280, 300, 250);
            noStroke();

            fill("#DE0082");
            text("Shark", 60, 30);
            noFill();
            stroke("#DE0082");
            rect(35, 15, 150, 200);
            noStroke();
        }
    }
}

function pic1() {
    opencanvas = "yes";
    object = "animals";
}

function pic2() {
    opencanvas = "yes";
    object = "street";
}

function pic3() {
    opencanvas = "yes";
    object = "garden";
}

function pic4() {
    opencanvas = "yes";
    object = "farm";
}

function pic5() {
    opencanvas = "yes";
    object = "beach";
}