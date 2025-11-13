/*
Another OOP demo, with array of objects.
*/

let ellipses = []; // declares object array
ellipses.length = 111; // sets length of array

function setup() 
{
	createCanvas(800, 800);
	
	for (let i = 0; i < ellipses.length; i++) 
	{
		ellipses[i] = new Movement(random(width), random(height), random(100), random(100));
	}
}

function draw() 
{
	background(200, 50, 150);
	for (let i = 0; i < ellipses.length; i++) 
	{
		ellipses[i].display();
		ellipses[i].move();
	}
}

class Movement 
{
	constructor(tempX, tempY, tempW, tempH)
	{
		this.x = tempX;
		this.y = tempY;
		this.w = tempW;
		this.h = tempH;
		this.xMove = random(6);
		this.ranStrokeWeight = random(1, 15);
		this.ranAlpha = random(255);
	}

	display() 
	{
		strokeWeight(this.ranStrokeWeight);
		fill(255, 255, 255, this.ranAlpha);
		ellipse(this.x, this.y, this.w, this.h);
	}

	move() 
	{
		this.x += this.xMove;
		
		if (this.x > width || this.x < 0) 
		{
			this.xMove = -this.xMove;
		}
	}
}