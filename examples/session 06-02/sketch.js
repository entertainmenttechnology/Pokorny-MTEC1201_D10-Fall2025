/*
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
User-Defined Functions pt.II
 Creating user-defined function for drawing ice cream cones...
 Building off prior example with another function.
 Press mouse to toggle on/off.
 ___________________________________
 FUNCTIONS HAVE THREE PARTS:
 * The word "function"
 * Function name
 * (Optional) parameters
 ___________________________________
 function functionName (parameters){
 statements;
 }
 <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
 */

 let toggle = false; 

 function setup() 
 {
   createCanvas (500, 500);
   rectMode(CENTER); //x,y of rect will draw from center
   textAlign(CENTER);
 }
 
 function draw() 
 {
   background (150);
 
   //call iceCream function with different arguments
   iceCream(50, 200, 65, 170, 230, 180, "MINT!"); //mint flavor
   iceCream(200, 150, 75, 250, 170, 210, "BERRY!"); //berry flavor
   iceCream(350, 300, 80, 250, 250, 210, "VANILLA!");  //vanilla flavor
 
   //call up the rectDisplay function with different arguments
   if (toggle) 
   { //press mouse to toggle on/off
     rectRayDisplay(25, 450, 50, "W");
     rectRayDisplay(width/2, 450, 50, "O");
     rectRayDisplay(width-25, 450, 50, "W");
   }
   else
   {
     fill(0);
     text("click mouse", width/4, height - height/8);
   }
 }
 
 
 function iceCream(x, y, diameter, r, g, b, flavor) 
 {  
   fill(170, 120, 35); //brown cone color 
   triangle(x, y, x + 50, y, x + 25, y + 100);
   fill (r, g, b); //customized ice cream color
   ellipse(x + 25, y, diameter, diameter);
   textAlign(CENTER);
   textSize(22);
   text(flavor, x + 25, y - 50);
 }
 
 function rectRayDisplay(x, y, size, letter) 
 {
   fill(245, 245, 60);
   rect(x, y, size, size);
   
   for (let i = 0; i < size; i += 10) 
   { //ray
     line(x, y, mouseX + i, mouseY + i);
   }
   
   fill(0);
   text(letter, x, y);
 }
 
 function mousePressed() 
 {
   toggle = !toggle;
 }