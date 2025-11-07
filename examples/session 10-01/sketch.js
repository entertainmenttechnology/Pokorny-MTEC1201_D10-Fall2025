/*
Demo on arrays with fixed data.

We are creating an array of candy bar numbers (storing integer numbers) 
and an array of feelings (storing string values).
*/

// declare an array called candy
let candy = [];
// declare an array called feelings and assign string values to the array
let feelings = ["mad", "so happy", "excited", "delirious"];

let positionCandy = 0; //tracking position in candy array
let positionFeelings = 0; //tracking position in feelings array

function setup() 
{
	createCanvas(700, 700);
	fill(255, 255, 0);

	//initializing array elements individually
	candy[0] = 81; //the first array element equals 81
	candy[1] = 0; // the second array element equals 0
	candy[2] = 3;
	candy[3] = 252;
	candy[4] = 8;

	textSize(44);
	textAlign(CENTER, CENTER);
}

function draw() 
{
	background(64);
	text("I have " + candy[positionCandy] + " candy bars", width / 2, height / 2);
	text("and I am " + feelings[positionFeelings] + ".", width / 2, height / 2 + 50);

	// print (candy[0]);
	// print (candy[1]);
	// print (feelings[2]);
	// print("positionCandy: " + positionCandy);
	// print("positionFeelings: " + positionFeelings);
}

function mousePressed() 
{
	if (positionCandy === candy.length - 1) 
	{ //if last array position
		positionCandy = 0; //return to first array position
	} 
	else 
	{
		positionCandy++; //otherwise move forward a single position
	}
	positionFeelings = int(random(0, feelings.length)); //return a random number between 0 and array length
}