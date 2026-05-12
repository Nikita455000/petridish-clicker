let score = 0;
let energy = 100;

const tg = window.Telegram.WebApp;

tg.expand();

function updateUI(){

document.getElementById("score").innerText = score;
document.getElementById("energy").innerText = energy;

}

function clickCell(){

if(energy <= 0) return;

score++;
energy--;

updateUI();

}

function openModal(type){

const body = document.getElementById("modal-body");

let html = "";

if(type === "shop"){

html = `
<h2>🛒 Shop</h2>

<p>⚡ +50 Energy</p>
<p>🔥 +1 Click Power</p>
<p>☢ Faster Regen</p>
`;

}

if(type === "tasks"){

html = `
<h2>📋 Tasks</h2>

<p>• Make 100 clicks</p>
<p>• Spend 200 energy</p>
<p>• Open game at night</p>
`;

}

if(type === "achievements"){

html = `
<h2>🏆 Achievements</h2>

<p>• First Click</p>
<p>• 1K Clicks</p>
<p>• Energy Master</p>
`;

}

if(type === "profile"){

html = `
<h2>👤 Profile</h2>

<p>Level: 1</p>
<p>Rank: Rookie Cell</p>
<p>Total Score: ${score}</p>
`;

}

body.innerHTML = html;

document.getElementById("modal").style.display = "flex";

}

function closeModal(){

document.getElementById("modal").style.display = "none";

}

setInterval(()=>{

if(energy < 100){

energy++;
updateUI();

}

},3000);

updateUI();