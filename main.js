var myx = 100;
var myy = 100;
var xspeed = 13;
var yspeed = 12;

function setup() { 
    createCanvas(1200, 1000);

function draw() {
    background(64, 255, 191);
    rect(myx, myy, 100, 100);
    rect(mouseX, mouseY, 20, 20);
    myx = myx + xspeed;
    myy += yspeed; // same as myy = myy + yspeed
    
    if(myx > width || myx < 0) {
        xspeed = xspeed * -1;
    }
    if(myy > height || myy < 0) {
        yspeed *= -1
    }
}
   
     