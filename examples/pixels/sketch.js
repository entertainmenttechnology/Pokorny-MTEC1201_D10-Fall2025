/*
|||||||||||||||||
|| Pixel Array ||
|||||||||||||||||
- Drawing directly to the pixels of our canvas
- Using the pixels[] array
- Using the loadPixels() and updatePixels() functions
- manipulating the pixels[] array directly

 modified from the original code...
  - The Coding Train / Daniel Shiffman
  - The Pixel Array
  - https://www.youtube.com/watch?v=nMUMZ5YRxHI

REFERENCE:
https://p5js.org/reference/p5/pixels/
https://p5js.org/reference/p5/updatePixels/
https://p5js.org/reference/p5/loadPixels/
*/

let mode = 1; // 0 = random greyscale, 1 = color based on pixel canvas position
let pixelSize = 16; // size of pixel per square, increase for more pixelated effect & better performance
let bw = 0; //black and white value
let r, g, b, a; //red, green, blue, alpha values

function setup() 
{
  createCanvas(640, 640); //create canvas
}

function draw() 
{
  background(0);  //clear canvas

  if (pixelSize == 1) // if pixel size is equal to 1 pixel, which is the default,...
  {
    loadPixels(); // load pixels into the pixels[] array
    for (let y = 0; y < height; y++) //for each row...
    {
      for (let x = 0; x < width; x++) //for each column...
      {
        let index = (x + y * width) * 4;  // calculate current the pixel position in array
        //we are multiplying by 4 because each pixel has 4 values (RGBA)
        //each pixel is 4 bytes (1 byte each for R, G, B, A)
        //each pixel takes up four elements in the pixels[] array
        
        if (!mode) //click mouse to change mode
        {
          bw = random(255);  // generate a random color avlue value
          //set pixels to random greyscale value
          pixels[index + 0] = bw;     //RED
          pixels[index + 1] = bw;     //GREEN
          pixels[index + 2] = bw;     //BLUE
          pixels[index + 3] = 255;    //ALPHA
        } 
        else 
        {
          //set pixels to color values based on their position
          //x and y are the pixel position
          //index is the pixel position in the array
          pixels[index + 0] = y / 4;  //RED
          pixels[index + 1] = y / 2;  //GREEN
          pixels[index + 2] = x / 2;  //BLUE
          pixels[index + 3] = 255;    //ALPHA
        }
      }
    }
    updatePixels(); // update the pixels[] array and display it on the canvas
  } 
  else //if pixel size is greater than 1 pixel...
  {
    // Use square() to fill larger pixel areas instead of using pixels[] array
    // This is much faster than using the pixels[] array, but with less resolution
    for (let y = 0; y < height; y += pixelSize) //for every row of pixelSize length...
    {
      for (let x = 0; x < width; x += pixelSize) //for every column of pixelSize length...
      {
        //set pixels to color values based on their position
        r = y / 4;  //RED
        g = y / 2;  //GREEN
        b = x / 2;  //BLUE
        a = 255;    //ALPHA
        
        if (!mode) 
        {
          //generate a random greyscale value and set the fill color
          bw = random(127, 255);
          fill(bw);
        } 
        else
        {
          //set the fill color based on the pixel position
          fill(r, g, b, a);
        }

        noStroke(); //comment this line out to remove border around pixel squares
        //uncomment either square() or circle() function below...
        square(x, y, pixelSize);  // draw a square at the pixel position
        //circle(x, y, pixelSize);  // draw a circle at the pixel position
      }
    }
  }
  
  //draw a circle at the mouse position, on top of our pixelated canvas
  fill(255);
  stroke(0);
  strokeWeight(2);
  circle(mouseX, mouseY, mouseY * 0.8); //using mouseY * 0.8 as scaled diameter for simple distance effect
}

function mousePressed()
{
	mode = !mode; //switch between modes when mouse is pressed, 1 or 0
}