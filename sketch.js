let capture;
let grid = 10;

function setup() {

  createCanvas(600, 600);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {

  background(0);
  capture.loadPixels();

  for(let y = 0; y < capture.height; y+= grid) {
    for(let x = 0; x < capture.width; x+= grid) {

      let index = (y * capture.width + x) * 4 ;

      let r = capture.pixels[index];
      let dist =  map(r,0,255,1,55);

      noStroke();
      fill(random(0,20),random(20,255),random(0,20));
      rect(x,y,dist,dist);
      fill(225)
      textSize(60);
      textStyle(BOLD);
      stroke(255,0,0);
      textAlign(CENTER);
      text("HACKER MAN",width/2, height/6)
     
      
    
    }
  }

}