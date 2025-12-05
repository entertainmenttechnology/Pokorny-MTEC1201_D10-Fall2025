/*
||||||||||||||||||||||||||||||||||||||||||||||||
||  VIDEO CAPTURE & PIXEL MANIPULATION PT.II  ||
||||||||||||||||||||||||||||||||||||||||||||||||
- capture video from webcam
- access each pixel of video image for further manipulation
- we are drawing slightly different shapes at each pixel area based on incoming video image
*/

let video;            // video object variable
let pixelWidth = 16;  // size of pixel area to capture (measured in square pixels) 

//color value thresholds
let rThresh = 120;
let gThresh = 150;
let bThresh = 170;

function setup() 
{
  createCanvas(640, 480);
  fill(0);
  rectMode(CENTER);
  video = createCapture(VIDEO); // begin capturing video
  video.size(width, height);    // set size of video
  video.hide();                 // hide video preview
}

function draw() 
{
  background(0, 64);      // clear each frame, with slight alpha blend for video feedback effect
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
      
      if (b > bThresh)  //if this pixel's blue value is above threshold...
      {
        stroke(r, g, 255);  //set color to dynamic r, g, and static b
        square(x, y, pixelWidth / 2);  //draw square at pixel location with 1/2 pixel width size
      }
        
      if (g > gThresh)  //if this pixel's green value is above threshold...
      {
        stroke(r, 255, b);  //set color to dynamic r, b, and static g
        square(x, y, pixelWidth / 3);  //draw square at pixel location with 1/3 pixel width size
      }
        
      if (r > rThresh)  //if this pixel's red value is above threshold...
      {
        stroke(255, g, b);  //set color to dynamic g, b, and static r
        square(x, y, pixelWidth / 4);  //draw square at pixel location with 1/4 pixel width size
      }

      if (r > 220 && g > 220 && b > 220) // if this pixel's r, g, and b are all greater than 220...
      {
        stroke(255);
        fill(255);
        circle(x, y, pixelWidth / 2); //draw circle at pixel location with 1/2 pixel width size
      }
      else
      {
        fill(0);
        stroke(r, g, b, a);
        circle(x, y, pixelWidth / 8); //draw circle at pixel location with 1/8 pixel width size
      }
    }
  }
}