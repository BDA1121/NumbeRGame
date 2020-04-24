var num = [];
var f;
var time = document.querySelector(".time");
var g,h,j,k,l;
var w = new sp();
var hi = document.querySelector(".hi")
var hs = document.querySelectorAll(".hs");
hs[7].textContent = localStorage.hs11;
hs[8].textContent = localStorage.hs21;
hs[9].textContent = localStorage.hs31;
hs[10].textContent = localStorage.hs41;
hs[11].textContent = localStorage.hs51;
hs[1].textContent = localStorage.hs1;
hs[2].textContent = localStorage.hs2;
hs[3].textContent = localStorage.hs3;
hs[4].textContent = localStorage.hs4;
hs[5].textContent = localStorage.hs5;
var lvl = document.querySelector(".level");
var boom = document.querySelector("#boom");
var fade = document.querySelectorAll(".fade");
var canvas = document.querySelector(".squares");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
hi.style.display = "none";
b1.addEventListener("click", function(){
	canvas.style.display = "";
	hi.style.display = "none";
      lvl.textContent = "The Easy Level";
      square.classList.add("clicks");
	square.textContent = "click to start";
	canvas.style.height = "220px";
     w.reset();
     num = [];
     for (var i = 0; i<20 ; i++){
	num.push(i+1);
};
num = shuffle(num);
     for (var i = 0; i<25 ; i++){
	squares[i].style.opacity = 0;
	squares[i].textContent = null;
	Sound.stop();
};
      game();
});
	
var tr = true;
boom.addEventListener("click", function(){
    for(var i = 0;i<12;i++)
       hs[i].classList.toggle("hs");
  });
var s = document.querySelector(".s");

var mss = document.querySelector(".ms")
var str = document.querySelector("strong");
var newg = document.querySelector(".button");
for (var i = 0; i<20 ; i++){
	num.push(i+1);
};
num = shuffle(num);
var Sound = new sound("music.mp3");

var squares = document.querySelectorAll(".h");
var square = document.querySelector(".clicks");
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
        this.sound.currentTime = 0;
    }    
}

newg.addEventListener("click", function(){
	hi.style.display = "none";
	square.classList.add("clicks");
	square.textContent = "click to start";
	canvas.style.height = "220px";
     w.reset();
     num = [];
     for (var i = 0; i<20 ; i++){
	num.push(i+1);
};
num = shuffle(num);
     for (var i = 0; i<25 ; i++){
	squares[i].style.opacity = 0;
	squares[i].textContent = null;
	Sound.stop();
};

game() 
});

function tc1(){
	square.classList.add("clickss");
	square.classList.remove("clicks");
	square.textContent = 1;
	
};
function tc2(){
	square.textContent = 2;
};
function tc3(){
	square.textContent = 3;
}
game();
function game(){
square.addEventListener("click",function(){
	tc1();
	setTimeout(tc2,1000);
	setTimeout(tc3,2000)
	setTimeout(startgame,3000);
     
});	};
var b = 21;
var a = 1;
var e = 26;
var d = 1;
function startgame(){
	b = 21;
        a = 1;
	e = 0;
	d = 0;
	for(var i = 0;i<20;i++){
		squares[i].style.color = "red";
	}
	var bright = 20;
	for(var i = 20;i<25;i++){
		squares[i].textContent = null;
		squares[i].style.backgroundColor = null;
	}
	square.textContent = null;
	square.classList.add("clicks");
	square.classList.remove("clickss");
    w.start();
   Sound.play();
  for (var i = 0; i<20 ; i++){
	squares[i].textContent = num[i];
	squares[i].style.opacity = 1;
	  var cri = Number(squares[i].textContent)*(2); 
	  var dri = bright + cri;
	 squares[i].style.filter = "brightness(" + dri + "%)";
};
for (var i = 0; i<20 ; i++){
	squares[i].addEventListener("click", function(){	 
		if(Number(this.textContent) === a){
			this.style.color = "red";
			this.style.backgroundColor = "maya blue";
			if(b<41){
			this.textContent = b;
		         var cris = b*(2); 
	                 var dris = bright + cris;
	                this.style.filter = "brightness(" + dris + "%)";	
			a++;
			b++;}
			else if(a<40){
			this.style.opacity = 0;
			a++;
			}
			else {
				this.style.opacity = 0;
				str.textContent = "Game Over"; 
				w.stop();
				highsc();
				Sound.stop();
			};
		};
	});};};

b2.addEventListener("click", function(){
	hi.style.display = "none";
      lvl.textContent = "The Hard Level";
     square.classList.add("clicks");
	square.textContent = "click to start";
     	
     w.reset();
     for (var i = 0; i<25 ; i++){
	squares[i].style.opacity = 0;
	squares[i].textContent = null;
	Sound.stop();

};
      canvas.style.height ="275px";
      num = [];
      for (var i = 0; i<25 ; i++){
	num.push(i+1);};
	shuffle(num);
console.log(num);
	square.addEventListener("click",function(){
	tc1();
	setTimeout(tc2,1000);
	setTimeout(tc3,2000)
	setTimeout(stargame,3000);   
});

});
function shuffle(array) {
    var q = array.length;
    var t, i;
    while (q > 0) {
        i = Math.floor(Math.random() * q);
        q--;
        t = array[q];
        array[q] = array[i];
        array[i] = t;
    }
    return array;
}

function sp(){
	var t = 0;
	var i , up;

function upd(){
	t += d();
	var newt = tnew(t);
  s.textContent = newt;
}
 function d(){
 	var now = Date.now();
 	var tp = now - up;
 	up = now
 	return tp;
 }
 function tnew(timeInMilliseconds){
 	var t = new Date(timeInMilliseconds);
 	var min = t.getMinutes().toString();
 	var sec = t.getSeconds().toString();
 	var ms = t.getMilliseconds().toString();
    if(min.length<2){
       min = "0" + min;
    }
    if(sec.length<2){
    	sec = "0" + sec ;
    }
    if(ms.length<2){
    	ms = '00' + ms;
    }
    if(ms.length=2&&ms.length<3){
    	ms = '0' + ms;
    }
    return     sec + ':' + ms;
 }
 this.isOn = false;
 this.start = function(){
 	if(!this.isOn){
 	i = setInterval(upd, 10);
 	up = Date.now();
 	newg.textContent = "New Game";
 	this.isOn = true;}
 };
 this.stop = function(){
 	if (this.isOn){
 		clearInterval(i);
 		i = null;
 		newg.textContent = "Play Again?";
 		this.isOn = false;
 	    f = tnew(t);
 	    }
 };
 this.reset = function(){
 	clearInterval(i);
 		i = null;
 		this.isOn = false;
 	t = 0;
    s.textContent = tnew(t);
 };}

console.log(num);
function stargame(){
         a = 0;
	 b = 0;
	 d = 1;
	e =26;
	for(var i = 0;i<25;i++){
		squares[i].textContent = null;
		squares[i].style.backgroundColor = null;
		squares[i].style.color = "red";
	}
	square.textContent = null;
	square.classList.add("clicks");
	square.classList.remove("clickss");
    w.start();
   Sound.play();
	var brightss = 25;
  for (var i = 0; i<25; i++){
	squares[i].textContent = num[i];
	squares[i].style.backgroundColor = "maya blue";
	squares[i].style.opacity = 1;
	  var cric = Number(squares[i].textContent)*(1.5);
	  var dric = cric + brightss; 
	  squares[i].style.filter = "brightness(" + dric + "%)";
};
for (var i = 0; i<25 ; i++){
	squares[i].addEventListener("click", function(){
		if(Number(this.textContent) === d){
			if(e<51){
			this.textContent = e;
			this.style.backgroundColor =  "maya blue";
			this.style.color = "red";
			var crics = e*(1.5);
	                 var drics = crics + brightss; 
	                 this.style.filter = "brightness(" + drics + "%)";
			d++;
			e++;}
			else if(d<50){
			this.style.opacity = 0;
			d++;
			}
			else {
				this.style.opacity = 0;
				str.textContent = "Game Over"; 
				w.stop();
				Sound.stop();
				highsc1();
			};
		};
	});};};
	function highsc1(){
g = localStorage.hs11;
h = localStorage.hs21;
j= localStorage.hs31;
k=localStorage.hs41;
l=localStorage.hs51;
     if(localStorage.hs11 === undefined){
     	localStorage.hs11 = f;
     }
	else if (f < g) {
 	    	localStorage.hs11 = f;
 	    	localStorage.hs21 = g;
 	    	localStorage.hs31 = h;
 	    	localStorage.hs41 = j;
 	    	localStorage.hs51 = k;
 	    }
 	    else if (localStorage.hs21 === undefined) {
 	    	localStorage.hs21 = f;
 	    }
 	    else if (f<h) {
 	    	localStorage.hs21 = f;
 	    	localStorage.hs31 = h;
 	    	localStorage.hs41 = j;
 	    	localStorage.hs51 = k;
 	    }
 	    else if (localStorage.hs31 === undefined) {
 	    	localStorage.hs31 = f;
 	    }
 	    else if (f< j){
 	    	localStorage.hs31 = f;
 	    	localStorage.hs41 = j;
 	    	localStorage.hs51 = k;
 	    }
 	    else if (localStorage.hs41 === undefined) {
 	    	localStorage.hs41 = f;
 	    }
 	    else if (f< k){
 	    	localStorage.hs41 = f;
 	    	localStorage.hs51= k;
 	    }
 	    else if (localStorage.hs51 === undefined) {
 	    	localStorage.hs51 = f;
 	    }
 	    else if (f< l) {
 	    	localStorage.hs51 = f;
 	    }
		hs[7].textContent = localStorage.hs11;
hs[8].textContent = localStorage.hs21;
hs[9].textContent = localStorage.hs31;
hs[10].textContent = localStorage.hs41;
hs[11].textContent = localStorage.hs51;
}

function highsc(){
	g = localStorage.hs1;
h = localStorage.hs2;
j= localStorage.hs3;
k=localStorage.hs4;
l=localStorage.hs5;
  if (localStorage.hs1 === undefined) {
 	    	localStorage.hs1 = f;
 	    }
	else if (f < g) {
 	    	localStorage.hs2 = g;
 	    	localStorage.hs1 = f;
 	    	localStorage.hs3 = h;
 	    	localStorage.hs4 = j;
 	    	localStorage.hs5 = k;
 	    }
 	    else if (localStorage.hs2 === undefined) {
 	    	localStorage.hs2 = f;
 	    }

 	    else if (f<h) {
 	    	localStorage.hs2 = f;
 	    	localStorage.hs3 = h;
 	    	localStorage.hs4 = j;
 	    	localStorage.hs5 = k;
 	    }
 	    else if (localStorage.hs3 === undefined) {
 	    	localStorage.hs3 = f;
 	    }

 	    else if (f< j){
 	    	localStorage.hs3 = f;
 	    	localStorage.hs4 = j;
 	    	localStorage.hs5 = k;

 	    }
 	     else if (localStorage.hs4 === undefined) {
 	    	localStorage.hs4 = f;
 	    }
 	    else if (f< k){
 	    	localStorage.hs4 = f;
 	    	localStorage.hs5 = k;
 	    }
 	     else if (localStorage.hs5 === undefined) {
 	    	localStorage.hs5 = f;
 	    }
 	    else if (f< l) {
 	    	localStorage.hs5 = f;
 	    }
	hs[1].textContent = localStorage.hs1;
hs[2].textContent = localStorage.hs2;
hs[3].textContent = localStorage.hs3;
hs[4].textContent = localStorage.hs4;
hs[5].textContent = localStorage.hs5;
}
b3.addEventListener("click", function(){
      lvl.textContent = "The Fun Level";
      //square.classList.add("clicks");
	hi.style.display = "";
	//square.textContent = "click to start";
	canvas.style.display = "none";
	time.style.background = 'linear-gradient(90deg, #f0027f, #75489f)';
	time.style.color = 'black';
     w.reset();
     num = [];
     for (var i = 0; i<20 ; i++){
	num.push(i+1);
};
	num = shuffle(num);
	var u = 1;
var o = 21 
var hs = document.querySelectorAll(".hse");  
var h = document.querySelectorAll(".he");  

for (var i = 0; i < 20; i++) {
  h[i].textContent = num[i];
}

hs[0].textContent = h[4].textContent;
hs[6].textContent = h[14].textContent;
  //startgame();   

    moves(0);
  moves(1);
moves(2);
moves(3);
    function moves(b){
    var a = [0,0,0,0,0,-162,-189,-54];
    for(var i = 0; i<3;i++){
      hs[i+b*3].style.left = a[i+5] + "px";
    };
    for(var i = 0; i<5;i++){
      h[i+b*5].style.left = a[i] + "px";
    };
     setInterval(game,30);
     function game() {
      if(b%2 === 0){
      for (var i = 0; i < 6; i++) {
        if (a[i] < 27*(5-i)) {
          a[i] += 1;
          if(i<5){ h[i+b*5].style.left = a[i] + "px" ;
        }
     else {
    hs[b*3].style.left = a[5] + "px";
          }   }
    else {
      a[i] = -27*(i+1);
      if(i === 0){
        h[i+b*5].textContent = hs[b*3].textContent;
      }
      else if(i === 5){
        hs[b*3].textContent = h[4 + b*5].textContent;
      }
      else {
      h[i+b*5].textContent = h[i+(b*5)-1].textContent;
        }
    }
      } } 
     else {
        for (var i = 0; i < 6; i++) {
        if (a[i] > -27*(i+1)) {
          a[i]-= 1;
          if (i<5) { h[i+b*5].style.left = a[i] + "px" ;}
          else{hs[b*3].style.left = a[5] + "px";}
    }
    else {
      a[i] =  27*(5-i);
      if(i === 5){
       hs[b*3].textContent = h[b*5].textContent;
      }
      else if(i === 4){
        h[4+b*5].textContent = hs[b*3].textContent;
      }
      else {
      h[i+b*5].textContent = h[i+(b*5)+1].textContent;
      }                                                                                                                                       }
      }  
     }
  startsgame();
}}

function startsgame(){
	w.start();
   Sound.play();
  for (var i = 0; i < 20; i++) {
    h[i].addEventListener("click", function(){
      if(Number(this.textContent) === u){
     if (o<41) {
      this.textContent = o;
      o++;
      u++;
}
    else if(u<40){
    this.style.color = "black";
	    this.style.opacity = 0;
    u++; 
    }
	      else{
	      str.textContent = "Game Over"; 
				w.stop();
				Sound.stop();
	      }
   } });
 };;}
});
