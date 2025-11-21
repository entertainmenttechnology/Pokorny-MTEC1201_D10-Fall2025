/*
______LINES OOP QUIZ_______
Add Following Functionality:

  When mouse is pressed...
    - Line object is added to array and drawn from center position to mouse position.
	    - BONUS: make it so the opacity, stroke, and strokeWeight are randomized on that new object.
  When any key is pressed...
    - the whole image resets, the starting lines are redrawn with new random values
*/


let lines = [];      //array of line objects
lines.length = 100;  //size of line array

function setup() 
{
  createCanvas(600, 600);

  //generate lines from the center of canvas to equally spaced points around circle (based on lines.length), at random radius.
  for (let i = 0; i < lines.length; i++)  //for every element in array...
  {
    //generate random radius value between 1 and 100
    let radius = random(1, 100); 

    //map the length of array from 0 to TWO_PI for angles of circle 
    let angle = map (i, 0, lines.length, 0, TWO_PI); 

    //create new instance of Line object for each array element
    // line object initialized with (x2, y2) at center position, and (x1, y1) at 
    lines[i] = new Line(width/2 + radius * cos(angle), height/2 + radius * sin(angle), width/2, height/2); 

    //set stroke, strokeWeight, opacity for each object in array
    lines[i].opacity = random(127, 155);
    lines[i].stroke = 255;
    lines[i].strokeWeight = random(0.05, 1);
  }
}

function draw() 
{
  background(0);

  for(let i = 0; i < lines.length; i++) //for every object in array...
  {
    lines[i].display(); //run display() method
  }
}

class Line  //Line Class Definition
{
  //Constructor, runs when new instance is created
  constructor(_x1, _y1, _x2, _y2) //accepts point1(x1, y1) and point2(x2, y2) arguments
  {
    this.x1 = _x1;
    this.y1 = _y1;
    this.x2 = _x2;
    this.y2 = _y2;
    this.stroke = 255;      //greyscale value, default to white
    this.strokeWeight = 1;  //default to 1
    this.opacity = 255;     //alpha value, default to full opacity
  }

  display() //run this continuously in draw()
  {
    strokeWeight(this.strokeWeight);
    stroke(this.stroke, this.opacity);
    line(this.x1, this.y1, this.x2, this.y2);
  }
}