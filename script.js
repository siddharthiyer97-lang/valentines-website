function unlock(){
const pass=document.getElementById("passwordInput").value.trim();

if(pass==="16112025"){
document.getElementById("lockScreen").classList.add("hidden");
document.getElementById("loadingScreen").classList.remove("hidden");

setTimeout(()=>{
document.getElementById("loadingScreen").classList.add("hidden");
document.getElementById("mainSite").classList.remove("hidden");

initPetals();

},2500);

}else{
document.getElementById("error").innerText="Wrong date wifey 😛";
}
}

function goToSurprise(){
localStorage.setItem("musicTime", document.getElementById("bgMusic").currentTime);
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
this.size=Math.random()*80+60;
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

function showLetter() {
    const popup = document.getElementById("memoryPopup");
    const overlay = document.getElementById("overlay");
    const button = document.querySelector(".romantic-btn");

    popup.innerHTML = `
        <div class="letter-content">
            <p>Heyy wifey,</p>

            <p>
            I just wanted to let you know how grateful I am to have you in my life.
            My life was bleak, lifeless — and you brought back the colour.
            With it, you taught me to never lose hope; that maybe someone,
            someday, would enter my life and have the capacity to hold my heart
            in the same way I'd hold theirs.
            </p>

            <p>
            Seeing your recent achievements — especially getting admitted into TUM —
            just makes me so proud of you. This is our year.
            I am 100% going to make it happen, I give you my word.
            Soon enough we will be reminiscing over our dreams
            which we made a reality.
            </p>

            <p>
            I love you, Nitya Premkumar Nair.
            I want to spend the rest of my life with you —
            grow old and stay together, till death takes us apart;
            and even then, I’ll meet you beyond the gates of judgement,
            in the endless paradise, where we will reunite once again.
            </p>

            <p>
            I sincerely am grateful to you for gracing my life with your presence.
            Here’s to our first Valentine’s together —
            may we prosper, grow as individuals,
            and most importantly, choose each other every single day.
            </p>

            <p>
            Your husband, with much love,<br>
            Siddharth 💞
            </p>
        </div>
    `;

    popup.style.display = "block";
    overlay.style.display = "block";

    // 👇 hide the button
    button.style.display = "none";
}
window.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bgMusic");

    if (music) {
        music.volume = 0.5;

        music.play().catch(() => {
            document.body.addEventListener("click", () => {
                music.play();
            }, { once: true });
        });
    }
});


document.addEventListener("click", ()=>{
    const music = document.getElementById("bgMusic");
    music.play();
}, { once: true });
