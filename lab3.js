let show=document.getElementById("show");
let btnshow=document.getElementById("btnshow");
let btnAddOne=document.getElementById("btnAddOne");
let btnAddTwo=document.getElementById("btnAddTwo");
let btnAddThree=document.getElementById("btnAddThree");
let btnReset=document.getElementById("btnReset");
let cartQuantity = 0;


function funcshow (){
show.textContent=cartQuantity;
}
btnshow.addEventListener('click' , funcshow);

function funcAddOne (){
cartQuantity=cartQuantity+1;
}
btnAddOne.addEventListener('click' , funcAddOne);


function funcAddTwo (){
cartQuantity=cartQuantity+2;
}
btnAddTwo.addEventListener('click' ,funcAddTwo );


function funcAddThree (){
cartQuantity=cartQuantity+3;
}
btnAddThree.addEventListener('click' ,funcAddThree);
function funcReset (){
cartQuantity=0;
}
btnReset.addEventListener('click' ,funcReset );
