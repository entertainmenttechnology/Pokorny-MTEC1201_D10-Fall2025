/*
  "ROLLING HILLS"
  by Ian Pokorny
*/
function setup() 
{
  createCanvas(1000, 500);
}

function draw() 
{
	drawScene(0, width);
}

function peaks(level, scale, weight, r, g, b, alpha, mode, xPos)
{
	let x = xPos;
	let y = level * noise(x * scale); //generate y value for each nx

	strokeWeight(weight);
	stroke(r, g, b, alpha);
	
	if(mode == "line")
	{
		line(x, height, x, y);
	}
	else if (mode == "point")
	{
		point(x, y);
	}
}

function mousePressed()
{
	noiseSeed();
}

function drawScene(begin, end)
{
	background(240, 250, 255);
	for (let i = begin; i <= end; i++)
	{
		//wind
		peaks(40, 0.008, 2.5, 0, 20, 255, 10, "point", i); 
		peaks(70, 0.009, 2, 0, 20, 255, 10, "point", i);
		peaks(100, 0.01, 1.5, 0, 20, 255, 10, "point", i); 
		peaks(130, 0.02, 1, 0, 20, 255, 10, "point", i);
	
		//distant peaks
		peaks(200, 0.02, 1, 225, 225, 225, 255, "line", i); 
	
		//mountains
		peaks(225, 0.01, 1, 200, 200, 200, 255, "line", i); 
	
		//tree tops
		peaks(700, 0.05, 0.5, 0, 75, 45, 255, "line", i);
		peaks(700, 0.06, 0.5, 0, 75, 35, 255, "line", i);
		peaks(700, 0.07, 0.5, 30, 75, 25, 255, "line", i);
	}
}