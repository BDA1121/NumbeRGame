var num = [];
var f;
var g,h,j,k,l;
var w = new sp();
var boom = document.querySelector("#boom");
var fade = document.querySelectorAll(".fade");
var hs = document.querySelectorAll(".hs");
hs[0].textContent = localStorage.hs1;
hs[1].textContent = localStorage.hs2;
hs[2].textContent = localStorage.hs3;
hs[3].textContent = localStorage.hs4;
hs[4].textContent = localStorage.hs5;	
var tr = true;
boom.addEventListener("click", function(){
		
    for(var i = 0;i<5;i++)
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
var squares = document.querySelectorAll(".h");
var square = document.querySelector(".clicks");
g = localStorage.hs1;
h = localStorage.hs2;
j= localStorage.hs3;
k=localStorage.hs4;
l=localStorage.hs5;


newg.addEventListener("click", function(){
	
     w.reset();
     for (var i = 0; i<20 ; i++){
	squares[i].style.opacity = 0;
};
     square.textContent = "click to start";
     square.style.opacity = 1;
     

     square.addEventListener("click", function(){
     this.style.opacity = 0;
     this.style.padding = 0;
     this.textContent = null;
   
     w.start();
     num = shuffle(num);

for (var i = 0; i<20 ; i++){
	squares[i].textContent = num[i];
	squares[i].style.opacity = 1;
};
var b = 21;
var a = 1;
for (var i = 0; i<20 ; i++){
	squares[i].addEventListener("click", function(){
		 
		if(Number(this.textContent) === a){
			this.style.color = "green";
			this.style.backgroundColor = "black";
			if(b<41){
			this.textContent = b;
			a++;
			b++;}
			else if(a<40){
			this.style.color = "black";
			a++;
			}
			else {
				this.style.color = "black";
				str.textContent = "Game Over"; 
				w.stop()
			};
		};
	});};


});	
});


square.addEventListener("click", function(){
     this.style.opacity = 0;
     this.style.padding = 0;
     this.textContent = null;
   
     w.start();
     




for (var i = 0; i<20 ; i++){
	squares[i].textContent = num[i];
	squares[i].style.opacity = 1;
};
var b = 21;
var a = 1;
for (var i = 0; i<20 ; i++){
	squares[i].addEventListener("click", function(){
		 
		if(Number(this.textContent) === a){
			this.style.color = "green";
			this.style.backgroundColor = "black";
			if(b<41){
			this.textContent = b;
			a++;
			b++;}
			else if(a<40){
			this.style.color = "black";
			a++;
			}
			else {
				this.style.color = "black";
				str.textContent = "Game Over"; 
				w.stop()
			};
		};
	});};


});	

function shuffle(array) {
    var a = array.length;
    var t, i;


    while (a > 0) {

        i = Math.floor(Math.random() * a);
        a--;

        t = array[a];
        array[a] = array[i];
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
 	this.isOn = true;}
 };
 this.stop = function(){
 	if (this.isOn){
 		clearInterval(i);
 		i = null;
 		this.isOn = false;
 	    f = tnew(t);
 	    if (f < g) {
 	    	localStorage.hs2 = g;
 	    	localStorage.hs1 = f;
 	    	localStorage.hs3 = h;
 	    	localStorage.hs4 = j;
 	    	localStorage.hs5 = k;
 	    }
 	    else if (f<h) {
 	    	localStorage.hs2 = f;
 	    	localStorage.hs3 = h;
 	    	localStorage.hs4 = j;
 	    	localStorage.hs5 = k;

 	    }
 	    else if (f< j){
 	    	localStorage.hs3 = f;
 	    	localStorage.hs4 = j;
 	    	localStorage.hs5 = k;

 	    }
 	    else if (f< k){
 	    	localStorage.hs4 = f;
 	    	localStorage.hs5 = k;
 	    }
 	    else if (f< l) {
 	    	localStorage.hs5 = f;
 	    }s
 	}
 };
 this.reset = function(){
 	clearInterval(i);
 		i = null;
 		this.isOn = false;
 	t = 0;
    s.textContent = tnew(t);
 };}
/*function gen(n){
	var arr = [];
	arr.push(Math.floor(Math.random()*20));
	var i= 1;
	var b= 0 ;
	while( i < n){
		var a = Math.floor(Math.random()*20);
        for(var c = i-1;c>=0;c--){
		if(a === arr[c]){
			 b += 1;}
	    else{
	    	b += 0;
	    }
		
	}
	   if(b === 0){
	   	arr.push(a);
	   	i++;
	   }
	   else {
	   	i=i;
	   }
	}
	return arr;
}*/
console.log(num);