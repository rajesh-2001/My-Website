//
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0,0,1200,100);
grd.addColorStop(0,"purple");
grd.addColorStop(0.2,"blue");
grd.addColorStop(0.4,"green");
grd.addColorStop(0.6,"pink");
grd.addColorStop(0.8,"blueviolet");
grd.addColorStop(0.9,"red");
ctx.beginPath();
ctx.moveTo(0,0);
ctx.bezierCurveTo(220,110,400,170,1100,0);
ctx.lineWidth = 7;
ctx.strokeStyle = grd;
ctx.stroke();
ctx.font = "40px Arial";
ctx.lineWidth = 2;
ctx.strokeText("Welcome To Rajesh Ghosh's Website",170,50);
//learn more
function myFunction(){
    document.getElementById("demo").innerHTML = "<u>Age:</u> 21<br> <u>Study:</u> Dept. of Computer Science & Engineering(BSc)<br><u>Language</u>: Bangla & English<br><u>Hobbey</u>: Photography(I like to capture natural scennary), Gradening & Travelling";
}
function demo(){
    document.getElementById("demo").style.color="green";
    document.getElementById("demo").style.fontFamily="Time New Roman";

}
//Line
var c = document.getElementById("line");
var ctx =c.getContext("2d");
ctx.strokeStyle="red";
ctx.moveTo(10,10);
ctx.lineTo(10,70);
ctx.lineCap = "round";
ctx.lineWidth= 5;
ctx.stroke();
ctx.beginPath();
//line 2
var c = document.getElementById("line2");
var ctx =c.getContext("2d");
ctx.strokeStyle="red";
ctx.moveTo(10,10);
ctx.lineTo(10,90);
ctx.lineCap = "round";
ctx.lineWidth= 5;
ctx.stroke();
//line 3
var c = document.getElementById("line3");
var ctx =c.getContext("2d");
ctx.strokeStyle="red";
ctx.moveTo(10,15);
ctx.lineTo(10,128);
ctx.lineCap = "round";
ctx.lineWidth= 5;
ctx.stroke();

//onClick()
function myFunction1(){
    document.getElementById("Demo").innerHTML="Click the upper bold text to know more that";
}