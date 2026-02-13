function unlock(){
const pass=document.getElementById("passwordInput").value.trim();

if(pass==="16112025"){
document.getElementById("lockScreen").classList.add("hidden");
document.getElementById("loadingScreen").classList.remove("hidden");

setTimeout(()=>{
document.getElementById("loadingScreen").classList.add("hidden");
document.getElementById("mainSite").classList.remove("hidden");

let music=document.getElementById("bgMusic");
music.volume=0;
music.play();
let fade=setInterval(()=>{
if(music.volume<0.5) music.volume+=0.05;
else clearInterval(fade);
},300);

initPetals();

},2500);

}else{
document.getElementById("error").innerText="Wrong date wifey 😛";
}
}

function goToSurprise(){
window.location="surprise.html";
}

const images=[
"assets/1st date.jpg",
"assets/first evening spent in nature.jpg",
"assets/flower market visit.jpg",
"assets/cutu artsy date.jpg",
"assets/new years eve.jpg",
"assets/senor with his senorita enjoying tacos and beer.jpg"
];

const notes=[
"1st date (one of the most joyous days of my life)",
"an evening spent in tranquillity",
"admiring my most precious wifey at the flower market",
"the cutest artsy date at joggers park",
"the perfect end to 2025; best start to 2026",
"me and my senorita enjoying tacos"
];

function openMemory(i){
const popup=document.getElementById("memoryPopup");
popup.innerHTML=`<img src="${images[i]}" class="memory-img"><p>${notes[i]}</p>`;
popup.style.display="block";
document.getElementById("overlay").style.display="block";
}

function closeAll(){
document.getElementById("memoryPopup").style.display="none";
document.getElementById("overlay").style.display="none";
}

/* Sparkle */
document.addEventListener("mousemove",(e)=>{
let s=document.createElement("div");
s.className="sparkle";
s.style.left=e.pageX+"px";
s.style.top=e.pageY+"px";
document.body.appendChild(s);
setTimeout(()=>s.remove(),600);
});

/* Petals */
function initPetals(){
const canvas=document.getElementById("petals");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const petalImg=new Image();
petalImg.src="assets/petal.png";

let petals=[];

class Petal{
constructor(){
this.x=Math.random()*canvas.width;
this.y=Math.random()*canvas.height;
this.size=Math.random()*25+15;
this.speedY=Math.random()*1+0.5;
this.speedX=Math.random()*1-0.5;
this.rotation=Math.random()*360;
}
update(){
this.y+=this.speedY;
this.x+=this.speedX;
this.rotation+=0.5;
if(this.y>canvas.height){
this.y=-50;
this.x=Math.random()*canvas.width;
}
}
draw(){
ctx.save();
ctx.translate(this.x,this.y);
ctx.rotate(this.rotation*Math.PI/180);
ctx.drawImage(petalImg,-this.size/2,-this.size/2,this.size,this.size);
ctx.restore();
}
}

for(let i=0;i<30;i++){petals.push(new Petal());}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
petals.forEach(p=>{p.update();p.draw();});
requestAnimationFrame(animate);
}
animate();
}
