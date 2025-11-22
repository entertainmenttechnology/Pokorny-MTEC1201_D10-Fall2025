let lines = [];
lines.length = 1000;

function setup() 
{
  createCanvas(600, 600);

  for (let i = 0; i < lines.length; i++)
  {
    let radius = random(1, 100);
    let angle = map (i, 0, lines.length, 0, TWO_PI);
    lines[i] = new Line(width/2 + radius * cos(angle), height/2 + radius * sin(angle), width/2, height/2);
    lines[i].opacity = random(127, 155);
    lines[i].stroke = 255;
    lines[i].strokeWeight = random(0.05, 1);
    lines[i].xMove = random(0.05, 3);
    lines[i].yMove = random(0.05, 3);
  }

}

function draw() 
{
  background(0);

  for(let i = 0; i < lines.length; i++)
  {
    lines[i].move();
    lines[i].display();
  }
}

function mousePressed()
{
  lines.push(new Line(mouseX, mouseY, width/2, height/2));
  lines[lines.length - 1].xMove = random(0.05, 3);
  lines[lines.length - 1].yMove = random(0.05, 3);
  lines[lines.length - 1].yMove = random(0.05, 3);
  lines[lines.length - 1].strokeWeight = random(5, 20);
  lines[lines.length - 1].opacity = random(32, 127);
}

function keyPressed()
{
  for (let i = 0; i < lines.length; i++)
  {
    radius = random(1, 100);
    let angle = map (i, 0, lines.length, 0, TWO_PI);
    lines[i] = new Line(width/2 + radius * cos(angle), height/2 + radius * sin(angle), width/2, height/2);
    lines[i].opacity = random(127, 155);
    lines[i].stroke = 255;
    lines[i].strokeWeight = random(0.05, 1);
    lines[i].xMove = random(0.05, 3);
    lines[i].yMove = random(0.05, 3);
  }
}

class Line
{
  constructor(_x1, _y1, _x2, _y2)
  {
    this.x1 = _x1;
    this.y1 = _y1;
    this.x2 = _x2;
    this.y2 = _y2;
    this.stroke = 255;
    this.strokeWeight = 1;
    this.opacity = 255;
    this.xMove = 0.5;
    this.yMove = 0.5;
  }

  display()
  {
    strokeWeight(this.strokeWeight);
    stroke(this.stroke, this.opacity);
    line(this.x1, this.y1, this.x2, this.y2);
  }

  move()
  {
    if (this.x1 < width/2)
    {
      this.x1 -= this.xMove;
    }
    else
    {
      this.x1 += this.xMove;
    }

    if (this.y1 < height/2)
    {
      this.y1 -= this.yMove;
    }
    else
    {
      this.y1 += this.yMove;
    }
  }
}