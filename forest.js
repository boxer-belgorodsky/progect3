var fox = document.querySelector(".footer-slide");

var crest = document.querySelector("#crest");
var spanCrest = document.querySelector("#crest span");

var menu = document.querySelector(".header-menu");

var lookSlide = document.querySelectorAll(".look-slide");
var lookSlideTwo = document.querySelectorAll(".look-slide-two");

crest.onclick = function (){

crest.classList.toggle('active-crest');

spanCrest.classList.toggle('span-crest');

menu.classList.toggle('active')
}
var arrow1 = document.querySelector(".one button:last-child em");

var sliders = document.querySelectorAll('.sliders');
var span = document.querySelectorAll('.one span');

var arrow2 = document.querySelector('.one button:first-child em ');

arrow2.onmouseover = function (){
console.log(event.target);
   for (var i = 0 ; i < sliders.length;i++){
    if(sliders[i].className == 'sliders active-slide'){
      lookSlide[i].style.left = "20px";

      console.log(i);

    }
  }

}

arrow2.onmouseout = function (){
console.log(event.target);
   for (var i = 0 ; i < sliders.length;i++){
    if(sliders[i].className == 'sliders active-slide'){
      lookSlide[i].style.left = "-1000px";

      console.log(i);

    }
  }

}
arrow1.onmouseover = function (){
console.log(event.target);
   for (var i = 0 ; i < sliders.length;i++){

    if(sliders[i].className == 'sliders active-slide'){
      lookSlideTwo[i].style.right = "20px"
      console.log(i);

    }
  }

}
arrow1.onmouseout = function (){
console.log(event.target);
   for (var i = 0 ; i < sliders.length;i++){
    if(sliders[i].className == 'sliders active-slide'){
      lookSlideTwo[i].style.right = "-1000px"

    }
  }

}

arrow1.onclick = function (){

for (var i = 0 ; i < sliders.length;i++){
   lookSlideTwo[i].style.right = "-1000px"
    if(sliders[i].className == 'sliders active-slide'){
    if(i != 2){
        span[i].classList.remove('active-span');
      span[i].nextElementSibling.classList.add('active-span');
        sliders[i].classList.remove('active-slide');
      sliders[i].nextElementSibling.classList.add('active-slide');
    }
    if(i == 2){
      span[i].classList.remove('active-span');
      span[0].classList.add('active-span');
      sliders[i].classList.remove('active-slide');
      sliders[0].classList.add('active-slide');
    }

      break;


    }
  }

}


arrow2.onclick = function (){

for (var i = 0 ; i < sliders.length;i++){
      lookSlide[i].style.left = "-1000px"
      if(sliders[i].className == 'sliders active-slide'){
     if(i != 0){
      span[i].classList.remove('active-span');
      span[i].previousElementSibling.classList.add('active-span');
       sliders[i].classList.remove('active-slide');
      sliders[i].previousElementSibling.classList.add('active-slide');
     }
     if(i == 0){
      span[i].classList.remove('active-span');
     span[2].classList.add('active-span');
      sliders[i].classList.remove('active-slide');
      sliders[2].classList.add('active-slide');
     }

      break;
      }

  }

}

var show_img = document.querySelectorAll(".img");

var show_p = document.querySelectorAll(".forests")

setInterval(function (){

if(pageYOffset +  document.documentElement.clientHeight > document.documentElement.clientHeight + 130){
  show_img[0].classList.add("show");
  show_img[0].classList.add("fadeIn");
  show_p[0].classList.add("show");
  show_p[0].classList.add("fadeIn");
}
else{
   show_img[0].classList.remove("show");
   show_img[0].classList.remove("fadeIn");
    show_p[0].classList.remove("show");
   show_p[0].classList.remove("fadeIn");
}
if(pageYOffset +  document.documentElement.clientHeight > document.documentElement.clientHeight + 650){
show_img[1].classList.add('show-right');
show_p[1].classList.add('show-left')
}
else{
  show_img[1].classList.remove('show-right');
show_p[1].classList.remove('show-left')
}
if(pageYOffset +  document.documentElement.clientHeight > document.documentElement.clientHeight + 1150){
show_img[2].classList.add('show-top');
show_p[2].classList.add('show-top')
}
else{
  show_img[2].classList.remove('show-top');
show_p[2].classList.remove('show-top')
}


},20);
var btn = document.querySelectorAll(".btn button");

var forest = document.querySelectorAll(".forest-child");

function BTN(i , j){

btn[i].id = "btn-show";
btn[i].style.transform ="translateX(" + j +"%) scale(2) translateY(100px) rotateY(360deg)"

btn[i].parentElement.style.height = "400px";

setTimeout(function(){
  btn[i].style.transform ="translateY(-5000px)"
},1000);

if(i == 0){
  fox.style.background = "url(img/fox.jpg)";
fox.style.backgroundPosition = "0 -200px";
}
if(i == 1){
   fox.style.background = "url(img/flowers.jpg)";
   fox.style.backgroundPosition = "0 -350px";
}
if(i == 2){

    fox.style.background = "url(img/vorskle.jpg) no-repeat";
     fox.style.backgroundSize = "cover";
   fox.style.backgroundPosition = "0 -400px";
}

forest[i].classList.add('display-show');

if(i == 2){
  forest[0].classList.remove('display-show');
  forest[1].classList.remove('display-show');
}
if (i == 0){
  forest[2].classList.remove('display-show');
  forest[1].classList.remove('display-show');
}
if(i == 1){
  forest[0].classList.remove('display-show');
  forest[2].classList.remove('display-show');
}
if(i == 0){
  btn[2].style.transform = '';
   btn[1].style.transform = '';
}
if(i == 2){
  btn[0].style.transform = '';
   btn[1].style.transform = '';
}
if(i == 1){
   btn[2].style.transform = '';
   btn[0].style.transform = '';
}

scrollTo(0 ,2225);

}
btn[0].addEventListener('click' ,function(){
  BTN(0 , 100);
});

btn[1].addEventListener('click' ,function(){
  BTN(1 , 0);
});

btn[2].addEventListener('click' ,function(){
  BTN(2 , -100);
});


var display = document.querySelectorAll(".close");

display[0].addEventListener('click' ,function(){
  DISPLAY(0);
});

display[1].addEventListener('click' ,function(){
  DISPLAY(1);
});

display[2].addEventListener('click' ,function(){
  DISPLAY(2 );
});




function DISPLAY(i){
btn[2].style.transform = '';
btn[1].style.transform = '';
btn[0].style.transform = '';
forest[i].classList.remove("display-show");
if(forest[0].className != 'forest-child display-show' && forest[1].className != 'forest-child display-show' && forest[2].className != 'forest-child display-show'){
fox.style.background = "transparent";
btn[0].parentElement.style.height = "200px";
  }
}

var up = document.getElementById("up");

setInterval(function (){
  if(pageYOffset > 650){
    up.style.marginLeft = "15px";
  }
  else{
    up.style.marginLeft = "-150px";
  }
},20);

up.onclick = function (){


var timer = setInterval(function(){
  if(pageYOffset > 20){
    scrollBy(0 , -100);
  }
  else{
    clearInterval(timer);
  }

},5);

};
