'use strict';
const roulette = ["密", "蜜", "宓", "淧", "䀄"];
const resultDivided = document.getElementById('result-area');
const rouletteButton = document.getElementById('roulette');
const textareaDivided = document.getElementById('text-area');
const tweetDivided = document.getElementById('tweet-area');
const stopButton = document.getElementById('stop');

resultDivided.innerText = roulette[0] + roulette[0] + roulette[1];
let roulette1;
let result;
let a = false;
/** 
 * 指定した要素の子どもを全て削除する
 * @param {HTMLElement} element HTMLの要素
 */
function removeAllChildren(element) {
  while (element.firstChild) {
    // 子どもの要素があるかぎり削除
    element.removeChild(element.firstChild);
  }}
//ルーレット開始
function start() {
  if(a === false){
    roulette1 = setInterval(function() {
      let r1 = Math.floor(Math.random() * 100);
      const i = r1 % roulette.length;
      let r2 = Math.floor(Math.random() * 100);
      const j = r2 % roulette.length;
      let r3 = Math.floor(Math.random() * 100);
      const k = r3 % roulette.length;
      result = roulette[i] + roulette[j] + roulette[k];
      resultDivided.innerText = result;
      textareaDivided.textContent = '';
    }, 100);
  }
}
rouletteButton.onclick = () => {
  start();
}

//ルーレットを停止
function stop() {
  if(roulette1){
    clearInterval(roulette1);
  }
}

stopButton.onclick = () => {
  a = false;
  stop();
  let n = (result.match(/密/g) ||[]).length;
  let result2 = n + "密です。";
  textareaDivided.textContent = result2;
  //
}
// const endAfter3denses = async (msInterval) => {
//   let denseNum = "0";
//   const textareaElement = document.getElementById('text-area');
//   const rouletteElement = document.getElementById('roulette');
//   const stopElement = document.getElementById('stop');
//   let pushedEscape = false;
//   document.onkeydown = e => {
//       if (e.key == 'Escape') pushedEscape = true;
//   }
// ​
//   while (!pushedEscape) {
//       rouletteElement.click();
//       await new Promise(resolve => setTimeout(resolve, msInterval));
//       stopElement.click();
//       denseNum = textareaElement.innerText.slice(0,1);
//       if (denseNum == '3') {
//           break;
//       }
//   }
// }


stopButton.onclick = () => {
  a = false;
 stop();
 let n = (result.match( /密/g ) || [] ).length;
 let result2 = n + "密です。";
 textareaDivided.textContent = result2;
 // TODO ツイートエリアの作成
  // TODO ツイートエリアの作成
  removeAllChildren(tweetDivided);
  const anchor = document.createElement('a');
  const hrefValue =
     'https://twitter.com/intent/tweet?button_hashtag=' + 
     encodeURIComponent('三密ルーレット') + 
     '&ref_src=twsrc%5Etfw';
  anchor.setAttribute('href', hrefValue);
  let result3 = decodeURIComponent('https://sumup7.github.io/three-dense/three-dense.html');
  anchor.className = 'twitter-hashtag-button';
  anchor.setAttribute('data-text', result + ' ' +result2 + result3);
  anchor.innerText = 'Tweet #三密ルーレット';
  tweetDivided.appendChild(anchor);
 
  // widgets.js の設定
  const script = document.createElement('script');
  script.setAttribute('src','https://platform.twitter.com/widgets.js');
  tweetDivided.appendChild(script);
  
 }