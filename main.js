
const div1 = document.getElementById("myDIV");

function myFunction() {
  div1.style.animation = "mymove 4s 2";
}

div1.addEventListener("animationstart", myStartFunction);
div1.addEventListener("animationiteration", myRepeatFunction);
div1.addEventListener("animationend", myEndFunction);

function myStartFunction() {
  this.innerHTML = "Primera animaciòn";
  this.style.backgroundColor = "yellow";
  this.style.color= "black";
}
function myRepeatFunction() {
  this.innerHTML = "Segunda animaciòn";
  this.style.backgroundColor = "orange";
  this.style.color= "black";
}
function myEndFunction() {
  this.innerHTML = "Tercera animaciòn";
  this.style.backgroundColor = "green";
}
