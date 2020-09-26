function preload(){
    
}
function setup(){
    canvas=createCanvas(649,480);
    canvas.position(150,150);
    video= createCapture(VIDEO);
    video.hide();
}
function draw(){
   image(video,0,0,649,480);
   stroke("red");
   strokeWeight(5);
   fill("magenta")
   triangle(100,200,150,150,200,200)
   stroke("red");
   strokeWeight(5);
   fill("blue")
   square(100,205,100,100)
   stroke("red");
   strokeWeight(5);
   fill("brown")
   rect(140,260,20,40)
   stroke("black");
   strokeWeight(1);
   fill("brown")
   rect(275,260,20,40)
  
};
 function take_snapshot(){
     save('student_name.png')
 }