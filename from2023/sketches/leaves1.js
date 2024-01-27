let leaves = [];
let wBound = 300;
let hBound = 300;
let numLeaves = 25;

class Leaf {
  // wBound = windowWidth;
  // hBound = windowHeight;
  constructor(x,y,state) {
    this.x=x;
    this.y=y;
    this.w=Math.random()*(wBound * .25);
    this.h=Math.random()*(hBound * .25);
    
    // r g b
    let aRed = Math.random()*120+50;
    let aGreen = Math.random()*255+120;
    this.r = aRed;
    this.g = aGreen;
    this.body = color(this.r,this.g,0);
    this.border = 0;
    this.a = 255; // alpha
    
    // very rough pseudo gravity
    this.mass = 10;
  }
  draw() {

    noStroke();
    fill(this.body);
    rect(this.x,this.y,this.w,this.h,this.border);
  }
  // update() later
  update() {
    // boundary detection
    // condensed expression later
    let xDel = (Math.random());
    let yDel = (Math.random());
    this.y += (yDel);
    this.border += Math.random();
    
    // pop when at "bottom" of canvas
    // ideally, color also changes
    if (this.r > 25) {
      this.r -= 1;
    } 
    if (this.g > 250) {
      this.g -= 1;
    }
    if (this.a > 15) { this.a -= 1;}
    this.body = color(this.r,this.g,0);
    this.body.setAlpha(this.a);
  }
}

function setup() {
  createCanvas(wBound,hBound);
  for (let i=0;i<numLeaves;i++) {
    // push leaves
    leaves.push(new Leaf(Math.random()*(wBound*.75),(Math.random()*(hBound*.5)),(Math.random()*wBound)+(wBound*.08),(Math.random()*hBound*.5)+(hBound*.05)));
  }
}

function draw() {
  background(40,34,20);
  for (let i=0; i<leaves.length;i++) {
    let thisLeaf = leaves[i];
    thisLeaf.draw();
    thisLeaf.update();
    // pop if on ground
    if ((thisLeaf.y+thisLeaf.h >= (hBound * .95)) && thisLeaf.a <= 25) {
      leaves.splice(i);
    }
  }
  // rn the issue is leaves gets overwritten with 
  // new leaves; need previously newly generated
  // leaves to continue to fall
  
  // need numLeaves to update at some point
  if (leaves.length <= (numLeaves*.5)) {
    leaves.push(new Leaf(Math.random()*(wBound*.75),(Math.random()*(hBound*.5)),(Math.random()*wBound)+(wBound*.5),(Math.random()*hBound*.1)));
    // numLeaves = leaves.length;
  }
  console.log('numLeaves: ',leaves.length)
}