var x=0
var y=0
 var api=window.webkitSpeechRecognition
 var reconocer=new api
 var rec
 var cir
 var canvas
 var ratio
 function preload(){

 } 

 function setup() {
   canvas=createCanvas(500,500)
 }

 function draw(){
if(rec==10){
  fill("blue")
  stroke("red")
  rect(x,y, 50,50)
  rec=0
}
else if(cir==5){
fill ("green")
stroke("purple")
ratio=Math.floor(Math.random()*200)
circle(x,y, ratio)
cir=2
}
 }

 function voz(){
  reconocer.start()
  

 }
 
 reconocer.onresult=function (resultados){
console.log (resultados)
var save=resultados.results[0][0].transcript
console.log (save)
if(save=="círculo"){
cir=5
document.getElementById("draw").innerHTML="Dibujando crículo"
x=Math.floor(Math.random()*500)
y=Math.floor(Math.random()*500)
}
else if(save=="rectángulo"){
rec=10
document.getElementById("draw").innerHTML="Dibujando rectángulo"
x=Math.floor(Math.random()*500)
y=Math.floor(Math.random()*500)
console.log(x)
console.log(y)
}
 }
