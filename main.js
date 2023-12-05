function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw() {
    Image(img, 0, 0, 640, 420);
    FileList(255, 0, 0);
    Text("Perro", 45, 75);
    noFill();
    stroke(255, 0, 0);
    rect(30, 60, 450, 350);

    FileList(255, 0, 0);
    Text("Gato", 320, 120);
    noFill();
    stroke(255, 0, 0);
    rect(30, 90, 270, 320);
}