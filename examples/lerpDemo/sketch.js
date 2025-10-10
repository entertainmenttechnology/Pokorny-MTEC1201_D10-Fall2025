/*
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
"A Simple LERP (Linear Interpolation) Demo" by Ian Pokorny

- Press LEFT & RIGHT to Adjust Lerp Amount
- Press SPACE to Pause movement
- Press 1 to switch between Linear & Sine movement
____________________________________________________________________________
x = lerp(value A, value B, amount);

Lerp calculates the value between two given values. The amount paramter adjusts
the returned value towards one of those two values. 
For example:
- an amount of 0.0 is equal to value A
- an amount of 1.0 is equal to value B
- an amount of 0.5 is equal to the halfway point between value A and value B

By adjusting the amount parameter you can get smooth transitions 
between two values over time, a very useful tool for animation.
Lerp is the foundation of "Easing Functions", which allow for precise control
over the qualities of motion. 
____________________________________________________________________________
See p5.js Reference:
https://p5js.org/reference/p5/lerp/
https://p5js.org/reference/p5/sin/
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
*/

//Init. Global Variables
let moveX = 0;			// x position for animation
let moveY = 0;			// y position for animation
let moveType = 0; 	//bool used to switch between linear & sine animation
let play = 1; 			//init play bool to true
let lerpAmnt = 0.5; //linear interpolation amount [range is from 0.0 to 1.0]

function setup() 
{
	createCanvas(700, 700);
	strokeWeight(2);
	fill(0, 0, 0, 0); //set 0% fill opacity [alpha = 0]
}

function draw() 
{
	background(200);	//clear canvas
	circlePos();			//draw moving circle
	keyUpdate();			//check if keys are down
	cursorLines();		//draw mouse position cursor
	lerpLines(lerpAmnt);	//draw interpolated cursor
	drawText();				//draw text
	
	if (play) //if play = 1
	{
		moveUpdate(moveType); //only update movement if play is true
	}
}

function circlePos()
{
	stroke(0);
	fill(0, 0, 0, 0);
	circle(moveX, moveY, 15); //draw circle at move XY position
}

function cursorLines() //draws mouse position cursor
{
	stroke(0, 0, 255, 127);
	fill(0, 0, 0, 0);
	//draw cursor at mouse position
	line(0, mouseY, width, mouseY);	
	line(mouseX, 0, mouseX, height);
	circle(mouseX, mouseY, 30);		
}

function lerpLines(amount) //draws lerp'ed cursor, accepts lerp amount
{
	//Interpolate between Mouse and Move XY values
	let xPos = lerp(moveX, mouseX, amount);
	let yPos = lerp(moveY, mouseY, amount);
	
	stroke(255, 0, 0, 127);
	fill(0, 0, 0, 0);
	
	//draw cursor at new Interpolated position
	line(0, yPos, width, yPos);	
	line(xPos, 0, xPos, height);
	circle(xPos, yPos, 30);
}

function moveUpdate(type) //update move XY position, accepts movement type boolean
{
	moveX++; //increment move X value by 1
	
	if (type == 0) //linear movement
	{
		moveY++; //increment move Y value by 1
	}
	else if (type == 1) //sinusoidal(sine) movement
	{
		//get moveY value from equation:
		//moveY = amplitude * sin(moveX * frequency) + offsetY
		moveY = 100 * sin(moveX * 0.1) + (width/2);
		//for every moveX value, we get a corresponding moveY value
	}
	//reset Move XY values if out of range
	if (moveX > width)
	{
		moveX = 0;
	}
	if (moveY > height)
	{
		moveY = 0;
	}
}

function keyUpdate() //check keyIsDown for left & right arrow, update lerpAmnt
{
	if (keyIsDown(RIGHT_ARROW) === true) 
	{
    lerpAmnt += 0.01;
	}
	
	if (keyIsDown(LEFT_ARROW) === true) 
	{
    lerpAmnt -= 0.01;
	}
	
	if (lerpAmnt <= 0)
	{
		lerpAmnt = 0.0;
	}
	
	if (lerpAmnt > 1.0)
	{
		lerpAmnt = 1.0
	}
}

function drawText() //displays text
{
	stroke(0, 0, 0, 0);
	fill(0);
	textSize(20);
	text("Lerp Amount = " + round(lerpAmnt, 2), 30, 50); //rounding to 2 decimal places
	
	if (moveType)
	{
		text("move type: sine", 30, 650);
	}
	else
	{
		text("move type: linear", 30, 650);
	}
	
	text("press 1 to switch Move type", width - 400, 600);
	text("L & R Arrows adjust Lerp Amount", width - 400, 640);
	text("press SPACE to pause", width - 400, 680);
}

function keyPressed()
{
	if (key == "1")
	{
		moveType = !moveType; //switch moveType boolean
		moveX = 0;						//reset move XY position
		moveY = 0;
	}
	else if (keyCode == 32) //SPACE Key == 32
	{
		play = !play;					//switch play boolean
	}
}