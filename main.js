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
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status = Detecting Objects";
}

function draw() { 
    if (opencanvas == "yes") {
        if (object=="animals"){
            image(animals, 0, 0, 640, 420);
        } if (object == "street") {
            image(street, 0, 0, 640, 420);
        } if (object == "garden") {
            image(garden, 0, 0, 640, 420);
        } if (object == "farm") {
            image(farm, 0, 0, 640, 420);
        } if (object == "beach") {
            image(beach, 0, 0, 640, 420);
        }
    }

    if (status1 != "") {
        for (var i=0; i<objects.length; i++) {
            strokeWeight(2);
            fill("#1AA7EC");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x +10, objects[i].y +10);
            noFill();
            stroke("#1AA7EC");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    document.getElementById("status").innerHTML = "Status - Object Detected";
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

function modelLoaded() {
    console.log("Model Loaded");
    status1 = "true";
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else if() {
        console.log(results);
        objects = results;
    }
}