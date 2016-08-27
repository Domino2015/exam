
var slideshow= document.getElementById('slideshow');
var list = document.getElementById('list');
var buttons = document.getElementById("buttons").getElementsByTagName('span');
var prev =document.getElementById('prev');
var next =document.getElementById('next');



document.getElementById('next').addEventListener('click', function next(){
    var left =parseInt(list.style.left);
    if(parseInt(list.style.left)==-64){
        left=-16;
    }
     list.style.left =left-16+"rem";
}, false);


document.getElementById('prev').addEventListener('click', function prev(){
    var left =parseInt(list.style.left);
    if(parseInt(list.style.left)==0){
        left=-48;
    }
     list.style.left =left+16+"rem";
}, false);

