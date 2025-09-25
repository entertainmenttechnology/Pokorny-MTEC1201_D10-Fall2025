/*
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
 Demo 4: more of working with image assets.
 Switches between 2 images while using a 3rd variable as placeholder.
 
 Press '1' and '2' key to switch between images.
 <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
 */

//Create a p5.Image object to store image
let tuna;  //Creates a p5.Image object called tuna
let goldfish; //Creates a p5.Image object called goldfish
let fish; //Creates a p5.Image object called fish

function preload()
{
	//Assign image asset to p5.Image object using loadImage() 
  tuna = loadImage("images/tuna.png");
  goldfish = loadImage("images/goldfish.png");
}

function setup() 
{
  createCanvas (500, 500);
  background (255);
  imageMode(CENTER); //draws images from center point
  fish = tuna; //assign tuna image to fish
}  

function draw() 
{
  background(255);
	
	let imageWidth = 400;
	let imageHeight = 400;
	
  //display image with image() method
	if (fish === goldfish)
	{
  	image (fish, width/2, height/2, imageWidth/4, imageHeight/4); //reduce size if goldfish
	}
	else
	{
		image (fish, width/2, height/2, imageWidth, imageHeight);
	}
}

function keyPressed() 
{
  if (key === '1') 
	{
    fish = tuna;
  } 
	else if (key === '2') 
	{
    fish = goldfish;
  }
}