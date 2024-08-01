const gridContainer = document.getElementById('gridContainer');
for (let i = 0; i <= 63; i++) {
  const box = document.createElement('div');
  box.classList.add('box', `box-${i}`);
  box.style.backgroundImage = "none";
  gridContainer.appendChild(box);
}  


//ERROR SWAPPING 3 TIMES OR 4 TIMES FUNCTION GETTING CALLED AGAIN AGAIN
function blue(){
for (let i = 0; i <= 63; i++) {
document.querySelector(`.box-${i}`).style.backgroundColor = "#64c5e6";

}
}

document.querySelector('.box-3').style.backgroundImage = "url('assests/TITAN.png')";
document.querySelector('.box-12').style.backgroundImage = "url('assests/CANON1.svg')";
document.querySelector('.box-12').style.backgroundPosition = '10% 40%'; 
 document.querySelector('.box-10').style.backgroundImage =  "url('assests/shield.png')";
document.querySelector('.box-13').style.backgroundImage = "url('assests/rok1.svg')";
document.querySelector('.box-15').style.backgroundImage = "url('assests/tri.svg')";
document.querySelector('.box-63').style.backgroundImage = "url('assests/canon2.svg')";
document.querySelector('.box-49').style.backgroundImage = "url('assests/castle2.svg')";
document.querySelector('.box-52').style.backgroundImage =  "url('assests/shield2.svg')";
document.querySelector('.box-54').style.backgroundImage = "url('assests/rok2.svg')";
document.querySelector('.box-50').style.backgroundImage = "url('assests/tri2.svg')";
function buttonreset(){
  document.querySelectorAll(".xv")[0].style.visibility="hidden";
  document.querySelectorAll(".xv")[1].style.visibility="hidden";
  document.querySelectorAll(".but")[0].style.visibility="hidden";
 document.querySelectorAll(".but")[1].style.visibility="hidden"; 
 document.querySelectorAll(".xvb")[0].style.visibility="hidden";
 document.querySelectorAll(".xvb")[1].style.visibility="hidden";
 document.querySelectorAll(".butb")[0].style.visibility="hidden";
 document.querySelectorAll(".butb")[1].style.visibility="hidden"; 
}
//--------------------------------------------------------------------------------------------------------------------------------------
document.querySelector('.bullet').style.top = '90px';
document.querySelector('.bullet').style.left = '670px';
var bullet = document.querySelector('.bullet');
function centerBulletInDiv(toti, m) {
  let targetDiv = document.querySelector(`.box-${toti}`);
  let bulletRect = bullet.getBoundingClientRect();
  let centeredLeft = targetDiv.offsetLeft + (targetDiv.offsetWidth / 2) - (bulletRect.width / 2);
  let centeredTop = targetDiv.offsetTop + (targetDiv.offsetHeight / 2) - (bulletRect.height / 2);
  bullet.style.left = `${centeredLeft}px`;
  bullet.style.top = `${centeredTop + m}px`; // Adjusted to add m to the centeredTop value
}


setTimeout(() => {
  centerBulletInDiv(3,0);
}, 10);

 var HISTORYA=[];
 var HISTORYB=[];


var posx = document.querySelector('.bullet').style.top;
var numberX = parseInt(posx, 10);
var currentAnimationFrame;
var flags = {
  s: 1,
  flag: 1,
  shield: 1,
  collision: 0,
  direc: ""
};


function Shoot() {
  numberX += 7;
  document.querySelector('.bullet').style.top = numberX + 'px';
  //console.log(1);
  if (flags.shield == 0) {
    reset();
    return;
  }
  if (flags.s === 1) {
    callGameFunctions([3, 2, 5, 6],5);
    collison(0,1,5);
    collison(7,8,5); 
  }

  const a = (document.querySelector(`.box-${inp[0]}`).style.backgroundImage.includes("rok1.svg") && flags.flag == 0);
  const c = (document.querySelector(`.box-${inp[0]}`).style.backgroundImage.includes("rok.svg") && flags.flag == 0);
  if(inp[1]!== undefined){//// do only if it exists 
  var b = (document.querySelector(`.box-${inp[1]}`).style.backgroundImage.includes("tri.svg")&& flags.flag == 2);}
  if(inp[8]!== undefined){
    var f = (document.querySelector(`.box-${inp[8]}`).style.backgroundImage.includes("tri2.svg")&& flags.flag == 5);}
  
  const d = (document.querySelector(`.box-${inp[7]}`).style.backgroundImage.includes("rok2.svg") && flags.flag == 3);
  const e = (document.querySelector(`.box-${inp[7]}`).style.backgroundImage.includes("rok3.svg") && flags.flag == 3);
  
  console.log(c);
  var toplimit=830;
  if(window.innerWidth<480)  toplimit=400;//MAKING CONDITIONS FRO MOBILE RESPONSIVENESS TOO
    if (numberX > toplimit) {
    document.querySelector('.bullet').style.visibility = "hidden";
    setTimeout(function() {
      document.querySelector('.bullet').style.visibility = "visible";
      reset();
      numberX = 90;
    }, 500);
  } else if (flags.s === 1) {
    currentAnimationFrame = requestAnimationFrame(Shoot);
    Reached=1;
  }
  if (flags.s == 0) {
    console.log(c);
    console.log(a);
    if (c || e) {
      moveLeftbullet()
      flags.direc = "left";
      flags.collision = 0;
    } else if (a || d) {
      moveRightbullet()
      flags.direc = "right";
      flags.collision = 0;
      console.log(1);
    } else if ((b && (rotation == 270 || rotation == -90)) || (f && (rotationb == 270 || rotationb == -90))){
      moveLeftbullet()
      flags.direc = "left";
      flags.collision = 0;
    } else if( (b && rotation == 0)|| (f && rotationb == 0)){
     moveRightbullet()
      flags.direc = "right";
      flags.collision = 0;
      console.log(1);
    }
    else if (b || f) {
      if(inp[1]!== undefined){
      if(b)document.querySelector(`.box-${inp[1]}`).style.backgroundImage="none";inp=[];}
      if(inp[8]!== undefined){
      if(f)document.querySelector(`.box-${inp[8]}`).style.backgroundImage="none";inp=[];}
      reset();
    }
  }
}
function callGameFunctions(gameNumbers,oi) {
  gameNumbers.forEach(function(gameNumber) {
    game(gameNumber,oi);
  });
}

var Reached=0;
var Reached1=0;
function reset() {
  cancelAnimationFrame(currentAnimationFrame);
  findDivWithImage();
  centerBulletInDiv(inp[4],0);
  console.log(inp);
  bullet.innerHTML= `<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  width="50px" height="50px" viewBox="0 0 512 512"  xml:space="preserve" transform="rotate(180 0 5)">

 
<g>
 <path class="st0" d="M376.531,197.984c-0.031-19.719-3.688-41.172-9.844-62.703c-9.281-32.25-24.156-64.484-42.406-89.734
   c-9.188-12.609-19.188-23.516-30.375-31.734c-5.625-4.078-11.531-7.5-17.875-9.938C269.719,1.438,262.969,0,256,0
   c-9.297,0-18.172,2.563-26.234,6.625c-14.141,7.188-26.328,18.781-37.391,32.75c-16.531,21.031-30.438,47.875-40.563,75.813
   c-10.063,27.984-16.297,56.938-16.344,82.797C135.469,263.938,135.5,512,135.5,512h241.031
   C376.531,512,376.516,259.875,376.531,197.984z M167.688,479.781c0-0.766,0-1.469,0-2.313c0-11.125,0-28.313,0-53.469h176.625
   c0,27.063,0,44.75,0,55.781H167.688z M344.313,391.797H167.688c0-14.266,0-36.734,0-62.328c0-43.625,0-96.125,0-131.484
   c-0.016-15.641,3.063-34.609,8.594-53.813c8.234-28.859,22.031-58.422,37.516-79.703c7.703-10.656,15.828-19.203,23.297-24.625
   c3.734-2.734,7.281-4.688,10.438-5.906c3.188-1.219,5.953-1.719,8.469-1.719c3.344,0,7.188,0.906,11.75,3.188
   c7.938,3.938,17.469,12.313,26.563,23.906c13.719,17.375,26.516,41.656,35.563,66.813c9.125,25.141,14.469,51.313,14.438,71.859
   C344.313,254.094,344.313,353.156,344.313,391.797z"/>
</g>
</svg>`
//  let di = document.querySelector(`.box-${inp[4]}`);
  flags.s = 1;
  flags.flag= 1;
  flags.shield= 1;
  flags.collision= 0;
  flags.direc="";
  numberX = 90; 
  reset1();
  Reached=0;// Reset top position
  return;
}
var countl=0;
function moveLeftbullet() {
  bullet.innerHTML= `<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  width="50px" height="50px" viewBox="0 0 512 512"  xml:space="preserve" transform="rotate(-90 0 5)">

 
<g>
 <path class="st0" d="M376.531,197.984c-0.031-19.719-3.688-41.172-9.844-62.703c-9.281-32.25-24.156-64.484-42.406-89.734
   c-9.188-12.609-19.188-23.516-30.375-31.734c-5.625-4.078-11.531-7.5-17.875-9.938C269.719,1.438,262.969,0,256,0
   c-9.297,0-18.172,2.563-26.234,6.625c-14.141,7.188-26.328,18.781-37.391,32.75c-16.531,21.031-30.438,47.875-40.563,75.813
   c-10.063,27.984-16.297,56.938-16.344,82.797C135.469,263.938,135.5,512,135.5,512h241.031
   C376.531,512,376.516,259.875,376.531,197.984z M167.688,479.781c0-0.766,0-1.469,0-2.313c0-11.125,0-28.313,0-53.469h176.625
   c0,27.063,0,44.75,0,55.781H167.688z M344.313,391.797H167.688c0-14.266,0-36.734,0-62.328c0-43.625,0-96.125,0-131.484
   c-0.016-15.641,3.063-34.609,8.594-53.813c8.234-28.859,22.031-58.422,37.516-79.703c7.703-10.656,15.828-19.203,23.297-24.625
   c3.734-2.734,7.281-4.688,10.438-5.906c3.188-1.219,5.953-1.719,8.469-1.719c3.344,0,7.188,0.906,11.75,3.188
   c7.938,3.938,17.469,12.313,26.563,23.906c13.719,17.375,26.516,41.656,35.563,66.813c9.125,25.141,14.469,51.313,14.438,71.859
   C344.313,254.094,344.313,353.156,344.313,391.797z"/>
</g>
</svg>`
  cancelAnimationFrame(currentAnimationFrame); // Cancel any ongoing animation
  var leftbullet = parseInt(bullet.style.left);
  leftbullet -= 5;
  countl++; 
  bullet.style.left = leftbullet + 'px';
  flags.flag = 1;
  flags.collision= 0;
  //callGameFunctions([3,5],38);
  if(countl>17){
    callGameFunctions([ 2,6],38);/// dont check gor collison if from rughht 
   collison(0,1,50);
  collison(7,8,50);
    countl=0;
    console.log(flags.collision)
    if(flags.collision==1 || flags.collision==2){flags.direc="left";gamecollision(); return;} }
    var leftlimit=330;
    if(window.innerWidth<480) leftlimit=10;
    if (leftbullet < leftlimit || flags.shield == 0) {
    reset();
    countl=0;
    console.log(1);
    return;
  } else {
    currentAnimationFrame = requestAnimationFrame(moveLeftbullet);
    
  }
}


var countr=0;
function moveRightbullet() {
  bullet.innerHTML= `<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  width="50px" height="50px" viewBox="0 0 512 512"  xml:space="preserve" transform="rotate(90 0 5)">

 
<g>
 <path class="st0" d="M376.531,197.984c-0.031-19.719-3.688-41.172-9.844-62.703c-9.281-32.25-24.156-64.484-42.406-89.734
   c-9.188-12.609-19.188-23.516-30.375-31.734c-5.625-4.078-11.531-7.5-17.875-9.938C269.719,1.438,262.969,0,256,0
   c-9.297,0-18.172,2.563-26.234,6.625c-14.141,7.188-26.328,18.781-37.391,32.75c-16.531,21.031-30.438,47.875-40.563,75.813
   c-10.063,27.984-16.297,56.938-16.344,82.797C135.469,263.938,135.5,512,135.5,512h241.031
   C376.531,512,376.516,259.875,376.531,197.984z M167.688,479.781c0-0.766,0-1.469,0-2.313c0-11.125,0-28.313,0-53.469h176.625
   c0,27.063,0,44.75,0,55.781H167.688z M344.313,391.797H167.688c0-14.266,0-36.734,0-62.328c0-43.625,0-96.125,0-131.484
   c-0.016-15.641,3.063-34.609,8.594-53.813c8.234-28.859,22.031-58.422,37.516-79.703c7.703-10.656,15.828-19.203,23.297-24.625
   c3.734-2.734,7.281-4.688,10.438-5.906c3.188-1.219,5.953-1.719,8.469-1.719c3.344,0,7.188,0.906,11.75,3.188
   c7.938,3.938,17.469,12.313,26.563,23.906c13.719,17.375,26.516,41.656,35.563,66.813c9.125,25.141,14.469,51.313,14.438,71.859
   C344.313,254.094,344.313,353.156,344.313,391.797z"/>
</g>
</svg>`
  cancelAnimationFrame(currentAnimationFrame); // Cancel any ongoing animation
  var leftbullet = parseInt(bullet.style.left);
  leftbullet += 5;
  countr++;
  bullet.style.left = leftbullet + 'px';
  flags.flag = 1;
  flags.collision= 0;
 if(countr>16){
  callGameFunctions([3, 2, 5, 6],38);
  collison(0,1,50);
  collison(7,8,50);
  countr=0;
  console.log(flags.collision)
  if(flags.collision==1 || flags.collision==2){ flags.direc="right"; gamecollision(); return;}} 
  var leftlimit=1110;
  if(window.innerWidth<480) leftlimit=467;
  if (leftbullet > leftlimit || flags.shield == 0) {
    reset();
    countr=0;
    return;
  } else {
    currentAnimationFrame = requestAnimationFrame(moveRightbullet); 
}
}

var countt=0;
function moveUpbullet() {
  bullet.innerHTML= `<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  width="50px" height="50px" viewBox="0 0 512 512"  xml:space="preserve" transform="rotate(0 0 5)">

 
<g>
 <path class="st0" d="M376.531,197.984c-0.031-19.719-3.688-41.172-9.844-62.703c-9.281-32.25-24.156-64.484-42.406-89.734
   c-9.188-12.609-19.188-23.516-30.375-31.734c-5.625-4.078-11.531-7.5-17.875-9.938C269.719,1.438,262.969,0,256,0
   c-9.297,0-18.172,2.563-26.234,6.625c-14.141,7.188-26.328,18.781-37.391,32.75c-16.531,21.031-30.438,47.875-40.563,75.813
   c-10.063,27.984-16.297,56.938-16.344,82.797C135.469,263.938,135.5,512,135.5,512h241.031
   C376.531,512,376.516,259.875,376.531,197.984z M167.688,479.781c0-0.766,0-1.469,0-2.313c0-11.125,0-28.313,0-53.469h176.625
   c0,27.063,0,44.75,0,55.781H167.688z M344.313,391.797H167.688c0-14.266,0-36.734,0-62.328c0-43.625,0-96.125,0-131.484
   c-0.016-15.641,3.063-34.609,8.594-53.813c8.234-28.859,22.031-58.422,37.516-79.703c7.703-10.656,15.828-19.203,23.297-24.625
   c3.734-2.734,7.281-4.688,10.438-5.906c3.188-1.219,5.953-1.719,8.469-1.719c3.344,0,7.188,0.906,11.75,3.188
   c7.938,3.938,17.469,12.313,26.563,23.906c13.719,17.375,26.516,41.656,35.563,66.813c9.125,25.141,14.469,51.313,14.438,71.859
   C344.313,254.094,344.313,353.156,344.313,391.797z"/>
</g>
</svg>`
  cancelAnimationFrame(currentAnimationFrame); 
    var topbullet = parseInt(bullet.style.top);
  topbullet -= 5;
  countt++;
  bullet.style.top = topbullet + 'px';
  flags.flag = 1;
  flags.collision= 0;
  //callGameFunctions([3, 2, 5, 6]);
 if(countt>20){
  console.log(56656)
  callGameFunctions([3, 2, 5, 6],56);
  collison(0,1,56);
  collison(7,8,56);
  countt=0;
  console.log(flags.collision)
  if(flags.collision==1 || flags.collision==2){ flags.direc="up"; gamecollision(); return;}} 

  if (topbullet < 90 || flags.shield == 0) {
    reset();
    console.log(1);
    countt=0; 
    return;
  } else {
    currentAnimationFrame = requestAnimationFrame(moveUpbullet);
    // Continue moving up
  }
}
var countd=0;
function moveDownbullet() {
  cancelAnimationFrame(currentAnimationFrame); 
  bullet.innerHTML= `<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  width="50px" height="50px" viewBox="0 0 512 512"  xml:space="preserve" transform="rotate(180 0 5)">

 
<g>
 <path class="st0" d="M376.531,197.984c-0.031-19.719-3.688-41.172-9.844-62.703c-9.281-32.25-24.156-64.484-42.406-89.734
   c-9.188-12.609-19.188-23.516-30.375-31.734c-5.625-4.078-11.531-7.5-17.875-9.938C269.719,1.438,262.969,0,256,0
   c-9.297,0-18.172,2.563-26.234,6.625c-14.141,7.188-26.328,18.781-37.391,32.75c-16.531,21.031-30.438,47.875-40.563,75.813
   c-10.063,27.984-16.297,56.938-16.344,82.797C135.469,263.938,135.5,512,135.5,512h241.031
   C376.531,512,376.516,259.875,376.531,197.984z M167.688,479.781c0-0.766,0-1.469,0-2.313c0-11.125,0-28.313,0-53.469h176.625
   c0,27.063,0,44.75,0,55.781H167.688z M344.313,391.797H167.688c0-14.266,0-36.734,0-62.328c0-43.625,0-96.125,0-131.484
   c-0.016-15.641,3.063-34.609,8.594-53.813c8.234-28.859,22.031-58.422,37.516-79.703c7.703-10.656,15.828-19.203,23.297-24.625
   c3.734-2.734,7.281-4.688,10.438-5.906c3.188-1.219,5.953-1.719,8.469-1.719c3.344,0,7.188,0.906,11.75,3.188
   c7.938,3.938,17.469,12.313,26.563,23.906c13.719,17.375,26.516,41.656,35.563,66.813c9.125,25.141,14.469,51.313,14.438,71.859
   C344.313,254.094,344.313,353.156,344.313,391.797z"/>
</g>
</svg>`
  var topbullet = parseInt(bullet.style.top);
  topbullet += 5;
  countd++;
 bullet.style.left =  (bullet.style.left+60) + 'px';
  bullet.style.top = topbullet + 'px';
  flags.flag = 1;
  flags.collision= 0;
  if(countd>20){
    console.log(56656)
    callGameFunctions([3, 2, 5, 6],56);
    collison(0,1,56);
    collison(7,8,56);
    countd=0;
    console.log(flags.collision)
    if(flags.collision==1 || flags.collision==2){ flags.direc="down";gamecollision(); return;}}
    var topplimit=830;
    if(window.innerWidth<480) topplimit=400;
  if (topbullet > topplimit || flags.shield == 0) {     reset();
    console.log(1);
    countd=0;
    return;
  } else {
    currentAnimationFrame = requestAnimationFrame(moveDownbullet); // Continue moving down
  }
}


function game(pos,poi){
//console.log(poi)
  let div1 = document.querySelector('.bullet');
  let bulletPosition = div1.getBoundingClientRect();
  findDivWithImage();
  let divric = document.querySelector(`.box-${inp[pos]}`);
  let inpPosition = divric.getBoundingClientRect();
//console.log(Math.abs(Math.abs(inpPosition.top) - Math.abs(bulletPosition.top)));
  //console.log(Math.abs(Math.abs(inpPosition.left) - Math.abs(bulletPosition.left)));
 //console.log(Math.abs(inpPosition.top) - Math.abs(bulletPosition.top) < 5 && Math.abs(Math.abs(inpPosition.left) - Math.abs(bulletPosition.left)) < 34);
  if (Math.abs(Math.abs(inpPosition.top) - Math.abs(bulletPosition.top)) < poi && Math.abs(Math.abs(inpPosition.left) - Math.abs(bulletPosition.left)) <= 37.5) {
      console.log('Collision detected! Stopping shooting.');
      console.log(HISTORYA,HISTORYB);
      let myArrayStringA = JSON.stringify(HISTORYA);
      let myArrayStringB = JSON.stringify(HISTORYB);
     localStorage.setItem('myArrayA', myArrayStringA);
     localStorage.setItem('myArrayB', myArrayStringB);
      if(pos==2||pos==6){
        if(pos==2){
          alert("game over, B WINS");}
          else{
            alert("game over, A WINS");
          }
        alert("game over");
        location.reload();
      }
      if(pos==3||pos==5){
         reset();
         flags.shield=0;
          console.log("shield")
          return;
  }
}
}
function collison(repa,repb,limitx) {
    let div1 = document.querySelector('.bullet');
    let bulletPosition = div1.getBoundingClientRect();
    findDivWithImage();
    //console.log(inp);
    let divric = document.querySelector(`.box-${inp[repa]}`);
    let inpPosition = divric.getBoundingClientRect();
    
   //console.log(Math.abs(inpPosition.top) - Math.abs(bulletPosition.top));
   //console.log(Math.abs(Math.abs(inpPosition.left) - Math.abs(bulletPosition.left)));
    if (Math.abs(Math.abs(inpPosition.top) - Math.abs(bulletPosition.top)) < limitx && Math.abs(Math.abs(inpPosition.left) - Math.abs(bulletPosition.left)) <= 37.5) {
        console.log('Collision detected! Stop.');
        flags.s = 0;
        playMoveSound();
        if(repa==0){
        flags.flag = 0;}
        else{
          flags.flag = 3;
        }
       flags.collision=1;

       centerBulletInDiv(inp[repa],0);
    }
    //console.log(Math.abs(Math.abs(triPosition.top) - Math.abs(bulletPosition.top)));
    //console.log(Math.abs(Math.abs(triPosition.left) - Math.abs(bulletPosition.left)));
    //console.log(Math.abs(triPosition.top) - Math.abs(bulletPosition.top) < 5 && Math.abs(Math.abs(triPosition.left) - Math.abs(bulletPosition.left)) < 33);
   if(inp[repb]!==undefined){
    let divtri = document.querySelector(`.box-${inp[repb]}`);
    let triPosition = divtri.getBoundingClientRect();
    if (Math.abs(Math.abs(triPosition.top) - Math.abs(bulletPosition.top)) < limitx && Math.abs(Math.abs(triPosition.left) - Math.abs(bulletPosition.left)) < 38) {
        console.log('Collision detected! Stopping shooting.');
        flags.s = 0;
        playMoveSound();
        if(repb==1){
        flags.flag = 2;}
        else{
          flags.flag = 5;
        }
        flags.collision=2;
       // console.log(inp[repb])
        centerBulletInDiv(inp[repb],0);
    }
}
}
var inp = []
function findDivWithImage() {
    for (let i = 0; i <= 63; i++) {
        var div = document.querySelector(`.box-${i}`).style.backgroundImage;
        if (div.includes("rok.svg") || div.includes("rok1.svg")) {
            inp[0] = i;
        }
        if (div.includes("tri.svg")) {
            inp[1] = i;
        }
        if (div.includes("CANON1.svg")) {
            inp[2] = i;
           
        }

        if (div.includes("shield.png")) {
          inp[3] = i;
        }
        if (div.includes("TITAN.png")) {
            inp[4] = i;
          }
         if (div.includes("shield2.svg")) {
              inp[5] = i;
        }
        if (div.includes("castle2.svg")) {
          inp[6] = i;
      }
      if (div.includes("rok2.svg") || div.includes("rok3.svg")) {
        inp[7] = i;
    }
    if (div.includes("tri2.svg")) {
      inp[8] = i;
  }
  if (div.includes("canon2.svg")) {
    inp[9] = i;
    }
  }
}


findDivWithImage();

function gamecollision() {
  cancelAnimationFrame(currentAnimationFrame);
  findDivWithImage();
  let a = (document.querySelector(`.box-${inp[0]}`).style.backgroundImage.includes("rok1.svg") && flags.flag == 0);
  let c = (document.querySelector(`.box-${inp[0]}`).style.backgroundImage.includes("rok.svg") && flags.flag == 0);
  if(inp[1]!== undefined){
    var b = (document.querySelector(`.box-${inp[1]}`).style.backgroundImage.includes("tri.svg")&& flags.flag == 2);}
     
    if(inp[8]!== undefined){
      var f = (document.querySelector(`.box-${inp[8]}`).style.backgroundImage.includes("tri2.svg")&& flags.flag == 5);}
    
  const d = (document.querySelector(`.box-${inp[7]}`).style.backgroundImage.includes("rok2.svg") && flags.flag == 3);
  const e = (document.querySelector(`.box-${inp[7]}`).style.backgroundImage.includes("rok3.svg") && flags.flag == 3);
  

  console.log(1223);
  console.log(flags.collision);

  // Handle collision type 1
  if (flags.collision == 1) {
    cancelAnimationFrame(currentAnimationFrame);
    switch (flags.direc) {
      case "left":
        if (c || e) {
         // bullet.style.left = (parseInt(bullet.style.left) + 25) + 'px';
          //setTimeout(() => moveDownbullet(), 10);
          moveDownbullet();
        }
        if (a || d) {
          //bullet.style.left = (parseInt(bullet.style.left) + 25) + 'px';
        //  setTimeout(() => moveUpbullet(), 10); 
        moveUpbullet();
        }
        return;
      case "right":
        if (c || e) {
         
         moveUpbullet();
        }
        if (a || d) {
          //bullet.style.left = (parseInt(bullet.style.left) + 25) + 'px';
          //setTimeout(() => moveDownbullet(), 10); 
          moveDownbullet();
        }
        return;
      case "up":
          if(c || e){
            moveRightbullet();
          }
          if(a ||d){
            moveLeftbullet();
          }
          return;
      case "down":
         if(c ||e){
          moveLeftbullet();
         }
         if(a ||d){
          moveRightbullet();
        }
        return;
    }
  }

  if (flags.collision == 2) {
    cancelAnimationFrame(currentAnimationFrame);
    switch (flags.direc) {
      case "right":
        if ((b && (rotation == 270 || rotation == -90)) || (f && (rotationb == 270 || rotationb == -90))) {
          //bullet.style.left = (parseInt(bullet.style.left) + 25) + 'px';
          //setTimeout(() => moveUpbullet(), 10);
          moveUpbullet();
        } else if ((b && (rotation == 180 || rotation == -180)) || (f && (rotationb == 180 || rotationb == -180))) {
          //bullet.style.left = (parseInt(bullet.style.left) + 25) + 'px';
          //setTimeout(() => moveDownbullet(), 10);
          moveDownbullet() // Delay before moving down
        } else {
          if(inp[1]!== undefined && b){
            document.querySelector(`.box-${inp[1]}`).style.backgroundImage="none";inp=[];}
            if(inp[8]!== undefined && f){
            document.querySelector(`.box-${inp[8]}`).style.backgroundImage="none";inp=[];}
          reset();
        }
        return;
      case "left":
        if ((b && (rotation == -270 || rotation == 90))|| (f && (rotationb == -270 || rotationb == 90))) {
          //bullet.style.left = (parseInt(bullet.style.left) +25 ) + 'px';
          //setTimeout(() => moveDownbullet(), 10); 
          moveDownbullet()
        } else if ((b && rotation == 0) || (f && rotationb == 0)) {
        // bullet.style.left = (parseInt(bullet.style.left) + 25) + 'px';
          //setTimeout(() => moveUpbullet(), 10); 
          moveUpbullet()
        } else {
          if(inp[1]!== undefined && b){
            document.querySelector(`.box-${inp[1]}`).style.backgroundImage="none";inp=[];}
            if(inp[8]!== undefined && f){
            document.querySelector(`.box-${inp[8]}`).style.backgroundImage="none";inp=[];}
          reset();
        }
        return;
        case "up":
          if ((b && (rotation == -270 || rotation == 90))|| (f && (rotationb == -270 || rotationb == 90))) {
            moveRightbullet();
          }
         else  if ((b && (rotation == 180 || rotation == -180)) || (f && (rotationb == 180 || rotationb == -180))) {
          moveLeftbullet();
         }
         else {
          if(inp[1]!== undefined && b){
            document.querySelector(`.box-${inp[1]}`).style.backgroundImage="none";inp=[];}
            if(inp[8]!== undefined && f){
            document.querySelector(`.box-${inp[8]}`).style.backgroundImage="none";inp=[];}
            reset();
        }
         return;
         case "down":
          if ((b && (rotation == 270 || rotation == -90)) || (f && (rotationb == 270 || rotationb == -90))){
            moveLeftbullet();}
   
          else if( (b && rotation == 0)|| (f && rotationb == 0)){
              moveRightbullet();}
        
          else {
            if(inp[1]!== undefined && b){
              document.querySelector(`.box-${inp[1]}`).style.backgroundImage="none";inp=[];}
              if(inp[8]!== undefined && f){
              document.querySelector(`.box-${inp[8]}`).style.backgroundImage="none";inp=[];}
            reset();
          }
  }
}
}




///CANON11///////
var team = "a";
var currentBoxc = 3;
var moveStack = [];
var redoStack = [];

document.querySelector(`.box-${currentBoxc}`).addEventListener('click', clickHandlerc);

function moveR(Boxc, rig) {
  playMoveSound();
  pp=1;/// decides which function should work like canon undo or pieces undo coz i hv same name for both
  tt=0;
  ff=0;
  kk=0;
  countx=0;///only i time undo can be done 
    if (Boxc !== 0) {
        document.querySelector(`.box-${Boxc - 1}`).style.backgroundColor = "#64c5e6";
    }
    document.querySelector(`.box-${Boxc + 1}`).style.backgroundColor = "#64c5e6";
    document.querySelector(`.box-${Boxc}`).removeEventListener('click', clickHandlerc);

    // Push the current state to the moveStack for undo
    moveStack.push({ Boxc: Boxc, rig: rig });// rig is + or -1 
    // Clear the redoStack
    redoStack = [];

    document.querySelector(`.box-${Boxc}`).style.backgroundImage = "none";
    document.querySelector(`.box-${Boxc + rig}`).style.backgroundImage = "url('assests/TITAN.png')";
    currentBoxc = Boxc + rig;
    HISTORYA.push(currentBoxc);
    document.querySelector(`.box-${currentBoxc}`).addEventListener('click', clickHandlerc);
    reset();
    Shoot();
    buttonreset();// visibility
    startTeamBTimer();
    team = "b";
    teampause = team;
}

function highlightAdjacentBoxes(Boxc) {
    console.log(55);
    console.log(Boxc);
    var backgroundImage1 = document.querySelector(`.box-${Boxc + 1}`).style.backgroundImage;
    if (Boxc - 1 >= 0) {
        var backgroundImage2 = document.querySelector(`.box-${Boxc - 1}`).style.backgroundImage;
    } else {
        var backgroundImage2 = "notexist";
    }
    var left = backgroundImage2.includes("none");
    var right = backgroundImage1.includes("none");
    blue();
    if (Boxc - 1 >= 0 && left) {
        console.log(8778);
        document.querySelector(`.box-${Boxc - 1}`).style.backgroundColor = "green";
    }
    if (Boxc + 1 <= 40 && right) {
        document.querySelector(`.box-${Boxc + 1}`).style.backgroundColor = "green";
    }

    function Remove() {
        if (Boxc - 1 > 0) {
            console.log(Boxc - 1);
            document.querySelector(`.box-${Boxc - 1}`).removeEventListener('click', leftClickListener);
            document.querySelector(`.box-${Boxc + 1}`).removeEventListener('click', rightClickListener);
        } else {
            document.querySelector(`.box-${Boxc + 1}`).removeEventListener('click', rightClickListener);
        }
    }

    function leftClickListener(event) {
        console.log(33223);
        if (Boxc - 1 >= 0) {
            document.querySelector(`.box-${Boxc - 1}`).style.backgroundColor = "#64c5e6";
        }
        document.querySelector(`.box-${Boxc + 1}`).style.backgroundColor = "#64c5e6";
        if (Boxc >= 0 && left) {
            moveR(Boxc, -1);
        }
        Remove(Boxc);
    }

    function rightClickListener(event) {
        if (Boxc - 1 >= 0) {
            document.querySelector(`.box-${Boxc - 1}`).style.backgroundColor = "#64c5e6";
        }
        document.querySelector(`.box-${Boxc + 1}`).style.backgroundColor = "#64c5e6";
        if (Boxc < 8 && right) {
            moveR(Boxc, +1);
        }
        Remove(Boxc);
    }

    if (Boxc - 1 >= 0) {
        console.log(9090809);
        document.querySelector(`.box-${Boxc - 1}`).addEventListener('click', leftClickListener);
    }
    if (Boxc + 1 <= 7) {
        console.log(7900);
        document.querySelector(`.box-${Boxc + 1}`).addEventListener('click', rightClickListener);
    }
}

function clickHandlerc(event) {
    if (team !== "a" || Paused || Reached1) return;
    console.log(event.target.className);
    var Boxc = parseInt(event.target.className.match(/\d+/)[0], 10);
    highlightAdjacentBoxes(Boxc);
  
}
var pp=0;
var tt=0;
var countx=0;
function undo() {
  console.log(pp);
if(pp &&countx==0){
  console.log(pp);
    if (moveStack.length === 0) return;
    const lastMove = moveStack.pop();
  countx=1;
    // Store the current position before undo for redo purposes
    redoStack.push({ Boxc: lastMove.Boxc, rig: lastMove.rig });
    console.log(redoStack);
    document.querySelector(`.box-${currentBoxc}`).style.backgroundImage = "none";/// removing canon from 1s t box and keeping it in prev box 
    currentBoxc = lastMove.Boxc;
    document.querySelector(`.box-${currentBoxc}`).style.backgroundImage = "url('assests/TITAN.png')";
    document.querySelector(`.box-${currentBoxc}`).addEventListener('click', clickHandlerc);
    reset();
    buttonreset();
}
}
function redo() {
  if(pp){
    if (redoStack.length === 0) return;

    const lastUndo = redoStack.pop();
    console.log(lastUndo);
    moveStack.push({ Boxc: currentBoxc, rig: lastUndo.rig });

    document.querySelector(`.box-${currentBoxc}`).style.backgroundImage = "none";
    currentBoxc = lastUndo.Boxc + lastUndo.rig;//// previous box of undo 
    document.querySelector(`.box-${currentBoxc}`).style.backgroundImage = "url('assests/TITAN.png')";
    document.querySelector(`.box-${currentBoxc}`).addEventListener('click', clickHandlerc);
    reset();
    buttonreset();

  }}
document.getElementById('undoButton').addEventListener('click', undo);//im having pnly 2 buttons for each side soo i use same name but use varibales to ckeck which to execute 
document.getElementById('redoButton').addEventListener('click', redo);


let teampause=""
//---------------------------------------------------------------------------------------------------------------------------------------------
//function titan(){
  var lol=0;
  var currentBoxb =0;
  function setupObjectMovement(BoxN, imgUrl) {
    document.querySelector(`.box-${BoxN}`).addEventListener('click', clickHandler);
  
    function move(BoxN, imgUrl, pos) {
      tt=1;
      pp=0;//// if this moves and undo function is called the jundo for piececs only will be triggered 
      ff=0;
      kk=0;  
      countp=0;
     blue();
     imgUrl=document.querySelector(`.box-${BoxN}`).style.backgroundImage;
     console.log(imgUrl);
  
      document.querySelector(`.box-${BoxN}`).removeEventListener('click', clickHandler);
      document.querySelector(`.box-${BoxN}`).style.backgroundImage = "none";
      document.querySelector(`.box-${BoxN + pos}`).style.backgroundImage = imgUrl;
     
      moveStack.push({ BoxN: BoxN, imgUrl: imgUrl, pos: pos });//// pos is likev rig also image also boxn
      redoStack = [];
      BoxN = BoxN + pos;
      updatea(BoxN, imgUrl);
      currentBoxb =BoxN;
      HISTORYA.push(BoxN);
      playMoveSound();
      if (imgUrl === 'url("assests/tri.svg")') {
        o = BoxN;
        lol = BoxN;
        updateRotation(lol, 0);
        document.querySelector(`.box-${BoxN - pos}`).style.transform = 'rotate(0deg)';
      }
      //flags.shield = 1;
      upButton.disabled = true; 
      leftButton.disabled = true; 
      rightButton.disabled = true; 
      downButton.disabled = true; 
      reset();
      Shoot();
      buttonreset();
      startTeamBTimer();
      team = "b";
      teampause = team;
    }
  
    function updatea(BoxN, imgUrl) {
      if (imgUrl === 'url("assests/CANON1.svg")') {
        x = BoxN;
        console.log(1);
      } else if (imgUrl === 'url("assests/shield.png")') {
        y = BoxN;
      } else if (imgUrl === 'url("assests/rok1.svg")' || imgUrl === 'url("assests/rok.svg")') {
        z = BoxN;
        if (rok == 1) document.querySelector(`.box-${BoxN}`).style.backgroundImage = "url('assests/rok.svg')";
        leu(BoxN);
      }
      document.querySelector(`.box-${BoxN}`).addEventListener('click', clickHandler);
    }


    function swap(pos2, img, BoxN) {
      blue();
      buttonH = [];
     document.querySelector(`.box-${BoxN}`).removeEventListener('click', clickHandler);/// REMOVING THE PRESENT LISTENRE(FOR MOVING)
    document.querySelector(`.box-${BoxN + pos2}`).removeEventListener('click', clickHandler);
    const newPos = document.querySelector(`.box-${BoxN + pos2}`).style.backgroundImage;//// IMAGE IN FUTURE BOX 
      switch (newPos) {
        case 'url("assests/shield.png")':
          y = BoxN;
          setupObjectMovement(y, "url('assests/shield.png')")/// ADDING THE EVENT LISTENER (HAPPENS INSIDEV THIS FUNC )
          break;
        case 'url("assests/tri.svg")':
          o = BoxN;
          lol = BoxN;
          updateRotation(lol, 0);
          document.querySelector(`.box-${BoxN+(pos2)}`).style.transform = 'rotate(0deg)';
          setupObjectMovement(o, "url('assests/tri.svg')")
          break;
      }
      console.log(BoxN + pos2);
      document.querySelector(`.box-${BoxN}`).style.backgroundImage = newPos;
      document.querySelector(`.box-${BoxN + pos2}`).style.backgroundImage = img
     // if (rok == 1) document.querySelector(`.box-${BoxN + pos2}`).style.backgroundImage = "url('assests/rok.svg')";
      z = BoxN + pos2;
      console.log(z);
      if(rok==0)setupObjectMovement(z, "url('assests/rok1.svg')");
      if (rok == 1) setupObjectMovementb(z, "url('assests/rok.svg')");
     document.querySelector(`.box-${BoxN + pos2}`).addEventListener('click', clickHandler);
     
     document.querySelector(`.box-${BoxN}`).addEventListener('click', clickHandler);// listener to both the boxes
     reset();
     Shoot();
     buttonreset();
     startTeamBTimer();
     team = "b";
     teampause = team;
      upButton.disabled = true; 
      leftButton.disabled = true; 
      rightButton.disabled = true; 
      downButton.disabled = true; 
      
      return;
    }
    function swapDirection(direction,BoxN) {
      buttonH=[];/// REMOVING ALL OTHER BUTTON EVENTS 
      console.log(buttonH);
      switch (direction) {
        case 'left':
          img=document.querySelector(`.box-${BoxN}`).style.backgroundImage;/// FROM WHICH BOX SWAP IS TRIGGERED
          swap(-1,img,BoxN);
          break;
        case 'right':
          img=document.querySelector(`.box-${BoxN}`).style.backgroundImage;
          swap(1,img,BoxN) 
          break;
        case 'up':
          img=document.querySelector(`.box-${BoxN}`).style.backgroundImage;
          swap(-8,img,BoxN)
          break;
        case 'down':
          img=document.querySelector(`.box-${BoxN}`).style.backgroundImage;
          swap(8,img,BoxN)
          break;
        default:
          break;
      }
    }
    
  
    var upButton = document.getElementById('u');
    var leftButton = document.getElementById('d');
    var rightButton = document.getElementById('o');
    var downButton = document.getElementById('n');

    var buttonH = [];

    function highlightAdjacentBoxes(BoxN, imgUrl) {
     // var buttonH = [];
      imgUrl = document.querySelector(`.box-${BoxN}`).style.backgroundImage;

    //  if (inp[1] === undefined) {
      //  if (imgUrl === "url('assests/tri.svg')") imgUrl = document.querySelector(`.box-${BoxN}`).style.backgroundImage;
     // }
  
      var backgroundImage1 = BoxN + 1 <= 63 ? document.querySelector(`.box-${BoxN + 1}`).style.backgroundImage : "not exist";
      var backgroundImage2 = BoxN - 1 >= 0 ? document.querySelector(`.box-${BoxN - 1}`).style.backgroundImage : "not exist";
      var backgroundImage3 = BoxN + 8 <= 63 ? document.querySelector(`.box-${BoxN + 8}`).style.backgroundImage : "not exist";
      var backgroundImage4 = BoxN - 8 >= 0 ? document.querySelector(`.box-${BoxN - 8}`).style.backgroundImage : "notexist";
      var top = (backgroundImage4.includes("none") );
      var left = (backgroundImage2.includes("none") );
      var right = (backgroundImage1.includes("none") );
      var down = (backgroundImage3.includes("none"));
    
      blue();
      console.log(BoxN);
////all this is fro swap 
      function upButtonH() {
        swapDirection('up', BoxN);
       
    }

    function leftButtonH() {
      console.log(0);
        swapDirection('left', BoxN);
       
    }

    function rightButtonH() {
        swapDirection('right', BoxN);
       
    }

    function downButtonH() {
        swapDirection('down', BoxN);
       
    }

    buttonH = [upButtonH, leftButtonH, rightButtonH, downButtonH];

/// only if some piece  present also not titan and its a rico then swap button should be availabke 

    if (!top && !(backgroundImage4.includes("castle2.svg")) && !(backgroundImage4.includes("CANON1.svg")) &&(imgUrl === 'url("assests/rok1.svg")' || imgUrl === 'url("assests/rok.svg")')) {
        upButton.disabled = false;
        upButton.addEventListener('click', upButtonH);
    } else {
        upButton.disabled = true;
        upButton.removeEventListener('click', upButtonH);
    }

    if (!left &&  !(backgroundImage2.includes("castle2.svg")) &&!(backgroundImage2.includes("CANON1.svg")) &&(imgUrl === 'url("assests/rok1.svg")' || imgUrl === 'url("assests/rok.svg")')) {
        leftButton.disabled = false;
        leftButton.addEventListener('click', leftButtonH);
    } else {
        leftButton.disabled = true;
        leftButton.removeEventListener('click', leftButtonH);
    }

    if (!right &&  !(backgroundImage1.includes("castle2.svg")) &&  !(backgroundImage1.includes("CANON1.svg")) &&(imgUrl === 'url("assests/rok1.svg")' || imgUrl === 'url("assests/rok.svg")')) {
        rightButton.disabled = false;
        rightButton.addEventListener('click', rightButtonH);
    } else {
        rightButton.disabled = true;
        rightButton.removeEventListener('click', rightButtonH);}
     
        if (!down && !(backgroundImage3.includes("castle2.svg")) &&!(backgroundImage3.includes("CANON1.svg")) && (imgUrl === 'url("assests/rok1.svg")' || imgUrl === 'url("assests/rok.svg")')) {
          downButton.addEventListener('click',downButtonH );
          downButton.disabled = false;
      } else {
        downButton.disabled = true;
        downButton.removeEventListener('click', downButtonH);}
      
  /// above all is for swap 
      if (BoxN - 1 >= 0 && left) {
        document.querySelector(`.box-${BoxN - 1}`).style.backgroundColor = "green";
      }
      if (BoxN + 1 <= 63 && right) {
        document.querySelector(`.box-${BoxN + 1}`).style.backgroundColor = "green";
      }
      if (BoxN - 8 >= 0 && top) {
        document.querySelector(`.box-${BoxN - 8}`).style.backgroundColor = "green";
      }
      if (BoxN + 8 <= 63 && down) {
        document.querySelector(`.box-${BoxN + 8}`).style.backgroundColor = "green";
      }
  
      function Remove() {
        for (let i = 0; i <= 63; i++) {
          document.querySelector(`.box-${i}`).removeEventListener('click', leftClickListener);
          document.querySelector(`.box-${i}`).removeEventListener('click', rightClickListener);
          document.querySelector(`.box-${i}`).removeEventListener('click', upClickListener);
          document.querySelector(`.box-${i}`).removeEventListener('click', downClickListener);
        }
      }
      function leftClickListener() {
        if (document.querySelector(`.box-${BoxN - 1}`).style.backgroundColor === "green") {
          if (BoxN >= 1 && left) {
            imgUrl = document.querySelector(`.box-${BoxN}`).style.backgroundImage;
            move(BoxN, imgUrl, -1);
          }
        }
        Remove(BoxN, imgUrl);
      }
  
      function rightClickListener() {
        if (document.querySelector(`.box-${BoxN + 1}`).style.backgroundColor === "green") {
          if (BoxN < 63 && right) {
            imgUrl = document.querySelector(`.box-${BoxN}`).style.backgroundImage;
            move(BoxN, imgUrl, 1);
          }
        }
        Remove(BoxN, imgUrl);
      }
  
      function upClickListener(event) {
        if (document.querySelector(`.box-${BoxN - 8}`).style.backgroundColor === "green") {
          if (BoxN >= 8 && top) {
            imgUrl = document.querySelector(`.box-${BoxN}`).style.backgroundImage;
            move(BoxN, imgUrl, -8);
          }
        }
        Remove(BoxN, imgUrl);
      }
  
      function downClickListener(event) {
        if (document.querySelector(`.box-${BoxN + 8}`).style.backgroundColor === "green") {
          if (BoxN <= 55 && down) {
            imgUrl = document.querySelector(`.box-${BoxN}`).style.backgroundImage;
            console.log(imgUrl);
            move(BoxN, imgUrl, 8);
          }
        }
        Remove(BoxN, imgUrl);
      }
      console.log(imgUrl);
      Remove();
      if (BoxN - 1 >= 0) {
        document.querySelector(`.box-${BoxN - 1}`).addEventListener('click', leftClickListener);
      }
      if (BoxN + 1 <= 63) {
        document.querySelector(`.box-${BoxN + 1}`).addEventListener('click', rightClickListener);
      }
      if (BoxN - 8 >= 0) {
        document.querySelector(`.box-${BoxN - 8}`).addEventListener('click', upClickListener);
      }
      if (BoxN + 8 <= 63) {
        document.querySelector(`.box-${BoxN + 8}`).addEventListener('click', downClickListener);
      }
    }
  
    function clickHandler(event) {
      if (team !== "a" || Paused || Reached1) return;
      var BoxN = parseInt(event.target.className.match(/\d+/)[0], 10);
      console.log(document.querySelector(`.box-${BoxN}`).style.backgroundImage);
      var backgroundImage = document.querySelector(`.box-${BoxN}`).style.backgroundImage;
      if (backgroundImage.includes("shield.png") || backgroundImage.includes("CANON1.svg") || backgroundImage.includes("rok1.svg") || backgroundImage.includes("rok.svg") || backgroundImage.includes("tri.svg")) {
        highlightAdjacentBoxes(BoxN, imgUrl);
      
      }
    }
    var countp=0;
    function undo() {
      console.log(tt);
      if (tt && countp == 0  ) { // Check if tt is true and countp is 0
          if (moveStack.length === 0) return;
          countp = 1; // Set countp to 1 after the first execution
          const lastMove = moveStack.pop();

          // Store the current position before undo for redo purposes
          redoStack.push({ BoxN: lastMove.BoxN, imgUrl: lastMove.imgUrl, pos: lastMove.pos });
          console.log(redoStack);

          document.querySelector(`.box-${currentBoxb}`).style.backgroundImage = "none";
          currentBoxb = lastMove.BoxN;
          document.querySelector(`.box-${currentBoxb}`).style.backgroundImage = lastMove.imgUrl;

          document.querySelector(`.box-${currentBoxb}`).addEventListener('click', clickHandler);
          reset();
          buttonreset();
      }
  }

function redo() {
  if (tt){
  if (redoStack.length === 0) return;

  const lastUndo = redoStack.pop();
  console.log(lastUndo);

  moveStack.push({ BoxN: currentBoxb, imgUrl: lastUndo.imgUrl, pos: lastUndo.pos });

  document.querySelector(`.box-${currentBoxb}`).style.backgroundImage = "none";
  currentBoxb = lastUndo.BoxN + lastUndo.pos;
  document.querySelector(`.box-${currentBoxb}`).style.backgroundImage = lastUndo.imgUrl;

  document.querySelector(`.box-${currentBoxb}`).addEventListener('click', clickHandler);
  reset();
  buttonreset();
}}
document.getElementById('undoButton').onclick = undo;
document.getElementById('redoButton').onclick = redo;
}
  
var pos = [10,12,13,15];
var x=pos[1];
var y=pos[0];
var z=pos[2];
console.log(z);
var o = pos[3];


document.querySelector(`.box-${x}`).addEventListener('click', setupObjectMovement(x, "url('assests/CANON1.svg')"));
document.querySelector(`.box-${y}`).addEventListener('click', setupObjectMovement(y, "url('assests/shield.png')"));
document.querySelector(`.box-${z}`).addEventListener('click', setupObjectMovement(z, "url('assests/rok1.svg')"));
document.querySelector(`.box-${o}`).addEventListener('click', setupObjectMovement(o, "url('assests/tri.svg')"));


function leu(l){
  if (team !== "a") return;
document.querySelector(`.box-${l}`).addEventListener('click', function(event){
document.querySelectorAll(".but")[0].style.visibility="visible";
document.querySelectorAll(".but")[1].style.visibility="visible";
document.querySelectorAll(".xv")[0].style.visibility="hidden";
document.querySelectorAll(".xv")[1].style.visibility="hidden";
document.querySelectorAll(".xvb")[0].style.visibility="hidden";
document.querySelectorAll(".xvb")[1].style.visibility="hidden";
document.querySelectorAll(".butb")[0].style.visibility="hidden";
document.querySelectorAll(".butb")[1].style.visibility="hidden";
});
}
leu(13);
var rok=0;
function but1(direction) {
  findDivWithImage();
let  div=inp[0];
if (direction === 'right' && document.querySelector(`.box-${div}`).style.backgroundImage.includes("rok.svg") && team=="a" && !Reached1) {
document.querySelector(`.box-${div}`).style.backgroundImage = "url('assests/rok1.svg')";
rok=0;
blue();
reset();
Shoot();
startTeamBTimer();
team="b";
teampause=team;
document.querySelectorAll(".but")[0].style.visibility="hidden";
   document.querySelectorAll(".but")[1].style.visibility="hidden"; 
} else if (direction === 'left'&& document.querySelector(`.box-${div}`).style.backgroundImage.includes("rok1.svg") && team=="a" && !Reached1) {
console.log(1);
document.querySelector(`.box-${div}`).style.backgroundImage = "url('assests/rok.svg')";
rok=1;
blue();
reset();
Shoot();
startTeamBTimer();
team="b";
teampause=team;
document.querySelectorAll(".but")[0].style.visibility="hidden";
   document.querySelectorAll(".but")[1].style.visibility="hidden"; 
}
}

function visible(){
  if (team !== "a") return;
    document.querySelectorAll(".xv")[0].style.visibility="visible";
    document.querySelectorAll(".xv")[1].style.visibility="visible";
    document.querySelectorAll(".but")[0].style.visibility="hidden";
   document.querySelectorAll(".but")[1].style.visibility="hidden"; 
   document.querySelectorAll(".xvb")[0].style.visibility="hidden";
   document.querySelectorAll(".xvb")[1].style.visibility="hidden";
   document.querySelectorAll(".butb")[0].style.visibility="hidden";
   document.querySelectorAll(".butb")[1].style.visibility="hidden"; 
  // leu(inp[0]);   
}

var tri=15;
function click(){
  document.querySelector(`.box-${tri}`).addEventListener('click', visible);
  for (let i = 0; i <= 63; i++) {
    if (i === tri) {
        continue; //skoip tr
    }
    document.querySelector(`.box-${i}`).removeEventListener('click', visible);
}}

click();

let rotation = 0;
if(rotation==360 || rotation==-360){
  rotation=0;
}
function rotateLeft() {
  if(team=="a" && !Paused && !Reached){
  rotation -= 90; 
  if(rotation==360 || rotation==-360){
    rotation=0;
  }
}
  updateRotation(tri,1);
  console.log(rotation)
}

function rotateRight() {
  if(team=="a" && !Paused && !Reached){
  rotation += 90; 
  if(rotation==360 || rotation==-360){
    rotation=0;}
  }
  updateRotation(tri,1);
  console.log(rotation)
}

function updateRotation(lol,pi) {
  if(team=="a" && !Paused && !Reached1){
    console.log(rotation)
  document.querySelector(`.box-${lol}`).style.transform = `rotate(${rotation}deg)`;
  console.log(rotationb);
  tri=lol;
  blue();
  click();
  reset();
  Shoot();
  if(pi==1){
  startTeamBTimer();
  team="b";
  teampause=team;}
  document.querySelectorAll(".xv")[0].style.visibility="hidden";
document.querySelectorAll(".xv")[1].style.visibility="hidden";}

}

/////////////////////////TIMERRRRRRRRRRR/////////////
let teamATime = 200; // Initial time for Team A in seconds
let teamBTime = 200; // Initial time for Team B in seconds
let currentTeam = 'A'; // Current team ('A' or 'B')
let teamATimer, teamBTimer;
let Paused = false;
let teamPause; // To keep track of the team when paused

// Function to start the timer for Team A
function startTeamATimer() {
    clearInterval(teamBTimer); // Clear Team B's timer if running
    teamATimer = setInterval(() => {
        if (!Paused&& team=="a") {
            teamATime--;
            document.getElementById('teamATime').textContent = teamATime;
            if (teamATime <= 0) {
                clearInterval(teamATimer);
                console.log(HISTORYA,HISTORYB);
                let myArrayStringA = JSON.stringify(HISTORYA);
                let myArrayStringB = JSON.stringify(HISTORYB);
               localStorage.setItem('myArrayA', myArrayStringA);
               localStorage.setItem('myArrayB', myArrayStringB);
               location.reload();
                alert('Team A\'s time is up! Team B wins.');
               
            }
        }
    }, 1000);
}

// Function to start the timer for Team B
function startTeamBTimer() {
    clearInterval(teamATimer); // Clear Team A's timer if running
    teamBTimer = setInterval(() => {
        if (!Paused && team=="b") {
            teamBTime--;
            document.getElementById('teamBTime').textContent = teamBTime;
            if (teamBTime <= 0) {
                clearInterval(teamBTimer);
                console.log(HISTORYA,HISTORYB);
                let myArrayStringA = JSON.stringify(HISTORYA);
                let myArrayStringB = JSON.stringify(HISTORYB);
               localStorage.setItem('myArrayA', myArrayStringA);
               localStorage.setItem('myArrayB', myArrayStringB);
               location.reload();
                alert('Team B\'s time is up! Team A wins.');
               
            }
        }
    }, 1000);
}

// Initial setup 
startTeamATimer();

// Function to resume the
function resumeTimers() {
    if (team === "a") {
      //  startTeamATimer();
    } else if (team === "b") {
      //  startTeamBTimer();
    }
}

// 
function pauseGame() {
  if (!Paused) {
      Paused = true;
      teampause = team; // Store the current team
  }
}

function resumeGame() {
  if (Paused) {
      Paused = false;
      team = teampause; // Restore the paused team state
      resumeTimers();
  }
}





////////////////////////////////////////////////////////////////////////////////////////// SIDE BBB/////////////////////////////////////




function moveRb(Boxb ,yok ) {

  ff=1;
  kk=0;
  pp=0;
  tt=0;
 document.querySelector(`.box-${Boxb - 1}`).style.backgroundColor = "#64c5e6";
 if(Boxb + 1<=63){
 document.querySelector(`.box-${Boxb + 1}`).style.backgroundColor = "#64c5e6";}
 // Add an event listener to the left box
 document.querySelector(`.box-${Boxb}`).removeEventListener('click', clickHandlerb);

     document.querySelector(`.box-${Boxb}`).style.backgroundImage = "none";
     document.querySelector(`.box-${Boxb + (yok)}`).style.backgroundImage = "url('assests/canon2.svg')";
      // Push the current state to the moveStack for undo
    moveStackR.push({ Boxb: Boxb, yok: yok });
    // Clear the redoStack on a new move
    redoStackR = [];
     Boxb= Boxb + (yok);
     currentBoxb =Boxb;
     HISTORYB.push(currentBoxb);
     playMoveSound();
    // pos = Boxc;
     //console.log(4554)
     document.querySelector(`.box-${Boxb}`).addEventListener('click', clickHandlerb);
     reset1();
     Shoot1();
     buttonreset();
     startTeamATimer();
    team = "a";
    teampause=team;
   
}

function playMoveSound() {
  const moveSound = document.getElementById('moveSound');
  moveSound.play();
}


var currentBoxb = 63;
var moveStackR = [];
var redoStackR = [];

document.querySelector(`.box-${currentBoxb}`).addEventListener('click', clickHandlerb);

function highlightAdjacentBoxesb(Boxb) {
//console.log(55)
//console.log(Boxb);
if(Boxb+1<=63){
var backgroundImage1 = document.querySelector(`.box-${Boxb+1}`).style.backgroundImage;}
else{
  var backgroundImage1 = "none"}
var backgroundImage2 = document.querySelector(`.box-${Boxb-1}`).style.backgroundImage;
var left = backgroundImage2.includes("none");
var right = backgroundImage1.includes("none");
blue();
if (Boxb - 1 > 55 && left ) {
console.log(8778);
document.querySelector(`.box-${Boxb - 1}`).style.backgroundColor = "green";
}
if (Boxb + 1 <= 63 && right) {
document.querySelector(`.box-${Boxb + 1}`).style.backgroundColor = "green";}


function Removeb(){
if(Boxb - 1>55 ){
document.querySelector(`.box-${Boxb - 1}`).removeEventListener('click', leftClickListenerb);
if (Boxb + 1 <= 63){
document.querySelector(`.box-${Boxb + 1}`).removeEventListener('click', rightClickListenerb);}

}else{
document.querySelector(`.box-${Boxb + 1}`).removeEventListener('click', rightClickListenerb);
}
}

function leftClickListenerb(event) {
console.log(33223)
if (Boxb - 1 > 55) {
  document.querySelector(`.box-${Boxb - 1}`).style.backgroundColor = "#64c5e6";
}if(Boxb+1<=63){
document.querySelector(`.box-${Boxb + 1}`).style.backgroundColor = "#64c5e6";}
if (Boxb >= 55 && left) {
moveRb(Boxb,-1);}
Removeb(Boxb);
}

function rightClickListenerb(event) {
if (Boxb - 1 >=55) {
  document.querySelector(`.box-${Boxb - 1}`).style.backgroundColor = "#64c5e6";
}if(Boxb+1<=63){
document.querySelector(`.box-${Boxb + 1}`).style.backgroundColor = "#64c5e6";}
if (Boxb < 63 && right) {
moveRb(Boxb , 1);  } 
Removeb(Boxb);
                                         
}

if (Boxb - 1 > 55) {
console.log(9090809)
document.querySelector(`.box-${Boxb - 1}`).addEventListener('click', leftClickListenerb);
}
if (Boxb + 1 <= 63) {
console.log(7900)
document.querySelector(`.box-${Boxb + 1}`).addEventListener('click', rightClickListenerb);

}
}
function clickHandlerb(event) {
  if (team !== "b" || Paused || Reached) return;
//console.log(event.target.className);
var Boxb = parseInt(event.target.className.match(/\d+/)[0], 10);
highlightAdjacentBoxesb(Boxb);
}

var ff=0;
var kk=0;

function undoR() {
  console.log(ff)
if(ff){
  console.log(ff)
    if (moveStackR.length === 0) return;
    const lastMove = moveStackR.pop();

    // Store the current position before undo for redo purposes
    redoStackR.push({ Boxb: lastMove.Boxb, yok: lastMove.yok });
    console.log(redoStackR);
    document.querySelector(`.box-${currentBoxb}`).style.backgroundImage = "none";
    currentBoxb = lastMove.Boxb;
    document.querySelector(`.box-${currentBoxb}`).style.backgroundImage = "url('assests/canon2.svg')";
    document.querySelector(`.box-${currentBoxb}`).addEventListener('click', clickHandlerb);
    reset1();
    buttonreset();
}
}
function redoR() {
  if(ff){
    if (redoStackR.length === 0) return;

    const lastUndo = redoStackR.pop();
    console.log(lastUndo);
    moveStackR.push({ Boxb: currentBoxb, yok: lastUndo.yok });

    document.querySelector(`.box-${currentBoxb}`).style.backgroundImage = "none";
    currentBoxc = lastUndo.Boxb + lastUndo.yok;
    document.querySelector(`.box-${currentBoxb}`).style.backgroundImage = "url('assests/canon2.svg')";
    document.querySelector(`.box-${currentBoxb}`).addEventListener('click', clickHandlerb);
    reset1();
    buttonreset();

  }
}
document.getElementById('undoButtonR').addEventListener('click', undoR);
document.getElementById('redoButtonR').addEventListener('click', redoR);


    
//---------------------------------------------------------------------------------------------------------------------------------------------
//function titan(){
var lolb=0;
function setupObjectMovementb(BoxNb, imgUrlb) {

console.log(78);
document.querySelector(`.box-${BoxNb}`).addEventListener('click', clickHandlerb);

function moveb(BoxNb,imgUrlb,posu) {
  ff=0;
kk=1;
countk=0;
pp=0;
tt=0;
imgUrlb = document.querySelector(`.box-${BoxNb}`).style.backgroundImage;
 blue();
  document.querySelector(`.box-${BoxNb}`).removeEventListener('click', clickHandlerb);
      document.querySelector(`.box-${BoxNb}`).style.backgroundImage = "none";
      document.querySelector(`.box-${BoxNb +(posu)}`).style.backgroundImage = imgUrlb;
      moveStackR.push({ BoxNb: BoxNb, imgUrlb: imgUrlb, posu: posu });
      redoStackR = [];
      BoxNb = BoxNb +(posu);
      updateb(BoxNb,imgUrlb);
      currentBoxb =BoxNb;
      HISTORYB.push(BoxNb);
      playMoveSound();
      if (imgUrlb === 'url("assests/tri2.svg")' ) {
        ob=BoxNb;
        lolb=BoxNb;
        updateRotationb(lolb,0);
        document.querySelector(`.box-${BoxNb-(posu)}`).style.transform = 'rotate(0deg)'; 
        }
       //flags.shield=1;
       reset();
       Shoot1();
       buttonreset();
        startTeamATimer();
        team="a";
        teampause=team;
        upButtonb.disabled = true; 
        leftButtonb.disabled = true; 
        rightButtonb.disabled = true; 
        downButtonb.disabled = true; 
        

}
function updateb(BoxNb,imgUrlb){
  if (imgUrlb === 'url("assests/shield2.svg")' ) {
    xb=BoxNb;
  } else if (imgUrlb === 'url("assests/castle2.svg")') {
    yb=BoxNb;
}
else if (imgUrlb === 'url("assests/rok2.svg")' || imgUrlb === 'url("assests/rok3.svg")'  ) {
  zb=BoxNb;
  if(rokb==1)document.querySelector(`.box-${BoxNb}`).style.backgroundImage ='url("assests/rok3.svg")';
  leub(BoxNb);
}
  document.querySelector(`.box-${BoxNb}`).addEventListener('click', clickHandlerb);
}

function swap2(pos2, img, BoxNb1) {
  console.log(78)
  blue();
  buttonHandlersb = [];
  console.log(78)
  document.querySelector(`.box-${BoxNb1}`).removeEventListener('click', clickHandlerb);
  document.querySelector(`.box-${BoxNb1 + pos2}`).removeEventListener('click', clickHandlerb);

  
  const newPosImage = document.querySelector(`.box-${BoxNb1 + pos2}`).style.backgroundImage;
console.log(newPosImage);
  // Update positions and images
  switch (newPosImage) {
    case 'url("assests/shield2.svg")':
      xb = BoxNb1;
      console.log(xb)
      setupObjectMovementb(xb, "url('assests/shield2.svgg')");
      break;
    case 'url("assests/tri2.svg")':
      ob = BoxNb1;
      lolb = BoxNb1;
      updateRotationb(lolb, 0);
      document.querySelector(`.box-${BoxNb1 +(pos2)}`).style.transform = 'rotate(0deg)';
      setupObjectMovementb(ob, "url('assests/tri2.svg')");
      break;
  }

  document.querySelector(`.box-${BoxNb1}`).style.backgroundImage = newPosImage;
  document.querySelector(`.box-${BoxNb1 + pos2}`).style.backgroundImage = img;
 // if (rok == 1) document.querySelector(`.box-${BoxNb + pos2}`).style.backgroundImage = "url('assests/rok3.svg')";
  zb = BoxNb1 + pos2;
  console.log("New Box:", zb);

  // Add event listeners to new positions
  if(rokb==0)setupObjectMovementb(zb, "url('assests/rok2.svg')");
  if (rokb == 1) setupObjectMovementb(zb, "url('assests/rok3.svg')");
  document.querySelector(`.box-${BoxNb1 + pos2}`).addEventListener('click', clickHandlerb);
  document.querySelector(`.box-${BoxNb1}`).addEventListener('click', clickHandlerb);
  // Reset states and start timers

  reset();
  Shoot1();
  buttonreset();
  startTeamATimer();
  team = "a";
  teampause = team;
  upButtonb.disabled = true; 
  leftButtonb.disabled = true; 
  rightButtonb.disabled = true; 
  downButtonb.disabled = true; 
}

//
function swapDirection1(direction, BoxN) {
  buttonHandlersb = [];
  console.log("Button Handlers Cleared:", buttonHandlersb);

  let img;
  switch (direction) {
    case 'left':
      img = document.querySelector(`.box-${BoxN }`).style.backgroundImage;
      console.log(90)
      swap2(-1, img, BoxN);
      break;
    case 'right':
      img = document.querySelector(`.box-${BoxN}`).style.backgroundImage;
      swap2(1, img, BoxN);
      break;
    case 'up':
      img = document.querySelector(`.box-${BoxN}`).style.backgroundImage;
      swap2(-8, img, BoxN);
      break;
    case 'down':
      img = document.querySelector(`.box-${BoxN}`).style.backgroundImage;
      swap2(8, img, BoxN);
      break;
    default:
      break;
  }
}

var upButtonb = document.getElementById('u');
var leftButtonb = document.getElementById('d');
var rightButtonb = document.getElementById('o');
var downButtonb = document.getElementById('n');

var buttonHandlersb = [];


function highlightAdjacentBoxesb(BoxNb, imgUrlb) {
  imgUrlb = document.querySelector(`.box-${BoxNb}`).style.backgroundImage;
blue();
 // if(inp[8]===undefined){
   // if (imgUrlb==="url('assests/tri2.svg')") imgUrlb=document.querySelector(`.box-${BoxNb}`).style.backgroundImage;
  //}
  if(BoxNb+1<=63){
    var backgroundImage1 = document.querySelector(`.box-${BoxNb+1}`).style.backgroundImage;
  } else{
    var backgroundImage1="notexist";
  }
  if(BoxNb-1>=0){ var backgroundImage2 = document.querySelector(`.box-${BoxNb-1}`).style.backgroundImage;}
  else{
    var backgroundImage2="notexist";}
  if(BoxNb-8>=0){
  var backgroundImage4 = document.querySelector(`.box-${BoxNb-8}`).style.backgroundImage;
} else{
  var backgroundImage4="notexist";
}
if(BoxNb+8<=63){
  var backgroundImage3 = document.querySelector(`.box-${BoxNb+8}`).style.backgroundImage;}
  else{
    var backgroundImage3="notexist";}


  var leftb = (backgroundImage2.includes("none") );
  var rightb =( backgroundImage1.includes("none") );
  var topb = (backgroundImage4.includes("none") );
  var downb = (backgroundImage3.includes("none"));




    function upButtonH1() {
      swapDirection1('up', BoxNb);
     
  }

  function leftButtonH1() {
    console.log(0);
      swapDirection1('left', BoxNb);
     
  }

  function rightButtonH1() {
      swapDirection1('right', BoxNb);
     
  }

  function downButtonH1() {
      swapDirection1('down', BoxNb);
     
  }
  buttonHandlersb = [upButtonH1, leftButtonH1, rightButtonH1, downButtonH1];

  if (!topb  && !(backgroundImage4.includes("castle2.svg")) && !(backgroundImage4.includes("CANON1.svg"))  && (imgUrlb === 'url("assests/rok2.svg")' || imgUrlb === 'url("assests/rok3.svg")')) {
      upButtonb.disabled = false;
      upButtonb.addEventListener('click', upButtonH1);
  } else {
      upButtonb.disabled = true;
      upButtonb.removeEventListener('click', upButtonH1);
  }

  if (!leftb && !(backgroundImage2.includes("castle2.svg")) && !(backgroundImage2.includes("CANON1.svg"))  && (imgUrlb === 'url("assests/rok2.svg")' || imgUrlb === 'url("assests/rok3.svg")')) {
      leftButtonb.disabled = false;
      console.log(1);
      leftButtonb.addEventListener('click', leftButtonH1);
  } else {
      leftButtonb.disabled = true;
      leftButtonb.removeEventListener('click', leftButtonH1);
  }

  if (!rightb  && !(backgroundImage1.includes("castle2.svg")) && !(backgroundImage1.includes("CANON1.svg"))  && (imgUrlb === 'url("assests/rok2.svg")' || imgUrlb === 'url("assests/rok3.svg")')) {
      rightButtonb.disabled = false;
      rightButtonb.addEventListener('click', rightButtonH1);
  } else {
      rightButtonb.disabled = true;
      rightButtonb.removeEventListener('click', rightButtonH1);}


    
      if (!downb   && !(backgroundImage3.includes("castle2.svg")) && !(backgroundImage3.includes("CANON1.svg"))  &&(imgUrlb === 'url("assests/rok1.svg")' || imgUrlb === 'url("assests/rok.svg")')) {
        downButtonb.addEventListener('click',downButtonH1 );
        downButtonb.disabled = false;
    } else {
      downButtonb.disabled = true;
      downButtonb.removeEventListener('click', downButtonH1);}
   
/////////////////////////////////////////

  imgUrlb = document.querySelector(`.box-${BoxNb}`).style.backgroundImage;
blue();
console.log(imgUrlb);
if (BoxNb - 1 >= 0 && leftb) {
document.querySelector(`.box-${BoxNb - 1}`).style.backgroundColor = "green";
}
if (BoxNb + 1 <= 63 && rightb) {
document.querySelector(`.box-${BoxNb+ 1}`).style.backgroundColor = "green";
}

if (BoxNb - 8 >= 0 && topb) {
document.querySelector(`.box-${BoxNb - 8}`).style.backgroundColor = "green";
}
if (BoxNb + 8 <= 63 && downb) {
document.querySelector(`.box-${BoxNb + 8}`).style.backgroundColor = "green";
}

function Removeb(){
for(let i =0; i<=63; i++){
  document.querySelector(`.box-${i}`).removeEventListener('click', leftClickListenerb);
  document.querySelector(`.box-${i}`).removeEventListener('click', rightClickListenerb);
  document.querySelector(`.box-${i}`).removeEventListener('click', upClickListenerb);
  document.querySelector(`.box-${i}`).removeEventListener('click', downClickListenerb);
}
}


function leftClickListenerb(event) {
  console.log(imgUrlb);
if(document.querySelector(`.box-${BoxNb - 1}`).style.backgroundColor === "green"){
  if (BoxNb>0 && leftb) {
moveb(BoxNb , imgUrlb ,-1);}}
Removeb(BoxNb , imgUrlb);
}

function rightClickListenerb(event) {
if(document.querySelector(`.box-${BoxNb + 1}`).style.backgroundColor === "green"){
  if (BoxNb<=62 && rightb) {
moveb(BoxNb , imgUrlb,1);}}

Removeb(BoxNb , imgUrlb);
                                         
}

function upClickListenerb(event) {
  console.log(imgUrlb);
if(document.querySelector(`.box-${BoxNb - 8}`).style.backgroundColor === "green"){
  if(BoxNb>=7 && topb){
moveb(BoxNb , imgUrlb , -8);}}
Removeb(BoxNb, imgUrlb);

}

function downClickListenerb(event) {
if(document.querySelector(`.box-${BoxNb + 8}`).style.backgroundColor === "green"){
  if (BoxNb <=55 && downb ){
moveb(BoxNb , imgUrlb , +8);}}
Removeb(BoxNb , imgUrlb);

}
Removeb();
if (BoxNb - 1 >= 0) {
document.querySelector(`.box-${BoxNb - 1}`).addEventListener('click', leftClickListenerb);
}
if (BoxNb + 1 <= 63) {
document.querySelector(`.box-${BoxNb + 1}`).addEventListener('click', rightClickListenerb);
}
if (BoxNb - 8 >= 0) {
document.querySelector(`.box-${BoxNb- 8}`).addEventListener('click', upClickListenerb);
}
if (BoxNb + 8 <= 63) {
document.querySelector(`.box-${BoxNb + 8}`).addEventListener('click', downClickListenerb);
}

}
function clickHandlerb(event) {
  event.stopPropagation();
  console.log(team);
  if (team !== "b" || Paused || Reached) return;
var BoxNb = parseInt(event.target.className.match(/\d+/)[0], 10);
var backgroundImage = document.querySelector(`.box-${BoxNb}`).style.backgroundImage;
if (backgroundImage.includes("shield2.svg") || backgroundImage.includes("castle2.svg") || backgroundImage.includes("rok2.svg") || backgroundImage.includes("rok3.svg") || backgroundImage.includes("tri2.svg") ) {
console.log(1);
highlightAdjacentBoxesb(BoxNb, imgUrlb);

}
}
var countk=0;


function undoR() {
  console.log(kk);
  if (kk && countk == 0) { // Check if tt is true and countk is 0
      if (moveStackR.length === 0) return;
      countk = 1; // Set countk to 1 after the first execution
      const lastMove = moveStackR.pop();
      console.log(kk);
      // Store the current position before undo for redo purposes
      redoStackR.push({ BoxNb: lastMove.BoxNb, imgUrlb: lastMove.imgUrlb, posu: lastMove.posu });
      console.log(lastMove);
      console.log(currentBoxb)
      document.querySelector(`.box-${currentBoxb}`).style.backgroundImage = "none";
      currentBoxb = lastMove.BoxNb;
      console.log(currentBoxb);
      document.querySelector(`.box-${currentBoxb}`).style.backgroundImage = lastMove.imgUrlb;

      document.querySelector(`.box-${currentBoxb}`).addEventListener('click', clickHandlerb);
      reset1();
      buttonreset();
  }
}

function redoR() {
if (kk){
if (redoStackR.length === 0) return;

const lastUndo = redoStackR.pop();
console.log(lastUndo);

moveStackR.push({ BoxNb: currentBoxb, imgUrlb: lastUndo.imgUrlb, posu: lastUndo.posu });

document.querySelector(`.box-${currentBoxb}`).style.backgroundImage = "none";
currentBoxb = lastUndo.BoxNb + lastUndo.posu;
document.querySelector(`.box-${currentBoxb}`).style.backgroundImage = lastUndo.imgUrlb;

document.querySelector(`.box-${currentBoxb}`).addEventListener('click', clickHandlerb);
reset1();
buttonreset();
}}
document.getElementById('undoButtonR').onclick = undoR;
document.getElementById('redoButtonR').onclick = redoR;
} 

var posb = [49,52,54,50];
var xb=posb[1];
var yb=posb[0];
var zb=posb[2];
var ob=posb[3];

document.querySelector(`.box-${xb}`).addEventListener('click', setupObjectMovementb(xb, "url('assests/shield2.svg')"));
document.querySelector(`.box-${yb}`).addEventListener('click', setupObjectMovementb(yb,"url('assests/castle2.svg')" ));
document.querySelector(`.box-${zb}`).addEventListener('click', setupObjectMovementb(zb, "url('assests/rok2.svg')"));
document.querySelector(`.box-${ob}`).addEventListener('click', setupObjectMovementb(ob, "url('assests/tri2.svg')"));


    
function leub(lb){
  console.log(lb);
  if (team !== "b") return;
  document.querySelector(`.box-${lb}`).addEventListener('click', function(event){
  document.querySelectorAll(".butb")[0].style.visibility="visible";
  document.querySelectorAll(".butb")[1].style.visibility="visible";
  document.querySelectorAll(".xvb")[0].style.visibility="hidden";
  document.querySelectorAll(".xvb")[1].style.visibility="hidden";
  document.querySelectorAll(".but")[0].style.visibility="hidden";
  document.querySelectorAll(".but")[1].style.visibility="hidden";
  document.querySelectorAll(".xv")[0].style.visibility="hidden";
  document.querySelectorAll(".xv")[1].style.visibility="hidden"; 
  });
  }
  leub(54);
  var rokb=0;
  function but1b(direction) {
  findDivWithImage();
  let  divb=inp[7];
  if (direction === 'right' && document.querySelector(`.box-${divb}`).style.backgroundImage.includes("rok3.svg")&& team=="b" && !Reached) {
 // console.log(1);
  
  document.querySelector(`.box-${divb}`).style.backgroundImage = "url('assests/rok2.svg')";
  rokb=0;
  blue();
  reset();
  Shoot1();
  startTeamATimer();
  team="a";
  teampause=team;
  document.querySelectorAll(".butb")[0].style.visibility="hidden";
     document.querySelectorAll(".butb")[1].style.visibility="hidden"; 
  } else if (direction === 'left'&& document.querySelector(`.box-${divb}`).style.backgroundImage.includes("rok2.svg") && team=="b" && !Reached) {
  console.log(1);
  document.querySelector(`.box-${divb}`).style.backgroundImage = "url('assests/rok3.svg')";
  rokb=1;
  reset();
  Shoot1();
  startTeamATimer();
  team="a";
  teampause=team;
  blue();
  document.querySelectorAll(".butb")[0].style.visibility="hidden";
   document.querySelectorAll(".butb")[1].style.visibility="hidden"; 
    
  }
  }
  



  function visibleb(){
    if (team !== "b") return;
      document.querySelectorAll(".xvb")[0].style.visibility="visible";
      document.querySelectorAll(".xvb")[1].style.visibility="visible";
      document.querySelectorAll(".butb")[0].style.visibility="hidden";
     document.querySelectorAll(".butb")[1].style.visibility="hidden"; 
     document.querySelectorAll(".but")[0].style.visibility="hidden";
     document.querySelectorAll(".but")[1].style.visibility="hidden"; 
     document.querySelectorAll(".xv")[0].style.visibility="hidden";
     document.querySelectorAll(".xv")[1].style.visibility="hidden"; 
    // console.log(inpb[0])
    // leub(inp[7]);   
  }
  var trib=50;
  function clickb(){
    document.querySelector(`.box-${trib}`).addEventListener('click', visibleb);
    for (let i = 0; i <= 63; i++) {
      if (i === trib) {
          continue; //skoip tr
      }
      document.querySelector(`.box-${i}`).removeEventListener('click', visibleb);
  }}
  
  clickb();
  
  let rotationb = 0;
  if(rotationb==360 || rotationb==-360){
    rotationb=0;
  }
  function rotateLeftb() {
    if(team=="b" && !Paused && !Reached){
    rotationb -= 90; 
    if(rotationb==360 || rotationb==-360){
      rotationb=0;}
    }
    updateRotationb(trib,1);
    console.log(rotationb)
  }
  
  function rotateRightb() { 
    if(team=="b" && !Paused && !Reached){
    rotationb += 90; 
    if(rotationb==360 || rotationb==-360){
      rotationb=0;}
    }
    updateRotationb(trib,1);
    console.log(rotationb)
  }
  
  function updateRotationb(lolb,p) {
    if(team=="b" && !Paused && !Reached){
    document.querySelector(`.box-${lolb}`).style.transform = `rotate(${rotationb}deg)`;
    console.log(rotationb)
    trib=lolb;
    blue();
    clickb();
    if(p==1){
    startTeamATimer();
    reset();
    Shoot1();
    team="a";
    teampause=team;}}
    document.querySelectorAll(".xvb")[0].style.visibility="hidden";
  document.querySelectorAll(".xvb")[1].style.visibility="hidden";
    
  }
  
  
//////////////BULLLLET2////////////////////////////////////////////////////////////

document.querySelector('.bullet1').style.top = '810px';
document.querySelector('.bullet1').style.left = '1070px';
var bullet1 = document.querySelector('.bullet1');
function centerBulletInDiv1(toti, m) {
  let targetDiv = document.querySelector(`.box-${toti}`);
  let bulletRect = bullet1.getBoundingClientRect();
  let centeredLeft = targetDiv.offsetLeft + (targetDiv.offsetWidth / 2) - (bulletRect.width / 2);
  let centeredTop = targetDiv.offsetTop + (targetDiv.offsetHeight / 2) - (bulletRect.height / 2);
  bullet1.style.left = `${centeredLeft}px`;
  bullet1.style.top = `${centeredTop + m}px`; 
}


setTimeout(() => {
  centerBulletInDiv1(63,0);
}, 10);




var posx1 = document.querySelector('.bullet1').style.top;
var numberX1 = parseInt(posx1, 10);
var currentAnimationFrame1;
var flags1 = {
  s: 1,
  flag: 1,
  shield: 1,
  collision: 0,
  direc: ""
};


function Shoot1() {
  numberX1 -= 7;
  document.querySelector('.bullet1').style.top = numberX1 + 'px';
  console.log(1);
  if (flags1.shield == 0) {
    reset1();
    return;
  }
  if (flags1.s === 1) {
    callGameFunctions1([3,2,5, 6],6);
    collison1(0,1,5);
    collison1(7,8,5);
    
  }

  const a1 = (document.querySelector(`.box-${inp[0]}`).style.backgroundImage.includes("rok1.svg") && flags1.flag == 0);
  const c1 = (document.querySelector(`.box-${inp[0]}`).style.backgroundImage.includes("rok.svg") && flags1.flag == 0);
  if(inp[1]!== undefined){
  var b1 = (document.querySelector(`.box-${inp[1]}`).style.backgroundImage.includes("tri.svg")&& flags1.flag == 2);}
  
  const d1 = (document.querySelector(`.box-${inp[7]}`).style.backgroundImage.includes("rok2.svg") && flags1.flag == 3);
  const e1 = (document.querySelector(`.box-${inp[7]}`).style.backgroundImage.includes("rok3.svg") && flags1.flag == 3);
  if(inp[8]!== undefined){
  var f1 = (document.querySelector(`.box-${inp[8]}`).style.backgroundImage.includes("tri2.svg")&& flags1.flag == 5);}
  
  //console.log(c);

  if (numberX1 < 50) {
    document.querySelector('.bullet1').style.visibility = "hidden";
    setTimeout(function() {
      document.querySelector('.bullet1').style.visibility = "visible";
      reset1();
      numberX1 = 810;
    }, 500);
  } else if (flags1.s === 1) {
    currentAnimationFrame1 = requestAnimationFrame(Shoot1);
    Reached1=1;
  }
  if (flags1.s == 0) {
    if (c1 || e1) {
      moveRightbullet1();
      flags1.direc = "right";
      flags1.collision = 0;
      console.log(1);
    } else if (a1 || d1) {
      moveLeftbullet1();
      flags1.direc = "left";
      flags1.collision = 0;
    } else if ((b1 && (rotation == -270 || rotation == 90)) || (f1 && (rotationb == -270 || rotationb == 90))){
      moveRightbullet1();
      console.log(4511)
      flags1.direc = "right";
      flags1.collision = 0;
      console.log(1);
    } else if( (b1 && (rotation == -180 || rotation == 180))|| (f1 && (rotationb == -180 || rotationb == 180))){
      moveLeftbullet1();
      flags1.direc = "left";
      flags1.collision = 0;
    }
    else if (b1 || f1) {
      if(b1)document.querySelector(`.box-${inp[1]}`).style.backgroundImage="none";inp=[];
      if(f1)document.querySelector(`.box-${inp[8]}`).style.backgroundImage="none";inp=[];
      reset1();
    }
  }
}
function callGameFunctions1(gameNumbers,oi) {
  gameNumbers.forEach(function(gameNumber) {
    game1(gameNumber,oi);
  });
}

function reset1() {
  console.log(8989)
 // console.log(document.querySelector(`.box-${inp[1]}`).style.backgroundImage.includes("tri.svg"))
  cancelAnimationFrame(currentAnimationFrame1);
  findDivWithImage();
  //console.log(inp[1]);
  //console.log(document.querySelector(`.box-${15}`).style.backgroundImage.includes("tri.svg"))
  centerBulletInDiv1(inp[9],0);
  bullet1.innerHTML= `<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  width="50px" height="50px" viewBox="0 0 512 512"  xml:space="preserve" transform="rotate(0 0 5)">

 
<g>
 <path class="st0" d="M376.531,197.984c-0.031-19.719-3.688-41.172-9.844-62.703c-9.281-32.25-24.156-64.484-42.406-89.734
   c-9.188-12.609-19.188-23.516-30.375-31.734c-5.625-4.078-11.531-7.5-17.875-9.938C269.719,1.438,262.969,0,256,0
   c-9.297,0-18.172,2.563-26.234,6.625c-14.141,7.188-26.328,18.781-37.391,32.75c-16.531,21.031-30.438,47.875-40.563,75.813
   c-10.063,27.984-16.297,56.938-16.344,82.797C135.469,263.938,135.5,512,135.5,512h241.031
   C376.531,512,376.516,259.875,376.531,197.984z M167.688,479.781c0-0.766,0-1.469,0-2.313c0-11.125,0-28.313,0-53.469h176.625
   c0,27.063,0,44.75,0,55.781H167.688z M344.313,391.797H167.688c0-14.266,0-36.734,0-62.328c0-43.625,0-96.125,0-131.484
   c-0.016-15.641,3.063-34.609,8.594-53.813c8.234-28.859,22.031-58.422,37.516-79.703c7.703-10.656,15.828-19.203,23.297-24.625
   c3.734-2.734,7.281-4.688,10.438-5.906c3.188-1.219,5.953-1.719,8.469-1.719c3.344,0,7.188,0.906,11.75,3.188
   c7.938,3.938,17.469,12.313,26.563,23.906c13.719,17.375,26.516,41.656,35.563,66.813c9.125,25.141,14.469,51.313,14.438,71.859
   C344.313,254.094,344.313,353.156,344.313,391.797z"/>
</g>
</svg>`
  flags1.s = 1;
  flags1.flag= 1;
  flags1.shield= 1;
  flags1.collision= 0;
  flags1.direc="";
  
  var topbottom=807;
  console.log(window.innerWidth)
  if(window.innerWidth<480)  topbottom=400;
  numberX1 = topbottom; 
  console.log(inp[1]==undefined)
  Reached1=0;// Reset top position
  return;
}
//Shoot1();

var countl1=0;
function moveLeftbullet1() {
  console.log(45)
  cancelAnimationFrame(currentAnimationFrame1); 
  bullet1.innerHTML= `<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  width="50px" height="50px" viewBox="0 0 512 512"  xml:space="preserve" transform="rotate(-90 0 5)">

 
<g>
 <path class="st0" d="M376.531,197.984c-0.031-19.719-3.688-41.172-9.844-62.703c-9.281-32.25-24.156-64.484-42.406-89.734
   c-9.188-12.609-19.188-23.516-30.375-31.734c-5.625-4.078-11.531-7.5-17.875-9.938C269.719,1.438,262.969,0,256,0
   c-9.297,0-18.172,2.563-26.234,6.625c-14.141,7.188-26.328,18.781-37.391,32.75c-16.531,21.031-30.438,47.875-40.563,75.813
   c-10.063,27.984-16.297,56.938-16.344,82.797C135.469,263.938,135.5,512,135.5,512h241.031
   C376.531,512,376.516,259.875,376.531,197.984z M167.688,479.781c0-0.766,0-1.469,0-2.313c0-11.125,0-28.313,0-53.469h176.625
   c0,27.063,0,44.75,0,55.781H167.688z M344.313,391.797H167.688c0-14.266,0-36.734,0-62.328c0-43.625,0-96.125,0-131.484
   c-0.016-15.641,3.063-34.609,8.594-53.813c8.234-28.859,22.031-58.422,37.516-79.703c7.703-10.656,15.828-19.203,23.297-24.625
   c3.734-2.734,7.281-4.688,10.438-5.906c3.188-1.219,5.953-1.719,8.469-1.719c3.344,0,7.188,0.906,11.75,3.188
   c7.938,3.938,17.469,12.313,26.563,23.906c13.719,17.375,26.516,41.656,35.563,66.813c9.125,25.141,14.469,51.313,14.438,71.859
   C344.313,254.094,344.313,353.156,344.313,391.797z"/>
</g>
</svg>`// Cancel any ongoing animation
  var leftbullet1 = parseInt(bullet1.style.left);
  leftbullet1 -= 5;
  countl1++; 
  bullet1.style.left = leftbullet1 + 'px';
  flags1.flag = 1;
  flags1.collision= 0;
  //callGameFunctions([ 3,5],38);
  if(countl1>17){
 callGameFunctions1([2,6],38);
  console.log(12);
   collison1(0,1,51);
   collison1(7,8,51);
    countl1=0;
    console.log(flags1.collision)
    if(flags1.collision==1 || flags1.collision==2){flags1.direc="left";gamecollision1(); return;} }
    var leftlimit=330;
    if(window.innerWidth<480) leftlimit=10;
  if (leftbullet1 < leftlimit || flags1.shield == 0) {    reset1();
    countl1=0;
    console.log(1);
    return;
  } else {
    currentAnimationFrame1 = requestAnimationFrame(moveLeftbullet1);
    
  }
}


var countr1=0;
function moveRightbullet1() {
  cancelAnimationFrame(currentAnimationFrame1);
  bullet1.innerHTML= `<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  width="50px" height="50px" viewBox="0 0 512 512"  xml:space="preserve" transform="rotate(90 0 5)">

 
<g>
 <path class="st0" d="M376.531,197.984c-0.031-19.719-3.688-41.172-9.844-62.703c-9.281-32.25-24.156-64.484-42.406-89.734
   c-9.188-12.609-19.188-23.516-30.375-31.734c-5.625-4.078-11.531-7.5-17.875-9.938C269.719,1.438,262.969,0,256,0
   c-9.297,0-18.172,2.563-26.234,6.625c-14.141,7.188-26.328,18.781-37.391,32.75c-16.531,21.031-30.438,47.875-40.563,75.813
   c-10.063,27.984-16.297,56.938-16.344,82.797C135.469,263.938,135.5,512,135.5,512h241.031
   C376.531,512,376.516,259.875,376.531,197.984z M167.688,479.781c0-0.766,0-1.469,0-2.313c0-11.125,0-28.313,0-53.469h176.625
   c0,27.063,0,44.75,0,55.781H167.688z M344.313,391.797H167.688c0-14.266,0-36.734,0-62.328c0-43.625,0-96.125,0-131.484
   c-0.016-15.641,3.063-34.609,8.594-53.813c8.234-28.859,22.031-58.422,37.516-79.703c7.703-10.656,15.828-19.203,23.297-24.625
   c3.734-2.734,7.281-4.688,10.438-5.906c3.188-1.219,5.953-1.719,8.469-1.719c3.344,0,7.188,0.906,11.75,3.188
   c7.938,3.938,17.469,12.313,26.563,23.906c13.719,17.375,26.516,41.656,35.563,66.813c9.125,25.141,14.469,51.313,14.438,71.859
   C344.313,254.094,344.313,353.156,344.313,391.797z"/>
</g>
</svg>` // Cancel any ongoing animation
  var leftbullet1 = parseInt(bullet1.style.left);
  leftbullet1 += 5;
  countr1++;
  console.log(452)
  bullet1.style.left = leftbullet1 + 'px';
  flags1.flag = 1;
  flags1.collision= 0;
 if(countr1>17){
  callGameFunctions1([3, 2, 5, 6],39);
  collison1(0,1,51);
  collison1(7,8,51);
  countr1=0;
  console.log(flags1.collision)
  if(flags1.collision==1 || flags1.collision==2){ flags1.direc="right"; gamecollision1(); return;}} 
  var leftlimit=1070;
  if(window.innerWidth<480) leftlimit=467;
  if (leftbullet1 > leftlimit || flags1.shield == 0) {    reset1();
    countr1=0;
    return;
  } else {
    currentAnimationFrame1 = requestAnimationFrame(moveRightbullet1); 
}
}

var countt1=0;
function moveUpbullet1() {
  bullet1.innerHTML= `<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  width="50px" height="50px" viewBox="0 0 512 512"  xml:space="preserve" transform="rotate(0 0 5)">

 
<g>
 <path class="st0" d="M376.531,197.984c-0.031-19.719-3.688-41.172-9.844-62.703c-9.281-32.25-24.156-64.484-42.406-89.734
   c-9.188-12.609-19.188-23.516-30.375-31.734c-5.625-4.078-11.531-7.5-17.875-9.938C269.719,1.438,262.969,0,256,0
   c-9.297,0-18.172,2.563-26.234,6.625c-14.141,7.188-26.328,18.781-37.391,32.75c-16.531,21.031-30.438,47.875-40.563,75.813
   c-10.063,27.984-16.297,56.938-16.344,82.797C135.469,263.938,135.5,512,135.5,512h241.031
   C376.531,512,376.516,259.875,376.531,197.984z M167.688,479.781c0-0.766,0-1.469,0-2.313c0-11.125,0-28.313,0-53.469h176.625
   c0,27.063,0,44.75,0,55.781H167.688z M344.313,391.797H167.688c0-14.266,0-36.734,0-62.328c0-43.625,0-96.125,0-131.484
   c-0.016-15.641,3.063-34.609,8.594-53.813c8.234-28.859,22.031-58.422,37.516-79.703c7.703-10.656,15.828-19.203,23.297-24.625
   c3.734-2.734,7.281-4.688,10.438-5.906c3.188-1.219,5.953-1.719,8.469-1.719c3.344,0,7.188,0.906,11.75,3.188
   c7.938,3.938,17.469,12.313,26.563,23.906c13.719,17.375,26.516,41.656,35.563,66.813c9.125,25.141,14.469,51.313,14.438,71.859
   C344.313,254.094,344.313,353.156,344.313,391.797z"/>
</g>
</svg>`
  cancelAnimationFrame(currentAnimationFrame1); 
    var topbullet1 = parseInt(bullet1.style.top);
  topbullet1 -= 5;
  countt1++;
  bullet1.style.top = topbullet1+ 'px';
  flags1.flag = 1;
  flags1.collision= 0;
  //callGameFunctions([3, 2, 5, 6]);
 if(countt1>22){
  console.log(56656)
  callGameFunctions1([3, 2, 5, 6],57);
  collison1(0,1,57);
  collison1(7,8,57);
  countt1=0;
  console.log(flags1.collision)
  if(flags1.collision==1 || flags1.collision==2){ flags1.direc="up"; gamecollision1(); return;}} 

  if (topbullet1 < 90 || flags1.shield == 0) {
    reset1();
    console.log(1);
    countt1=0; 
    return;
  } else {
    currentAnimationFrame1 = requestAnimationFrame(moveUpbullet1);
    // Continue moving up
  }
}
var countd1=0;
function moveDownbullet1() {
  cancelAnimationFrame(currentAnimationFrame1); 
  bullet1.innerHTML= `<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  width="50px" height="50px" viewBox="0 0 512 512"  xml:space="preserve" transform="rotate(180 0 5)">

 
<g>
 <path class="st0" d="M376.531,197.984c-0.031-19.719-3.688-41.172-9.844-62.703c-9.281-32.25-24.156-64.484-42.406-89.734
   c-9.188-12.609-19.188-23.516-30.375-31.734c-5.625-4.078-11.531-7.5-17.875-9.938C269.719,1.438,262.969,0,256,0
   c-9.297,0-18.172,2.563-26.234,6.625c-14.141,7.188-26.328,18.781-37.391,32.75c-16.531,21.031-30.438,47.875-40.563,75.813
   c-10.063,27.984-16.297,56.938-16.344,82.797C135.469,263.938,135.5,512,135.5,512h241.031
   C376.531,512,376.516,259.875,376.531,197.984z M167.688,479.781c0-0.766,0-1.469,0-2.313c0-11.125,0-28.313,0-53.469h176.625
   c0,27.063,0,44.75,0,55.781H167.688z M344.313,391.797H167.688c0-14.266,0-36.734,0-62.328c0-43.625,0-96.125,0-131.484
   c-0.016-15.641,3.063-34.609,8.594-53.813c8.234-28.859,22.031-58.422,37.516-79.703c7.703-10.656,15.828-19.203,23.297-24.625
   c3.734-2.734,7.281-4.688,10.438-5.906c3.188-1.219,5.953-1.719,8.469-1.719c3.344,0,7.188,0.906,11.75,3.188
   c7.938,3.938,17.469,12.313,26.563,23.906c13.719,17.375,26.516,41.656,35.563,66.813c9.125,25.141,14.469,51.313,14.438,71.859
   C344.313,254.094,344.313,353.156,344.313,391.797z"/>
</g>
</svg>`
  var topbullet1 = parseInt(bullet1.style.top);
  topbullet1 += 5;
  countd1++;
 bullet1.style.left =  (bullet1.style.left+60) + 'px';
  bullet1.style.top = topbullet1 + 'px';
  flags1.flag = 1;
  flags1.collision= 0;
  if(countd1>22){
    console.log(56656)
    callGameFunctions1([3, 2, 5, 6],57);
    collison1(0,1,57);
    collison1(7,8,57);
    countd=0;
    console.log(flags1.collision)
    if(flags1.collision==1 || flags1.collision==2){ flags1.direc="down";gamecollision1(); return;}}
    var topplimit=830;
    if(window.innerWidth<480) topplimit=400;
  if (topbullet1 > topplimit || flags1.shield == 0) {     reset1();
    console.log(1);
    countd1=0;
    return;
  } else {
    currentAnimationFrame1 = requestAnimationFrame(moveDownbullet1); // Continue moving down
  }
}


function game1(pos,poi){
//console.log(poi)
  let div1 = document.querySelector('.bullet1');
  let bulletPosition = div1.getBoundingClientRect();
  findDivWithImage();
  let divric = document.querySelector(`.box-${inp[pos]}`);
  let inpPosition = divric.getBoundingClientRect();
console.log((Math.abs(Math.abs(inpPosition.top) - Math.abs(bulletPosition.top))));
 if (Math.abs(Math.abs(inpPosition.top) - Math.abs(bulletPosition.top)) < poi && Math.abs(Math.abs(inpPosition.left) - Math.abs(bulletPosition.left)) <= 38.5) {
      console.log('Collision detected! Stopping shooting.');
      if(pos==2||pos==6){
        console.log(HISTORYA,HISTORYB);
        playMoveSound(); 
        let myArrayStringA = JSON.stringify(HISTORYA);
        let myArrayStringB = JSON.stringify(HISTORYB);
  localStorage.setItem('myArrayA', myArrayStringA);
  localStorage.setItem('myArrayB', myArrayStringB);
        if(pos==2){
        alert("game over, B WINS");}
        else{
          alert("game over, A WINS");
        }
        location.reload();
      }
      if(pos==3||pos==5){
        reset1();
        flags1.shield=0;
        console.log("shield")
        playMoveSound(); 
        return;
  }
}
}

function collison1(repa,repb,limitx) {
    let div1 = document.querySelector('.bullet1');
    let bulletPosition = div1.getBoundingClientRect();
    findDivWithImage();
    console.log(inp);
    let divric = document.querySelector(`.box-${inp[repa]}`);
    
    let inpPosition = divric.getBoundingClientRect();
    
  //console.log(Math.abs(inpPosition.top) - Math.abs(bulletPosition.top));
   //console.log(Math.abs(Math.abs(inpPosition.left) - Math.abs(bulletPosition.left)));
    if (Math.abs(Math.abs(inpPosition.top) - Math.abs(bulletPosition.top)) < limitx && Math.abs(Math.abs(inpPosition.left) - Math.abs(bulletPosition.left)) <= 45) {
        console.log('Collision detected! Stop.');
        flags1.s = 0;
        playMoveSound();
        if(repa==0){
        flags1.flag = 0;}
        else{
          flags1.flag = 3;
        }
       flags1.collision=1;
       centerBulletInDiv1(inp[repa],0);
    }
   
    //console.log(Math.abs(triPosition.top) - Math.abs(bulletPosition.top) < 5 && Math.abs(Math.abs(triPosition.left) - Math.abs(bulletPosition.left)) < 33);
    if(inp[repb] !== undefined){
      let divtri = document.querySelector(`.box-${inp[repb]}`);
      let triPosition = divtri.getBoundingClientRect(); 
    // console.log(Math.abs(Math.abs(triPosition.top) - Math.abs(bulletPosition.top)));
      //console.log(Math.abs(Math.abs(triPosition.left) - Math.abs(bulletPosition.left)));

    if (Math.abs(Math.abs(triPosition.top) - Math.abs(bulletPosition.top)) < limitx && Math.abs(Math.abs(triPosition.left) - Math.abs(bulletPosition.left)) < 45) {
        console.log('Collision detected! Stopping shooting.');
        flags1.s = 0;
        playMoveSound();
        if(repb==1){
        flags1.flag = 2;}
        else{
          flags1.flag = 5;
        }
        flags1.collision=2;
       // console.log(inp[repb])
        centerBulletInDiv1(inp[repb],0);
    }
}
}
function gamecollision1() {
  cancelAnimationFrame(currentAnimationFrame1);
  findDivWithImage();
  let a = (document.querySelector(`.box-${inp[0]}`).style.backgroundImage.includes("rok1.svg") && flags1.flag == 0);
  let c = (document.querySelector(`.box-${inp[0]}`).style.backgroundImage.includes("rok.svg") && flags1.flag == 0);
  var b=0 , f=0;
  if(inp[1]!== undefined){
     b = (document.querySelector(`.box-${inp[1]}`).style.backgroundImage.includes("tri.svg")&& flags1.flag == 2);}
    if(inp[8]!== undefined){
       f = (document.querySelector(`.box-${inp[8]}`).style.backgroundImage.includes("tri2.svg")&& flags1.flag == 5);}
  
  let d = (document.querySelector(`.box-${inp[7]}`).style.backgroundImage.includes("rok2.svg") && flags1.flag == 3);
  let e = (document.querySelector(`.box-${inp[7]}`).style.backgroundImage.includes("rok3.svg") && flags1.flag == 3);
  

  console.log(1223);
  console.log(flags1.collision);

  // Handle collision type 1
  if (flags1.collision == 1) {
    cancelAnimationFrame(currentAnimationFrame1);
    switch (flags1.direc) {
      case "left":
        if (c || e) {
          moveDownbullet1();
        }
        if (a || d) {
        moveUpbullet1();
        }
        return;
      case "right":
        if (c || e) {

         moveUpbullet1();
        }
        if (a || d) {
          moveDownbullet1();
        }
        return;
      case "up":
          if(c || e){
            moveRightbullet1();
          }
          if(a ||d){
            moveLeftbullet1();
          }
          return;
      case "down":
         if(c ||e){
          moveLeftbullet1();
         }
         if(a ||d){
          moveRightbullet1();
        }
        return;
    }
  }

  if (flags1.collision == 2) {
    console.log(f);
    console.log((f && (rotationb == 270 || rotationb == -90)))
    cancelAnimationFrame(currentAnimationFrame1);
    switch (flags1.direc) {
      case "right":
        if ((b && (rotation == 270 || rotation == -90)) || (f && (rotationb == 270 || rotationb == -90))) {
          moveUpbullet1();
        } else if ((b && (rotation == 180 || rotation == -180)) || (f && (rotationb == 180 || rotationb == -180))) {
          moveDownbullet1() // Delay before moving down
        } else
         {
          if(inp[1]!== undefined && b){
            document.querySelector(`.box-${inp[1]}`).style.backgroundImage="none";inp=[];}
            if(inp[8]!== undefined && f){
            document.querySelector(`.box-${inp[8]}`).style.backgroundImage="none";inp=[];}
          reset1();
        }
        return;
      case "left":
         console.log(2);
        if ((b && (rotation == -270 || rotation == 90))|| (f && (rotationb == -270 || rotationb == 90))) {
          moveDownbullet1();
        } else if ((b && rotation == 0) || (f && rotationb == 0)) {
          console.log(34);
          
          moveUpbullet1();
        } else {
          if(inp[1]!== undefined && b){
            document.querySelector(`.box-${inp[1]}`).style.backgroundImage="none";inp=[];}
            if(inp[8]!== undefined && f){
            document.querySelector(`.box-${inp[8]}`).style.backgroundImage="none";inp=[];}
          reset1();
        }
        return;
        case "up":
          if ((b && (rotation == -270 || rotation == 90))|| (f && (rotationb == -270 || rotationb == 90))) {
            moveRightbullet1();
          }
         else  if ((b && (rotation == 180 || rotation == -180)) || (f && (rotationb == 180 || rotationb == -180))) {
          moveLeftbullet1();
         }
         else {
          if(inp[1]!== undefined && b){
            document.querySelector(`.box-${inp[1]}`).style.backgroundImage="none";inp=[];}
            if(inp[8]!== undefined && f){
            document.querySelector(`.box-${inp[8]}`).style.backgroundImage="none";inp=[];}
          reset1();
        }
         return;
         case "down":
          if ((b && (rotation == 270 || rotation == -90)) || (f && (rotationb == 270 || rotationb == -90))){
            moveLeftbullet1();}
   
          else if( (b && rotation == 0)|| (f && rotationb == 0)){
              moveRightbullet1();}
        
          else {
            if(inp[1]!== undefined && b){
              document.querySelector(`.box-${inp[1]}`).style.backgroundImage="none";inp=[];}
              if(inp[8]!== undefined && f){
              document.querySelector(`.box-${inp[8]}`).style.backgroundImage="none";inp=[];}
            reset1();
          }
  }
}
}









reset();
reset1();
