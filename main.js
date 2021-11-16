var img = "";
var identify = "";

function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    if (identify=="yes") {
        canvas = createCanvas(640, 420);
        canvas.center();
    }
}

function draw() {
    if (identify == "yes") {
        image(img, 0, 0, 640, 420);
    
        strokeWeight(5);

        fill("#00C6CF");
        text("Dog", 290, 30);
        noFill();
        stroke("#00C6CF");
        rect(280, 15, 300, 340);
        noStroke();

        fill("rgb(255, 222, 172)");
        text("Cat", 70, 100);
        noFill();
        stroke("rgb(255, 222, 172)");
        rect(60, 85, 300, 250);
        noStroke();
    }
}