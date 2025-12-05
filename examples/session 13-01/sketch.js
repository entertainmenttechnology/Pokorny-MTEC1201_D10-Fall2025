/*
||||||||||||||||||||||||||||||||||||||||||
||  VIDEO CAPTURE & PIXEL MANIPULATION  ||
||||||||||||||||||||||||||||||||||||||||||
- capture video from webcam
- access each pixel of video image for further manipulation
*/

let video;            // variable for video object
let pixelWidth = 16;  // size of pixel area to capture (measured in square pixels) 
//reduce pixelWidth to 1, and it will be original camera image

function setup() 
{
  createCanvas(640, 480);
  noStroke();
  rectMode(CENTER);
  video = createCapture(VIDEO); // begin capturing video
  video.size(width, height);    // set size of video
  video.hide();                 // hide video preview
}

function draw() 
{
  background(0);      // clear each frame
  video.loadPixels(); //  load video data into pixel buffer

  for (let y = 0; y < video.height; y+=pixelWidth)  //for every pixel column of canvas...
  {
    for (let x = 0; x < video.width; x+=pixelWidth)  //for every pixel row of canvas...
    {
      //calculate current pixel location
      let index = (video.width - x + 1 + (y * video.width)) * 4;  
      //every pixel takes up 4 array elements: red, green, blue, and alpha
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let a = video.pixels[index + 3];
      //set fill color to pixel color
      fill(r, g, b, a);
      
      if (mouseIsPressed)
      {
        //draw circle at pixel position 
        circle(x, y, pixelWidth/2);
      }
      else
      {
        //draw square at pixel position 
        square(x, y, pixelWidth);
      }
    }
  }
}