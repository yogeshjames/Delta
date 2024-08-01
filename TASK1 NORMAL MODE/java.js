const gridContainer = document.getElementById('gridContainer');
for (let i = 0; i <= 63; i++) {
  const box = document.createElement('div');
  box.classList.add('box', `box-${i}`);
  box.style.backgroundImage = "none";
  gridContainer.appendChild(box);
}  
function blue(){
for (let i = 0; i <= 63; i++) {
document.querySelector(`.box-${i}`).style.backgroundColor = "#64c5e6";

}
}
document.querySelector('.box-3').style.backgroundImage = "url('assests/TITAN.png')";//// CAPITAL TITAN IS CANON IN 1ST  AND CANON IS TITAN
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
document.querySelector('.bullet').style.top = '90px';/// INITIALLY SETTING THE BULLET PPOS
document.querySelector('.bullet').style.left = '670px';
var bullet = document.querySelector('.bullet');
function centerBulletInDiv(toti, m) {
  let targetDiv = document.querySelector(`.box-${toti}`);
  let bulletRect = bullet.getBoundingClientRect();
  let centeredLeft = targetDiv.offsetLeft + (targetDiv.offsetWidth / 2) - (bulletRect.width / 2);/// OFFSET IS Relative to the nearest positioned ancestor (an ancestor with a position property other than static).
  let centeredTop = targetDiv.offsetTop + (targetDiv.offsetHeight / 2) - (bulletRect.height / 2);
  bullet.style.left = `${centeredLeft}px`;//GET6BIUNDING IS BASED ON VIEPORT
  bullet.style.top = `${centeredTop + m}px`; // Adjusted to add m to the centeredTop value
}


setTimeout(() => {
  centerBulletInDiv(3,0);//inistially at 3rd box ryt 
}, 10);
/// FUNCTION TO CENTRE THE BULLET INSIDE BOX AFTER ALL COLLISON



var posx = document.querySelector('.bullet').style.top;
var numberX = parseInt(posx, 10);//if it encounters string it stops not decimal value too only  integer
var currentAnimationFrame;
var flags = {
  s: 1,// check collison with other
  flag: 1,//TO DETECT which RICHOCHET  like 1 or 2 AND SEMI RICHOCHETE COLLISON
  shield: 1,
  collision: 0,///just says rico or semi rico  also used for 2nd 3rd collsions 
  direc: ""
};
//FLAGS

function Shoot() {
  numberX += 5;
  document.querySelector('.bullet').style.top = numberX + 'px';
  console.log(1);
  if (flags.shield == 0) {
    reset();/// resets the bullet;
    return;//IF COLLIDES WITH SHIELD OR TITTAN
  }
  if (flags.s === 1) {
    callGameFunctions([3, 2, 5, 6],5);// all these are the array positions where the curretn position of the elemnts are stored
    collison(0,1,5);//CALLING ALL FUNCTIONS AT START ITSELF 
    collison(7,8,5);/// 01,7,8 are array position of wherre the position of all rico ,  semi rico is stored
    
  }

  const a = (document.querySelector(`.box-${inp[0]}`).style.backgroundImage.includes("rok1.svg") && flags.flag == 0);/// if cuurentdiv has the image and collison is detected 
  const c = (document.querySelector(`.box-${inp[0]}`).style.backgroundImage.includes("rok.svg") && flags.flag == 0);
  const b = (document.querySelector(`.box-${inp[1]}`).style.backgroundImage.includes("tri.svg")&& flags.flag == 2);
  
  const d = (document.querySelector(`.box-${inp[7]}`).style.backgroundImage.includes("rok2.svg") && flags.flag == 3);
  const e = (document.querySelector(`.box-${inp[7]}`).style.backgroundImage.includes("rok3.svg") && flags.flag == 3);
  const f = (document.querySelector(`.box-${inp[8]}`).style.backgroundImage.includes("tri2.svg")&& flags.flag == 5);
  
  console.log(c);
var toplimit=830;
if(window.innerWidth<480)  toplimit=400;//MAKING CONDITIONS FRO MOBILE RESPONSIVENESS TOO
  if (numberX > toplimit) {// goes outside the grid
    document.querySelector('.bullet').style.visibility = "hidden";
    setTimeout(function() {
      document.querySelector('.bullet').style.visibility = "visible";
      reset();// take care of where the canono is 
      numberX = 90;// IF IT EXCEEDS THE RANGE BULLET IS SET BACK AGAIN 
    }, 500);
  } else if (flags.s === 1) {
    currentAnimationFrame = requestAnimationFrame(Shoot);
    Reached=1;/// means bullet is moving 
  }
  if (flags.s == 0) {// IF COLLISION GETS DETECTED THE FLAG S BECOMES ZERO
    if (c || e) {
      moveLeftbullet()//CHECKING THE CONDITIONS OF WHATEVR THING GOT COLLIODED
      flags.direc = "left";
      flags.collision = 0;// after the bullet moves left reset this chnage this only if again collison is deteceted(see inside the function left)
    } else if (a || d) {//  for semi rico we do this 
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
      reset();/// if on rough sides
    }
  }
}
function callGameFunctions(gameNumbers,oi) {
  gameNumbers.forEach(function(gameNumber) {
    game(gameNumber,oi);//CALLING THE FUNCTION
  });
}
//VARIABLE TO ALLOW MOVEMENTS ONLY AFTER THE BALL FINISHES
var Reached=0;// bullet  not moving 
var Reached1=0;
function reset() {
  cancelAnimationFrame(currentAnimationFrame);
  findDivWithImage();/// finds current pos of alll 
  centerBulletInDiv(inp[4],0);
//  let di = document.querySelector(`.box-${inp[4]}`);
  flags.s = 1;
  flags.flag= 1;
  flags.shield= 1;
  flags.collision= 0;
  flags.direc="";//RESETTING EVERYTHING
  numberX = 90; // Reset top position
  Reached=0;
  return;
}
var countl=0;
function moveLeftbullet() {
  cancelAnimationFrame(currentAnimationFrame); // Cancel any ongoing animation
  var leftbullet = parseInt(bullet.style.left);
  leftbullet -= 5;
  countl++; 
  bullet.style.left = leftbullet + 'px';
  flags.flag = 1;//resetting
  flags.collision= 0;
  //callGameFunctions([3, 2, 5, 6],38);
  if(countl>16){// allow it to move out of the div before checking other collison 
    callGameFunctions([3, 2, 5, 6],38);
   collison(0,1,50);
  collison(7,8,50);
    countl=0;
    console.log(flags.collision)
    if(flags.collision==1 || flags.collision==2){flags.direc="left";gamecollision(); return;} }/// if it collides woth rico or semi after moving left or rigth 
    var leftlimit=330;
    if(window.innerWidth<480) leftlimit=10;
  if (leftbullet < leftlimit || flags.shield == 0) {
    reset();
    countl=0;
    console.log(1);
    return;
  } else {
    currentAnimationFrame = requestAnimationFrame(moveLeftbullet);//keep moving left 
    
  }
}


var countr=0;
function moveRightbullet() {
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
  console.log(flags.collision)//TO AVOID COLLIOSN DETECCTION WITH ITSELF ONLY IF IT MOVES OUT THE BOX THEN COLLIOSN DETECTION STARTS
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
  if(flags.collision==1 || flags.collision==2){ flags.direc="up"; gamecollision(); return;}} // retunring coz function should stop 

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
  if (topbullet > topplimit || flags.shield == 0) { 
    reset();
    console.log(1);
    countd=0;
    return;
  } else {
    currentAnimationFrame = requestAnimationFrame(moveDownbullet); // Continue moving down
  }
}

//FOR TITAN AND SHIELD
function game(pos,poi){//// using this poi becoz collisons fro diff get detetcted at diff values idk why
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
         flags.shield=0;//collided with the shield
          console.log("shield")
          return;
  }
}
}

//FOR RICO AND SEMI RICO 
function collison(repa,repb,limitx) {
    let div1 = document.querySelector('.bullet');
    let bulletPosition = div1.getBoundingClientRect();
    findDivWithImage();
    //console.log(inp);
    let divric = document.querySelector(`.box-${inp[repa]}`);
    let divtri = document.querySelector(`.box-${inp[repb]}`);
    let inpPosition = divric.getBoundingClientRect();
    let triPosition = divtri.getBoundingClientRect(); 
  // console.log(Math.abs(inpPosition.top) - Math.abs(bulletPosition.top));
   //console.log(Math.abs(Math.abs(inpPosition.left) - Math.abs(bulletPosition.left)));
    if (Math.abs(Math.abs(inpPosition.top) - Math.abs(bulletPosition.top)) < limitx && Math.abs(Math.abs(inpPosition.left) - Math.abs(bulletPosition.left)) <= 37) {
        console.log('Collision detected! Stop.');
        flags.s = 0;
        if(repa==0){// rico1 or ric02  based on flag 
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
    if (Math.abs(Math.abs(triPosition.top) - Math.abs(bulletPosition.top)) < limitx && Math.abs(Math.abs(triPosition.left) - Math.abs(bulletPosition.left)) < 38) {
        console.log('Collision detected! Stopping shooting.');
        flags.s = 0;
        if(repb==1){//semi rico 1 or semi rico 2 
        flags.flag = 2;}
        else{
          flags.flag = 5;
        }
        flags.collision=2;
       // console.log(inp[repb])
        centerBulletInDiv(inp[repb],0);
    }
}

var inp = []
// TO FIND POSITIONS OF ALL ELEMENTS PRESENT
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
  let b = (document.querySelector(`.box-${inp[1]}`).style.backgroundImage.includes("tri.svg") && flags.flag == 2);
  
  const d = (document.querySelector(`.box-${inp[7]}`).style.backgroundImage.includes("rok2.svg") && flags.flag == 3);
  const e = (document.querySelector(`.box-${inp[7]}`).style.backgroundImage.includes("rok3.svg") && flags.flag == 3);
  const f = (document.querySelector(`.box-${inp[8]}`).style.backgroundImage.includes("tri2.svg")&& flags.flag == 5);
  

  console.log(1223);
  console.log(flags.collision);

  // Handle collision type 1
  if (flags.collision == 1) {
    cancelAnimationFrame(currentAnimationFrame);
    switch (flags.direc) {
      case "left":
        if (c || e) {
          moveDownbullet();
        }
        if (a || d) {
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
          moveUpbullet();
        } else if ((b && (rotation == 180 || rotation == -180)) || (f && (rotationb == 180 || rotationb == -180))) {
          //bullet.style.left = (parseInt(bullet.style.left) + 25) + 'px';
          //setTimeout(() => moveDownbullet(), 10);
          moveDownbullet() 
        } else {
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
          reset();
        }
         return;
         case "down":
          if ((b && (rotation == 270 || rotation == -90)) || (f && (rotationb == 270 || rotationb == -90))){
            moveLeftbullet();}
   
          else if( (b && rotation == 0)|| (f && rotationb == 0)){
              moveRightbullet();}
        
          else {
            reset();
          }
  }
}///FUNCTION TO DETECT COLLIOSN AFTER BOUNCING FROM RICO OR SEMI RICO
}




///CANON11///////

var team="a"

// Move the image to the right
function moveR(Boxc , rig) {
   if(Boxc!==0){
 document.querySelector(`.box-${Boxc - 1}`).style.backgroundColor = "#64c5e6";
}
 document.querySelector(`.box-${Boxc + 1}`).style.backgroundColor = "#64c5e6";
 document.querySelector(`.box-${Boxc}`).removeEventListener('click', clickHandlerc);

     // Remove the background image from the current box and set it to the left box
     document.querySelector(`.box-${Boxc}`).style.backgroundImage = "none";
     document.querySelector(`.box-${Boxc + (rig)}`).style.backgroundImage = "url('assests/TITAN.png')";
     Boxc= Boxc + (rig);
    // pos = Boxc;
     console.log(Boxc)
     document.querySelector(`.box-${Boxc}`).addEventListener('click', clickHandlerc);
     reset();
     console.log(4)
      Shoot();
      buttonreset();
      startTeamBTimer();
      team="b";
      teampause=team;
    
}


var currentBoxc = 3;

document.querySelector(`.box-${currentBoxc}`).addEventListener('click', clickHandlerc);

function highlightAdjacentBoxes(Boxc) {
console.log(55)
console.log(Boxc);
var backgroundImage1 = document.querySelector(`.box-${Boxc+1}`).style.backgroundImage;
if(Boxc-1>=0){
var backgroundImage2 = document.querySelector(`.box-${Boxc-1}`).style.backgroundImage;}
else{
  var backgroundImage2="notexist";// it need somevalue or else it shows errror soo i use this 
}
var left = backgroundImage2.includes("none");// better than using === cause its better for urls 
var right = backgroundImage1.includes("none");
blue();
if (Boxc - 1 >= 0 && left ) {
console.log(8778);
document.querySelector(`.box-${Boxc - 1}`).style.backgroundColor = "green";
}
if (Boxc + 1 <= 7 && right) {
document.querySelector(`.box-${Boxc + 1}`).style.backgroundColor = "green";}


function Remove(){
if(Boxc - 1>0 ){//// im usi g this confditons becoz if i dont use it gives error at edge cases saying box-1 is not presetn 
  console.log(Boxc - 1)
document.querySelector(`.box-${Boxc - 1}`).removeEventListener('click', leftClickListener);
document.querySelector(`.box-${Boxc + 1}`).removeEventListener('click', rightClickListener);
}else{
document.querySelector(`.box-${Boxc + 1}`).removeEventListener('click', rightClickListener);
document.querySelector(`.box-0`).removeEventListener('click', leftClickListener);// for endge case im doing this 
document.querySelector(`.box-0`).removeEventListener('click', rightClickListener);
}
}

function leftClickListener(event) {
console.log(33223)
if (Boxc - 1 >= 0) {
  document.querySelector(`.box-${Boxc - 1}`).style.backgroundColor = "#64c5e6";
}
document.querySelector(`.box-${Boxc + 1}`).style.backgroundColor = "#64c5e6";
if (Boxc >= 0 && left) {
moveR(Boxc, -1);}
Remove(Boxc);
}

function rightClickListener(event) {
if (Boxc - 1 >= 0) {
  document.querySelector(`.box-${Boxc - 1}`).style.backgroundColor = "#64c5e6";
}
document.querySelector(`.box-${Boxc + 1}`).style.backgroundColor = "#64c5e6";
if (Boxc < 8 && right) {
moveR(Boxc , +1);}
Remove(Boxc);
                                         
}

if (Boxc - 1 >= 0) {
console.log(9090809)
document.querySelector(`.box-${Boxc - 1}`).addEventListener('click', leftClickListener);
}
if (Boxc + 1 <= 7) {
console.log(7900)
document.querySelector(`.box-${Boxc + 1}`).addEventListener('click', rightClickListener);

}

}
function clickHandlerc(event) {

  console.log(team,Paused,Reached1)
  if (team !== "a" || Paused || Reached1) return;
console.log(event.target.className);///\d+/ will match the integers and it return array of matched integers 
var Boxc = parseInt(event.target.className.match(/\d+/)[0], 10);//we know parse int wills top if it sees string soo gettin on y int from box-6
highlightAdjacentBoxes(Boxc);

///output will be like this parseInt("5", 10);
//ALLOWS MOVEMTN ONLY IF NOT PAUSED THE TEAMS CHANCE AND BALL REACHED

}
let teampause=""// TO USE PAUSE AND RESUME AND KEEP TRACK OF WHOS PLAY ITS BEFORE PAUSE
//---------------------------------------------------------------------------------------------------------------------------------------------
//function titan(){
  var lol=0;
function setupObjectMovement(BoxN, imgUrl) {
console.log(team);
document.querySelector(`.box-${BoxN}`).addEventListener('click', clickHandler);

function move(BoxN,imgUrl,pos) {
 blue();
  document.querySelector(`.box-${BoxN}`).removeEventListener('click', clickHandler);
      document.querySelector(`.box-${BoxN}`).style.backgroundImage = "none";
      document.querySelector(`.box-${BoxN +(pos)}`).style.backgroundImage = imgUrl;
      BoxN = BoxN +(pos);
      updatea(BoxN,imgUrl);
     if (imgUrl === "url('assests/tri.svg')" ) {
    o=BoxN;/// has pos of tri 
    lol=BoxN;
    updateRotation(lol,0);///this  handes the rotation of semi rico sending the position
    document.querySelector(`.box-${BoxN-(pos)}`).style.transform = 'rotate(0deg)';//// resetting the old div 
}
       flags.shield=1;
       reset();
       Shoot();
       buttonreset();
       startTeamBTimer();
       team="b";//CHANGING THE TEQAMS
       teampause=team;

}

function updatea(BoxN,imgUrl){
  if (imgUrl === "url('assests/CANON1.svg')") {
    x=BoxN;// all this is for pause 
  } else if (imgUrl === "url('assests/shield.png')" ) {
    y=BoxN;
}
else if (imgUrl === "url('assests/rok1.svg')" || imgUrl === "url('assests/rok.svg')"  ) {
  z=BoxN;
  if(rok==1)document.querySelector(`.box-${BoxN}`).style.backgroundImage ="url('assests/rok.svg')";
  leu(BoxN);
}
document.querySelector(`.box-${BoxN}`).addEventListener('click', clickHandler);
}


function highlightAdjacentBoxes(BoxN, imgUrl) {
  if(BoxN+8<=63){
    var backgroundImage3 = document.querySelector(`.box-${BoxN+8}`).style.backgroundImage;
  }else{
    var backgroundImage3="not exist";}
  if(BoxN+1<=63){
    var backgroundImage1 = document.querySelector(`.box-${BoxN+1}`).style.backgroundImage;}
  else{
        var backgroundImage1="not exist";}
 if(BoxN-1>=0){var backgroundImage2 = document.querySelector(`.box-${BoxN-1}`).style.backgroundImage;}
  else{
    var backgroundImage2="not exist";// IF THE BOX NOT EXIST THEN DONT INITAILISE THE VAIABLE 
  }
  if(BoxN-8>=0){
  var backgroundImage4 = document.querySelector(`.box-${BoxN-8}`).style.backgroundImage;
}else{
  var backgroundImage4="notexist"}

  var top = backgroundImage4.includes("none");
  var left = backgroundImage2.includes("none");//CHECKS IF NEARBY BOXES AAR4E FREE
  var right = backgroundImage1.includes("none");
  var down = backgroundImage3.includes("none");

blue();
console.log(imgUrl);
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

//REMOVE LISTNERS SOO THAT AGAIN CLICKING THE PREVIOUS BOX WONT WOKRSK

function Remove(){
for(let i =0; i<=63; i++){
  document.querySelector(`.box-${i}`).removeEventListener('click', leftClickListener);
  document.querySelector(`.box-${i}`).removeEventListener('click', rightClickListener);
  document.querySelector(`.box-${i}`).removeEventListener('click', upClickListener);
  document.querySelector(`.box-${i}`).removeEventListener('click', downClickListener);
}
}
function leftClickListener(event) {
if(document.querySelector(`.box-${BoxN - 1}`).style.backgroundColor === "green"){
  if (BoxN >=1 && left ) {
    move(BoxN , imgUrl,-1);}}//MAKING AVAILABLE BOXES ALONE
Remove(BoxN , imgUrl);/// however no use of this params 
}

function rightClickListener(event) {
if(document.querySelector(`.box-${BoxN + 1}`).style.backgroundColor === "green"){
  if (BoxN < 63 && right) {
move(BoxN , imgUrl , 1);}}
Remove(BoxN , imgUrl);/// even tho not moved remove listner 
                                         
}

function upClickListener(event) {
if(document.querySelector(`.box-${BoxN - 8}`).style.backgroundColor === "green"){
  if(BoxN>=8 && top){
move(BoxN , imgUrl ,-8)}}
Remove(BoxN, imgUrl);

}

function downClickListener(event) {
if(document.querySelector(`.box-${BoxN + 8}`).style.backgroundColor === "green"){
  if (BoxN <= 55 && down ) {
move(BoxN , imgUrl , 8);}}
Remove(BoxN , imgUrl);

}

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
  console.log(team);
  if (team !== "a" || Paused || Reached1) return;///EXITS IF PAUSED OF BULLET NOT REACHED OR NOT HTIS TEAMS TURN
var BoxN = parseInt(event.target.className.match(/\d+/)[0], 10);
var backgroundImage = document.querySelector(`.box-${BoxN}`).style.backgroundImage;
if (  backgroundImage.includes("shield.png") || backgroundImage.includes("CANON1.svg") || backgroundImage.includes("rok1.svg") || backgroundImage.includes("rok.svg") || backgroundImage.includes("tri.svg") ) {
console.log(1);
highlightAdjacentBoxes(BoxN, imgUrl);}
}
}


var pos = [10,12,13,15];/// howvwer i alr hv inp for this but s till hv this for initial 
var x=pos[1];
var y=pos[0];
var z=pos[2];
console.log(z);
var o = pos[3];


document.querySelector(`.box-${x}`).addEventListener('click', setupObjectMovement(x, "url('assests/CANON1.svg')"));
document.querySelector(`.box-${y}`).addEventListener('click', setupObjectMovement(y, "url('assests/shield.png')"));
document.querySelector(`.box-${z}`).addEventListener('click', setupObjectMovement(z, "url('assests/rok1.svg')"));
document.querySelector(`.box-${o}`).addEventListener('click', setupObjectMovement(o, "url('assests/tri.svg')"));

const newlistener = function() {
  document.querySelectorAll(".but")[0].style.visibility="visible";
document.querySelectorAll(".but")[1].style.visibility="visible";
document.querySelectorAll(".xv")[0].style.visibility="hidden";
document.querySelectorAll(".xv")[1].style.visibility="hidden";
document.querySelectorAll(".xvb")[0].style.visibility="hidden";
document.querySelectorAll(".xvb")[1].style.visibility="hidden";
document.querySelectorAll(".butb")[0].style.visibility="hidden";
document.querySelectorAll(".butb")[1].style.visibility="hidden";
};
// im declaring this outside coz if i use this inside evrytime new function will be created which will point to differnt locations
function leu(l) {
  console.log(l);
  if (team !== "a") return;
  
  for (let i = 0; i <= 63; i++) {
    const target = document.querySelector(`.box-${i}`);
    if (target) {
        target.removeEventListener('click', newlistener);
    }
}
  // Add the new listener
  const target = document.querySelector(`.box-${l}`);
    target.addEventListener('click', newlistener);
}
leu(13);
var rok=0;
function but1(direction) {
  findDivWithImage();
let  div=inp[0];/// pos of rico 
if (direction === 'right' && document.querySelector(`.box-${div}`).style.backgroundImage.includes("rok.svg") && team=="a" && !Reached1) {// check prev ot was left 
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
    document.querySelector(`.box-${i}`).removeEventListener('click', visible);/// except for box of tri remove this event listener for other boxes 
}}/// doing this even after moving the hhand,ler might stil be therr

click();

let rotation = 0;
if(rotation==360 || rotation==-360){
  rotation=0;
}
function rotateLeft() {
  if(team=="a" && !Paused && !Reached1){
  rotation -= 90; 
  if(rotation==360 || rotation==-360){
    rotation=0;}/// resetting 
  }
  updateRotation(tri,1);
  console.log(rotation)
}

function rotateRight() {
  if(team=="a" && !Paused && !Reached1){
  rotation += 90; 
  if(rotation==360 || rotation==-360){
    rotation=0;}
  }
  updateRotation(tri,1);
  console.log(rotation)
}

function updateRotation(lol,pi) {
  if(team=="a" && !Paused && !Reached1){
  document.querySelector(`.box-${lol}`).style.transform = `rotate(${rotation}deg)`;// change the current div 
  tri=lol;
  blue();
  click();
  reset();
  Shoot();
  if(pi==1){/// ifthis is triggered due to movong no need to do this coz alr be done move function
  startTeamBTimer();//TIMER OF THE OTHER TEAM STARTS
  team="b";
  teampause=team;}
  document.querySelectorAll(".xv")[0].style.visibility="hidden";
document.querySelectorAll(".xv")[1].style.visibility="hidden";}

}

/////////////////////////TIMERRRRRRRRRRR/////////////
let teamATime = 200; 
let teamBTime = 200; 
let currentTeam = 'A'; 
let teamATimer, teamBTimer;
let Paused = false;
let teamPause; 


function startTeamATimer() {
    clearInterval(teamBTimer); // Clear Team B's timer 
    teamATimer = setInterval(() => {
        if (!Paused&& team=="a") {// ONLY IF TEAMS CHANCE ITS 
            teamATime--;
            document.getElementById('teamATime').textContent = teamATime;
            if (teamATime <= 0) {
                clearInterval(teamATimer);
                alert('Team A\'s time is up! Team B wins.');
                location.reload();
            }
        }
    }, 1000);
}

function startTeamBTimer() {
    clearInterval(teamATimer); 
    teamBTimer = setInterval(() => {
        if (!Paused && team=="b") {
            teamBTime--;
            document.getElementById('teamBTime').textContent = teamBTime;
            if (teamBTime <= 0) {
                clearInterval(teamBTimer);
                alert('Team B\'s time is up! Team A wins.');
                location.reload();
            }
        }
    }, 1000);
}

startTeamATimer();

// Function to resume 
function resumeTimers() {
    if (team === "a") {
        startTeamATimer();
    } else if (team === "b") {
        startTeamBTimer();
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

 
 document.querySelector(`.box-${Boxb - 1}`).style.backgroundColor = "#64c5e6";
 if(Boxb + 1<=63){
 document.querySelector(`.box-${Boxb + 1}`).style.backgroundColor = "#64c5e6";}
 // Add an event listener to the left box
 document.querySelector(`.box-${Boxb}`).removeEventListener('click', clickHandlerb);

     document.querySelector(`.box-${Boxb}`).style.backgroundImage = "none";
     document.querySelector(`.box-${Boxb + (yok)}`).style.backgroundImage = "url('assests/canon2.svg')";
     Boxb= Boxb + (yok);
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


var currentBoxb = 63;

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
    
//---------------------------------------------------------------------------------------------------------------------------------------------

var lolb=0;
function setupObjectMovementb(BoxNb, imgUrlb) {
console.log(78);
document.querySelector(`.box-${BoxNb}`).addEventListener('click', clickHandlerb);

function moveb(BoxNb,imgUrlb,posu) {

 blue();
  document.querySelector(`.box-${BoxNb}`).removeEventListener('click', clickHandlerb);
      document.querySelector(`.box-${BoxNb}`).style.backgroundImage = "none";
      document.querySelector(`.box-${BoxNb +(posu)}`).style.backgroundImage = imgUrlb;
      BoxNb = BoxNb +(posu);
      updateb(BoxNb,imgUrlb);
      if (imgUrlb === "url('assests/tri2.svg')" ) {
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

}
function updateb(BoxNb,imgUrlb){
  if (imgUrlb === "url('assests/shield2.svg')" ) {
    xb=BoxNb;
  } else if (imgUrlb === "url('assests/castle2.svg')") {
    yb=BoxNb;
}
else if (imgUrlb === "url('assests/rok2.svg')" || imgUrlb === "url('assests/rok3.svg')"  ) {
  zb=BoxNb;
  if(rokb==1)document.querySelector(`.box-${BoxNb}`).style.backgroundImage ="url('assests/rok3.svg')";
  leub(BoxNb);
}
  document.querySelector(`.box-${BoxNb}`).addEventListener('click', clickHandlerb);
}



function highlightAdjacentBoxesb(BoxNb, imgUrlb) {
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


  var leftb = backgroundImage2.includes("none");
  var rightb = backgroundImage1.includes("none");
  var topb = backgroundImage4.includes("none");
  var downb = backgroundImage3.includes("none");

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
  console.log(team);
  if (team !== "b" || Paused || Reached) return;
var BoxNb = parseInt(event.target.className.match(/\d+/)[0], 10);
var backgroundImage = document.querySelector(`.box-${BoxNb}`).style.backgroundImage;
if (backgroundImage.includes("shield2.svg") || backgroundImage.includes("castle2.svg") || backgroundImage.includes("rok2.svg") || backgroundImage.includes("rok3.svg") || backgroundImage.includes("tri2.svg") ) {
console.log(1);
highlightAdjacentBoxesb(BoxNb, imgUrlb);}}
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


   
const newlistenerb = function(event) {
  document.querySelectorAll(".butb")[0].style.visibility = "visible";
  document.querySelectorAll(".butb")[1].style.visibility = "visible";
  document.querySelectorAll(".xvb")[0].style.visibility = "hidden";
  document.querySelectorAll(".xvb")[1].style.visibility = "hidden";
  document.querySelectorAll(".but")[0].style.visibility = "hidden";
  document.querySelectorAll(".but")[1].style.visibility = "hidden";
  document.querySelectorAll(".xv")[0].style.visibility = "hidden";
  document.querySelectorAll(".xv")[1].style.visibility = "hidden";
};

function leub(lb) {
  console.log(lb);
  if (team !== "b") return;
  
  for (let i = 0; i <= 63; i++) {
    const target = document.querySelector(`.box-${i}`);
    if (target) {
        target.removeEventListener('click', newlistenerb);
    }
}
  // Add the new listener
  const target = document.querySelector(`.box-${lb}`);
    target.addEventListener('click', newlistenerb);
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
    trib=lolb;
    blue();
    clickb();
    if(p==1){
    startTeamATimer();
    reset();
   Shoot1();
    team="a";
    teampause=team;}
    document.querySelectorAll(".xvb")[0].style.visibility="hidden";
  document.querySelectorAll(".xvb")[1].style.visibility="hidden";}
    
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
  numberX1 -= 5;
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
  const b1 = (document.querySelector(`.box-${inp[1]}`).style.backgroundImage.includes("tri.svg")&& flags1.flag == 2);
  
  const d1 = (document.querySelector(`.box-${inp[7]}`).style.backgroundImage.includes("rok2.svg") && flags1.flag == 3);
  const e1 = (document.querySelector(`.box-${inp[7]}`).style.backgroundImage.includes("rok3.svg") && flags1.flag == 3);
  const f1 = (document.querySelector(`.box-${inp[8]}`).style.backgroundImage.includes("tri2.svg")&& flags1.flag == 5);
  
  //console.log(c);

  if (numberX1 < 50) {
    document.querySelector('.bullet1').style.visibility = "hidden";
    setTimeout(function() {
      document.querySelector('.bullet1').style.visibility = "visible";
      reset1();
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
  cancelAnimationFrame(currentAnimationFrame1);
  findDivWithImage();
  centerBulletInDiv1(inp[9],0);
  flags1.s = 1;
  flags1.flag= 1;
  flags1.shield= 1;
  flags1.collision= 0;
  flags1.direc="";
  var topbottom=807;
  console.log(window.innerWidth)
  if(window.innerWidth<480)  topbottom=400;
  numberX1 = topbottom; 
  Reached1=0;// Reset top position
  return;
}
//Shoot1();

var countl1=0;
function moveLeftbullet1() {
  console.log(45)
  cancelAnimationFrame(currentAnimationFrame1); // Cancel any ongoing animation
  var leftbullet1 = parseInt(bullet1.style.left);
  leftbullet1 -= 5;
  countl1++; 
  bullet1.style.left = leftbullet1 + 'px';
  flags1.flag = 1;
  flags1.collision= 0;
  //callGameFunctions([3, 2, 5, 6],38);
  if(countl1>16){
    callGameFunctions1([3, 2, 5, 6],39);
   collison1(0,1,51);
   collison1(7,8,51);
    countl1=0;
    console.log(flags1.collision)
    if(flags1.collision==1 || flags1.collision==2){flags1.direc="left";gamecollision1(); return;} }
    var leftlimit=330;
    if(window.innerWidth<480) leftlimit=10;
  if (leftbullet1 < leftlimit || flags1.shield == 0) {
    reset1();
    countl1=0;
    console.log(1);
    return;
  } else {
    currentAnimationFrame1 = requestAnimationFrame(moveLeftbullet1);
    
  }
}


var countr1=0;
function moveRightbullet1() {
  cancelAnimationFrame(currentAnimationFrame1); // Cancel any ongoing animation
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
  var leftlimit=1100;
  if(window.innerWidth<480) leftlimit=467;
  if (leftbullet1 > leftlimit || flags1.shield == 0) {
    reset1();
    countr1=0;
    return;
  } else {
    currentAnimationFrame1 = requestAnimationFrame(moveRightbullet1); 
}
}

var countt1=0;
function moveUpbullet1() {
  cancelAnimationFrame(currentAnimationFrame1); 
    var topbullet1 = parseInt(bullet1.style.top);
  topbullet1 -= 5;
  countt1++;
  bullet1.style.top = topbullet1+ 'px';
  flags1.flag = 1;
  flags1.collision= 0;
  //callGameFunctions([3, 2, 5, 6]);
 if(countt1>20){
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
  var topbullet1 = parseInt(bullet1.style.top);
  topbullet1 += 5;
  countd1++;
 bullet1.style.left =  (bullet1.style.left+60) + 'px';
  bullet1.style.top = topbullet1 + 'px';
  flags1.flag = 1;
  flags1.collision= 0;
  if(countd1>20){
    console.log(56656)
    callGameFunctions1([3, 2, 5, 6],57);
    collison1(0,1,57);
    collison1(7,8,57);
    countd=0;
    console.log(flags1.collision)
    if(flags1.collision==1 || flags1.collision==2){ flags1.direc="down";gamecollision1(); return;}}
    var topplimit=830;
    if(window.innerWidth<480) topplimit=400;
  if (topbullet1 > topplimit || flags1.shield == 0) { 
    reset1();
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
console.log(Math.abs(Math.abs(inpPosition.top) - Math.abs(bulletPosition.top)));
  console.log(Math.abs(Math.abs(inpPosition.left) - Math.abs(bulletPosition.left)));
 //console.log(Math.abs(inpPosition.top) - Math.abs(bulletPosition.top) < 5 && Math.abs(Math.abs(inpPosition.left) - Math.abs(bulletPosition.left)) < 34);
  if (Math.abs(Math.abs(inpPosition.top) - Math.abs(bulletPosition.top)) < poi && Math.abs(Math.abs(inpPosition.left) - Math.abs(bulletPosition.left)) <= 42) {// was 38.5
      console.log('Collision detected! Stopping shooting.');
      if(pos==2||pos==6){
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
          return;
  }
}
}

function collison1(repa,repb,limitx) {
    let div1 = document.querySelector('.bullet1');
    let bulletPosition = div1.getBoundingClientRect();
    findDivWithImage();
    //console.log(inp);
    let divric = document.querySelector(`.box-${inp[repa]}`);
    let divtri = document.querySelector(`.box-${inp[repb]}`);
    let inpPosition = divric.getBoundingClientRect();
    let triPosition = divtri.getBoundingClientRect(); 
   //console.log(Math.abs(inpPosition.top) - Math.abs(bulletPosition.top));
   //console.log(Math.abs(Math.abs(inpPosition.left) - Math.abs(bulletPosition.left)));
    if (Math.abs(Math.abs(inpPosition.top) - Math.abs(bulletPosition.top)) < limitx && Math.abs(Math.abs(inpPosition.left) - Math.abs(bulletPosition.left)) <= 38) {
        console.log('Collision detected! Stop.');
        flags1.s = 0;
        if(repa==0){
        flags1.flag = 0;}
        else{
          flags1.flag = 3;
        }
       flags1.collision=1;
       centerBulletInDiv1(inp[repa],0);
    }
    console.log(Math.abs(Math.abs(triPosition.top) - Math.abs(bulletPosition.top)));
    console.log(Math.abs(Math.abs(triPosition.left) - Math.abs(bulletPosition.left)));
    console.log(Math.abs(triPosition.top) - Math.abs(bulletPosition.top) < 5 && Math.abs(Math.abs(triPosition.left) - Math.abs(bulletPosition.left)) < 33);
    if (Math.abs(Math.abs(triPosition.top) - Math.abs(bulletPosition.top)) < limitx && Math.abs(Math.abs(triPosition.left) - Math.abs(bulletPosition.left)) < 39) {
        console.log('Collision detected! Stopping shooting.');
        flags1.s = 0;
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


function gamecollision1() {
  cancelAnimationFrame(currentAnimationFrame1);
  findDivWithImage();
  let a = (document.querySelector(`.box-${inp[0]}`).style.backgroundImage.includes("rok1.svg") && flags1.flag == 0);
  let c = (document.querySelector(`.box-${inp[0]}`).style.backgroundImage.includes("rok.svg") && flags1.flag == 0);
  let b = (document.querySelector(`.box-${inp[1]}`).style.backgroundImage.includes("tri.svg") && flags1.flag == 2);
  
  let d = (document.querySelector(`.box-${inp[7]}`).style.backgroundImage.includes("rok2.svg") && flags1.flag == 3);
  let e = (document.querySelector(`.box-${inp[7]}`).style.backgroundImage.includes("rok3.svg") && flags1.flag == 3);
  let f = (document.querySelector(`.box-${inp[8]}`).style.backgroundImage.includes("tri2.svg")&& flags1.flag == 5);
  

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
    console.log(34)
    cancelAnimationFrame(currentAnimationFrame1);
    switch (flags1.direc) {
      case "right":
        if ((b && (rotation == 270 || rotation == -90)) || (f && (rotationb == 270 || rotationb == -90))) {
          moveUpbullet1();
        } else if ((b && (rotation == 180 || rotation == -180)) || (f && (rotationb == 180 || rotationb == -180))) {
          moveDownbullet1() // Delay before moving down
        } else {
          reset1();
        }
        return;
      case "left":
        if ((b && (rotation == -270 || rotation == 90))|| (f && (rotationb == -270 || rotationb == 90))) {
          moveDownbullet1()
        } else if ((b && rotation == 0) || (f && rotationb == 0)) {
          console.log(34);
          moveUpbullet1()
        } else {
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
          reset1();
        }
         return;
         case "down":
          if ((b && (rotation == 270 || rotation == -90)) || (f && (rotationb == 270 || rotationb == -90))){
            moveLeftbullet1();}
   
          else if( (b && rotation == 0)|| (f && rotationb == 0)){
              moveRightbullet1();}
        
          else {
            reset1();
          }
  }
}
}








