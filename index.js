'use strict';
const roulette　= ["密", "蜜", "宓", "淧", "䀄"];
const resultDivided = document.getElementById('result-area');
const rouletteButton = document.getElementById('roulette');
const textareaDivided = document.getElementById('text-area');
const stopButton = document.getElementById('stop');

resultDivided.innerText = roulette[0] + roulette[0] + roulette[1];
let roulette1;
let result;

//　ルーレットを開始
function start() {
  roulette1  = setInterval(function() {
  let r1 = Math.floor( Math.random() * 100);
  const i = r1 % roulette.length;
  let r2 = Math.floor( Math.random() * 100);
  const j = r2 % roulette.length;
  let r3 = Math.floor( Math.random() * 100);
  const k = r3 % roulette.length;
  result = roulette[i] + roulette[j] + roulette[k];
  resultDivided.innerText = result;
  textareaDivided.textContent =　'';
}, 100);
}
rouletteButton.onclick = () => {
 start();
}

// ルーレットを停止
function stop() {
  if(roulette1) {
    clearInterval(roulette1);
  }}

stopButton.onclick = () => {
 stop();
 let count = (result.match( /密/g ) || [] ).length;
 textareaDivided.textContent = count + "密です。";
}