var dripX = [];
var dripY = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  for (var i = 0; i < 100; i = i + 1) {
    dripX[i] = 230;
    dripY[i] = random(200, height);
  }

}

function draw() {
  background(0);
  noStroke();

  for (var i = 0; i < 5; i = i + 1) {
    dripX[i] = 230;
    //dripY[i] = 200; 

    // draw drip
    ellipse(dripX[i], dripY[i], 10);
    
    // down 3 pixels each frame, but maybe should be accelerating?
    dripY[i] = dripY[i] + 3;

    // if invisible for a full “height” amount…
    if (dripY[i] > height * 2) {
    // reset
      dripY[i] = 220;
    }

    // draw pipe
    rect(0, 200, 230, 20);

  }
}
