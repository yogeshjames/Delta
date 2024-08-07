
//// IF GAME IS SLOWER PRESS RESTART OR REDSUME BUTTON 


const canvas=document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width=1474;
canvas.height=576;
const plmage = new Image();
const sprith=352/5;
const spritw=848/15;
plmage.src='assets/z.jpg';
const plmage2 = new Image();
plmage2.src='assets/z2.jpg';
let gframe=0;
let sframe=35;
const hero = new Image();
hero.src='assets/s.png'
const heroh=64;
const herow=320/5;
let g=0;
let s=5;

class Box {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.curethealth=400;
        this.maxxhealth=400;
    }

    draw() {
        ctx.fillStyle='#333333';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle='green';
        if(this.curethealth<0)this.curethealth=5;
        const healwith=Math.abs(this.curethealth/this.maxxhealth * this.width);
        ctx.fillRect(this.x+3, this.y+1,healwith, 7);
        ctx.strokeStyle = 'darkblack';
        ctx.lineWidth = 4.5;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}

class Player {
    constructor() {
        this.x = 700;
        this.y = 526;
        this.width = herow;
        this.velocityX = 0;
        this.velocityY = 0;
        this.height = heroh;
        this.currentHealth=190
        this.maxHealth=200
        this.attachedBlock = {
            x: this.x,
            y: this.y + 35,         
            width: 30,               
            height: 7,
            r:'r'
    }
    }
    draw() {
        //HEALTH BAR
        ctx.fillStyle = 'gray';
        ctx.fillRect(this.x+2, this.y-3.8, this.width, 10);
        ctx.fillStyle = 'green';
        const healthWidth = (this.currentHealth / this.maxHealth) * this.width;
        ctx.fillRect(this.x+3, this.y-3.8, healthWidth, 10);
        ctx.fillStyle='black';
        if(this.currentHealth<0){
            alert('game over');
        }

//HERO SPRITE SHEET
        if(this.attachedBlock.r=='r'||this.attachedBlock.r=='l'){
            hero.src='assets/s.png'
        let f= Math.floor(g/s)%5;
          g++;
        ctx.drawImage(hero,f*herow,0,herow,heroh,this.x,this.y,herow,heroh)}
        else if(this.attachedBlock.r=='right'){
            hero.src='assets/srun.png'
         let f= Math.floor(g/s)%5;
          g++;
        ctx.drawImage(hero,f*herow,0,herow,heroh,this.x,this.y,herow,heroh)
        }
        else if(this.attachedBlock.r=='left'){
             hero.src='assets/srunl.png';
             let f= Math.floor(g/s)%5;
          g++;
        ctx.drawImage(hero,f*herow,0,herow,heroh,this.x,this.y,herow,heroh)

        }
    ctx.fillRect(this.attachedBlock.x, this.attachedBlock.y, this.attachedBlock.width, this.attachedBlock.height);
    }
   
    update(boxes) {
      //  console.log(this.velocityY);
        this.y += this.velocityY;
        this.x += this.velocityX;
       if(this.attachedBlock.r=='right' || this.attachedBlock.r=='r')this.attachedBlock.x=this.x+30;
       else{
       // console.log(1);
        this.attachedBlock.x=this.x;
       }
        this.attachedBlock.y=this.y + 35;

       //gravity for player 
       if (this.velocityY < 10 ) {
        this.velocityY += 0.75;// increasg means comes down;
    }
       
   
        // COLLISON WITH ZOMBIES 
        array.forEach((zombie, index) => {
            const zombiew= spritw-13;
            const zombieh= sprith;
           // console.log(array);
           // console.log(zombie.y + zombieh);// BECOZ IN ZOMBIE CLASS I HAVE NO WIDTH AND HEIGHT
            if (
                zombie.x < this.x + this.width && 
                zombie.x + zombiew > this.x && 
                this.y < 500 + zombieh && 
                this.y + this.height > 500 &&!shield// and shiield shld be disabled  ZOMBIE CLASS I HAVE NO Y AND CONSTANTLY ITS ALWAYS 500
            ) {
                console.log("Collided with zombie");
                zombie.flag=1;//making the zombie stop after colliding woth playe 
                zombie.srow=1;
                this.currentHealth--;
            }
            else if (!zombie.collidedblock){// if zombie is in collision with block, not reset 
                zombie.flag=0;
                zombie.srow=2;
            }
        });
        
        array2.forEach((zombie, index) => {
            const zombiew= spritw;
            const zombieh= sprith;
          //  console.log(!zombie.collidedblock2);
            if (
                zombie.x2 < this.x + this.width && 
                zombie.x2 + zombiew > this.x && 
                this.y < 500 + zombieh && 
                this.y + this.height > 500 &&!shield// ZOMBIE CLASS I HAVE NO Y AND CONSTANTLY ITS ALWAYS 500
            ) {
                console.log("Colli");
                zombie.flag2=1;//making the zombie stop after colliding woth playe 
                zombie.srow2=1;
                this.currentHealth--;
            }
            
            else if (!zombie.collidedblock2){// if zombie is in collision with block, not reset 
                zombie.flag2=0;
                zombie.srow2=2;
            }
        });

       //COLLISON WITH BOXES
        boxes.forEach(box => {
            // Top collision
           // console.log(this.y + this.height,this.velocityY);
            if (this.y + this.height >= box.y && this.y  < box.y + box.height && this.y<box.y &&
                this.x + this.width >= box.x && this.x  < box.x + box.width &&this.velocityY>1
              ) {
                  //  console.log(1);
                   // console.log(this.velocityY)
                this.y = box.y - this.height;
                this.velocityY = 0;
                return;
            }

            // Left collision
            if (this.x + this.width > box.x && this.x < box.x &&
                this.y + this.height > box.y && this.y < box.y + box.height) {
                this.x = box.x - this.width;
                console.log(2);
                this.velocityX = 0;
                return;
            }

            // Right collision

            if (this.x < box.x + box.width && this.x + this.width > box.x + box.width &&
                this.y + this.height > box.y && this.y < box.y + box.height) {
                this.x = box.x + box.width;
                console.log(2);
                this.velocityX = 0;
                return;
            }
             // Bottom collision
            if (this.y < box.y + box.height && this.y + this.height > box.y + box.height &&
                this.x + this.width > box.x && this.x < box.x + box.width
                ) {
                    console.log(9);
                this.y = box.y + box.height;
                this.velocityY = 0;
                return;
               
            }

            // collison with bullet and boxes 
            if(bulletreached &&bullets.length!=0){
            if(bullets[0].x + bullets[0].width>box.x && bullets[0].x<box.x + box.width && bullets[0].y + bullets[0].height>box.y&& bullets[0].y<box.y + box.height ){
                console.log(687);
                bullets=[];
                bulletreached=0;
            }}

            
            if(!gre &&grenades.length!=0){//  while grenade is in air no new gre
               // console.log(grenades);
                if(grenades[0].x +grenades[0].width>box.x &&grenades[0].x<box.x + box.width &&grenades[0].y +grenades[0].height>box.y&&grenades[0].y<box.y + box.height ){
                    console.log(768687);
                   grenades=[];
                    gre=0;
                }}

        });

       
        

        // Collision with the ground
        if (this.y + this.height >= canvas.height) {
            this.y = canvas.height - this.height;
            this.velocityY = 0;
           // this.isOnGround = true;
        }

        //inside the canvas 
        if (this.x < 350) {
            this.x = 350;
        } else if (this.x + this.width > 990) {
            this.x = 990 - this.width;
        }
        if (this.y < 310) {
            this.y = 310;

        }
    }

    shoot() {
        bullets=[];
        grenades=[];
        const bulletX = this.attachedBlock.x + this.attachedBlock.width;
        const bulletY = this.attachedBlock.y;

        const bullet = new Bullet(bulletX, bulletY, this.attachedBlock.r);
        bullets.push(bullet);

    }
    
    shoot1() {
        grenades=[];
        bullets=[];
        const bulletX = this.attachedBlock.x + this.attachedBlock.width;
        const bulletY = this.attachedBlock.y;

        const grenade= new Grenade(bulletX, bulletY, this.attachedBlock.r);
        grenades.push(grenade);

    }

   
}


class Bullet {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.velocityX = direction === 'right' || direction === 'r' ? 5 : -5;
        this.velocityY=-3// Initial upward velocity for projectile motion
        this.gravity = 0.2; // Gravity effect 
    }

    update() {
        this.velocityY += this.gravity;
        this.x += this.velocityX;
        this.y += this.velocityY;// in canvas top dierection is minus soo thyat why initial value we take as -5
        bulletreached=1;//checks for collison whilei in air 
        if(this.y>canvas.height){
            bulletreached=0;
        }
    }

    draw() {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}


class Grenade {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.velocityX = direction === 'right' || direction === 'r' ? 5 : -5;
        this.velocityY=-3// Initial upward velocity for projectile motion
        this.gravity = 0.2; // Gravity effect 
    }

    update() {
        this.velocityY += this.gravity;
        this.x += this.velocityX;
        this.y += this.velocityY;// in canvas top dierection is minus soo thyat why initial value we take as -5
        if(this.y>canvas.height){
            gre=1;// check collison after reaching ground 
            this.y=canvas.height-this.width;
            this.velocityX=0;
            setTimeout(()=>{
                grenades=[];
                gre=0;
            },2000);// the bomb stays in ground waits fro zombies
        }
    }

    draw() {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}





const player = new Player();
var boxes = [
    new Box(300, 470, 50, 50),
    new Box(500, 452, 50, 70),
    new Box(80, 492, 70, 30),/// remove if dont want 
    
    new Box(450, 522, 70, 50),
    new Box(600, 522, 70, 50),
    new Box(850, 522, 60, 50),
 new Box(950, 452, 50, 120),
];

var n=0;
class zombie{
   constructor(x,x2){
    this.x=x;
    this.x2=x2;
    this.id1=n++;
    this.id2=n++;
    this.flag=0;// useing to check collison 
    this.time=0;
    this.time2=0;
    this.flag2=0;
    this.srow=2;
    this.srow2=2;
    this.velocity1=0.55;//0.85
    this.velocity2=0.55;//0.85
    this.collidedblock=0;
    this.collidedblock2=0;
   }
   update(){
    if(!this.flag)this.x<1470?this.x=this.x+this.velocity1:this.x=20;
    
   }
   update2(){
    if(!this.flag2)this.x2>=20?this.x2=this.x2-this.velocity2:this.x2=1470;
   }
   animate(){
    //document.querySelector('body').style.backgroundColor='white';
    let framex= Math.floor(gframe/sframe)%8;
    gframe++;
    ctx.drawImage(plmage,(framex)*spritw-10,this.srow*sprith+10,spritw,sprith-12,this.x,508,spritw,sprith);
   }
    animate2(){
        let framet=Math.floor(gt/st) %9;//no. of rows in my spite sheet 
      var eat=0
      if(this.srow2==1)eat=2;// while eating  changing  height
    ctx.drawImage(plmage2,(6.28+framet+eat)*spritw,this.srow2*sprith,spritw,sprith,this.x2,508,spritw,sprith);

    gt++;
    }
   checkCollision(boxX, boxY, boxWidth, boxHeight,index) {//collison with box
        const zombieWidth = spritw - 13;
        const zombieHeight = sprith;
        if (this.x < boxX + boxWidth &&
            this.x + zombieWidth > boxX &&
            508 < boxY + boxHeight &&
            508 + zombieHeight > boxY) {
            // Collision detected
           // console.log("Collision detected!");
            this.flag=1;   /// i have to use flag instead of making velocity zero cozit will not speed up 
            this.time++;
            this.srow=1;
            this.collidedblock=1;
            return true;
        }

        //console.log(this.time,this.flag,this.srow);
     
        
    }

    checkCollision2(boxX, boxY, boxWidth, boxHeight,index) {//collison with box
        const zombieWidth = spritw;
        const zombieHeight = sprith;
        if (this.x2 < boxX + boxWidth &&
            this.x2 + zombieWidth > boxX &&
            508 < boxY + boxHeight &&
            508 + zombieHeight > boxY) {
            // Collision detected
            console.log("Collision detected!");
            this.flag2=1;
            this.time2++;
            this.srow2=1;
            this.collidedblock2=1;
            return true;
        }
    }

    checkBulletCollision() {
        if (bulletreached && gun) {
            const bullet = bullets[0];
            const zombiew = spritw - 13;
            const zombieh = sprith;
            if (bullet.x < this.x + zombiew &&
                bullet.x + bullet.width > this.x &&
                bullet.y < 508 + zombieh &&
                bullet.y + bullet.height > 508) {
                // Bullet hit the zombie
                array.splice(array.indexOf(this), 1); // Remove the  RESPECRIVE zombie
                bullets=[];  // same bullet not hit two zombie // IM USING BULLET AS ARRAY SOO I CAN FREMOVE IU 
                 bulletreached=0;
                console.log('Zombie hit');
                score++;
            }
        }
    }
    
    
    checkBulletCollision2() {
        if (bulletreached && gun) {
            const bullet = bullets[0];
            const zombiew = spritw ;
            const zombieh = sprith;
            if (bullet.x < this.x2 + zombiew &&
                bullet.x + bullet.width > this.x2 &&
                bullet.y < 508 + zombieh &&
                bullet.y + bullet.height > 508) {
                // Bullet hit the zombie
                array2.splice(array.indexOf(this), 1); 
                bullets=[];
                bulletreached=0;
                console.log('Zombie2 hit');
                score++;
            }
        }
    }



    checkgrenadeCollision2() {
 if (gre && grenadelauncher && grenades[0].y==canvas.height-grenades[0].width) {
           
        const explosionRadius = 90; 
        const bullet = grenades[0];
        const bulletCenterX = bullet.x + bullet.width / 2;
        const bulletCenterY = bullet.y + bullet.height / 2;

        for (let i = array2.length - 1; i >= 0; i--) {
            const zombie = array2[i];
            const zombiew = spritw;
            const zombieh = sprith;
            const zombieCenterX = zombie.x2 + zombiew / 2;
            const zombieCenterY = 508 + zombieh / 2;
            // distance between the grenade and the zombie
            const distanceX = bulletCenterX - zombieCenterX;
            const distanceY = bulletCenterY - zombieCenterY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            console.log(distance);
            // if the zombie is within the explosion radius
            if (distance < explosionRadius) {
                
                console.log(555555);
                collided2=1;
                array2.splice(i, 1);
                score++;
                console.log('Zt');
            }
        }
               
if(collided||collided2){
    grenades = [];
        gre=0;
    if(collided)collided=0;
    if(collided2)collided2=0}
    }
}




checkgrenadeCollision() {
    if (gre && grenadelauncher && grenades[0].y==canvas.height-grenades[0].width) {
       // console.log(23232)
        const explosionRadius = 90; // Define the explosion radius
        const bullet = grenades[0];
        const bulletCenterX = bullet.x + bullet.width / 2;
        const bulletCenterY = bullet.y + bullet.height / 2;

        
        for (let i = array.length - 1; i >= 0; i--) {
            const zombie = array[i];
            const zombiew = spritw;
            const zombieh = sprith;
            const zombieCenterX = zombie.x + zombiew / 2;
            const zombieCenterY = 508 + zombieh / 2;

            
            const distanceX = bulletCenterX - zombieCenterX;
            const distanceY = bulletCenterY - zombieCenterY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          
           
            if (distance < explosionRadius) {
               
                collided=1;
                console.log(555555)
                array.splice(i, 1);
                score++;
                console.log('Zt');
            }
        }
    }
}

}





///////////////////////////////////////////////////////////////////////////
var collided=0;
var collided2=0;// reset grenade only any collison occurs eles check for all zombies

class Zombieclimber{
    constructor(type){
       this.type=type;///climber 1 or cliber 2 
        this.x=20;
        this.flag=0;
        this.velocity1=1;//0.85
        this.height=100;
        this.width=45;
        this.y=500;
        this.x2=1430;
        this.flag2=0;
        this.velocity2=1.3;//0.85
        this.y2=500;
        this.srow=1;
        this.srow2=1;
       }
       update(){

    if(!this.flag && this.type==0)this.x<1470?this.x=this.x+this.velocity1:this.x=20;
    if(!this.flag2 && this.type==1) this.x2>=20?this.x2=this.x2-this.velocity2:this.x2=1470;
        
       }
 animate(boxes){

//ANIMATION FOR RUNNING AND EATING
if(this.type==0){
    if(!this.flag){
        cjump.src='assets/crun.jpeg';
            let framex=Math.floor(c/10)%4;
            c++;
           ctx.drawImage(cjump,framex*89,129,88,151,this.x,this.y,this.width,100);
        }
           
if(this.flag){
    cjump.src='assets/cjump.jpg';
    let framex=Math.floor(b/8)%5;
    b++;
   ctx.drawImage(cjump,framex*75,0,75,151,this.x,this.y,this.width,100);
}

  


//COLLISON IWTH EAXH BOX
boxes.forEach(box => {
    if (this.y + this.height >= box.y && this.y  < box.y + box.height &&
      this.x + this.width >= box.x && this.x  < box.x + box.width
    ) {
      this.y = box.y - this.height +15;
    // this.velocity1 = 5;
      return;
  }
  else if(this.y<500){
      this.y++;
  }
});    
//COLLISON WITH PLAYER

if (
    this.x < player.x + player.width && 
    this.x + this.width> player.x && 
    player.y < this.y + this.height && 
    player.y + player.height > this.y&&!shield
       ) {
    console.log("Collided");
    this.flag=1;
    player.currentHealth--;
    }
    else{
    this.flag=0;}
                 
//COLISON WITH BULLET
if (bulletreached && gun) {
    const bullet = bullets[0];
    if (bullet.x < this.x + this.width &&
        bullet.x + bullet.width > this.x &&
        bullet.y < this.y + this.height &&
        bullet.y + bullet.height > this.y) {
        // Bullet hit the zombie
        climber=null
        bullets=[];   
         bulletreached=0;
        console.log('Zombie hit');
        score++;
}
}



    if (gre && grenadelauncher && grenades[0].y==canvas.height-grenades[0].width) {///check colllison after reaching ground 
       // console.log(23232)
        const explosionRadius = 90; 
        const bullet = grenades[0];
        const bulletCenterX = bullet.x + bullet.width / 2;
        const bulletCenterY = bullet.y + bullet.height / 2;
            const zombiew = this.width;
            const zombieh = this.height;
            const zombieCenterX = this.x + zombiew / 2;
            const zombieCenterY = this.y + zombieh / 2;

            const distanceX = bulletCenterX - zombieCenterX;
            const distanceY = bulletCenterY - zombieCenterY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          

            if (distance < explosionRadius) {
                grenades = [];
                gre=0;
                climber=null;
                score++;
                console.log('Zt');
            }
        }


}

if(this.type==1){

if(!this.flag2){
    cjump2.src='assets/crun2.jpg';
       let framet=Math.floor(c/12) %3;
       c++;
     ctx.drawImage(cjump2,(framet)*124,120,75,151,this.x2,this.y2+8,this.width,140);
}
if(this.flag2){
    cjump2.src='assets/cjump2.jpg';
    let framex=Math.floor(b/8)%5;
    b++;
   ctx.drawImage(cjump2,framex*75,0,75,151,this.x2,this.y2,this.width,100);
}

boxes.forEach(box => {
    if (this.y2 + 140 >= box.y && this.y2  < box.y + box.height &&
        this.x2 + this.width >= box.x && this.x2  < box.x + box.width
      ) {
        this.y2 = box.y - this.height +15;// this.velocity1 = 5;
        return;
    }
    else if(this.y2<500){
        this.y2++;
    }
});   

 if (
    this.x2 < player.x + player.width && 
    this.x2 + this.width> player.x && 
     player.y < this.y2 + 140 && 
     player.y + player.height > this.y2&&!shield
    ) {
     console.log("Collided");
     this.flag2=1;
    player.currentHealth--;
    }
     else{
   this.flag2=0;
    }


    if (bulletreached && gun) {
        const bullet = bullets[0];
        if (bullet.x < this.x2 + this.width &&
            bullet.x + bullet.width > this.x2 &&
            bullet.y < this.y2 + 140 &&
            bullet.y + bullet.height > this.y2) {
            // Bullet hit the zombie
            climber2=null
            bullets=[]; 
             bulletreached=0;
            console.log('Zombie hit');
            score++;
    }
    } 



 //if both zombies and climbers are together only climbers are destroyed 
    if (gre && grenadelauncher && grenades[0].y==canvas.height-grenades[0].width) {
         const explosionRadius = 90; 
         const bullet = grenades[0];
         const bulletCenterX = bullet.x + bullet.width / 2;
         const bulletCenterY = bullet.y + bullet.height / 2;
             const zombiew = this.width;
             const zombieh = this.height;
             const zombieCenterX = this.x2 + zombiew / 2;
             const zombieCenterY = this.y2 + zombieh / 2;
 
             const distanceX = bulletCenterX - zombieCenterX;
             const distanceY = bulletCenterY - zombieCenterY;
             const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
           
 
             if (distance < explosionRadius) {
                 grenades = [];
                 gre=0;
                 climber2=null;
                 score++;
                 console.log('Zt');
             }
         }   

}

}
}

var  cjump= new Image();
cjump.src='assets/crun.jpeg';

var  cjump2= new Image();
cjump2.src='assets/crun2.jpg';

var c=0;
var b=0;
var climber = new Zombieclimber(0);
var climber2 = new Zombieclimber(1);


//////////////////////////////////////////////////////////////////////////////////////////////

var shield=0;
var x=20;
var array=[]// array of zombies1
var array2=[];
var gt=0;
var st=35;
var x2=1470;
let gtCount = 0;
var score=0;

function startzombie1(n){
    x=20;
for(i=0; i<=n;i++){
 x=x+70;
 array.push(new zombie(x,0))
}
}

function startzombie2(n){
x2=1470//resetting
for(i=0; i<=n;i++){
x2=x2-65;
console.log(x2)
array2.push(new zombie(0,x2))   
 }
} 

startzombie2(3);
startzombie1(3);
var waveno=0;

var heading= document.createElement('h1');
document.body.appendChild(heading);
heading.innerText=`Waveno=${waveno} Score=${score}`
var bullets = [];
var grenades=[];
var gre=0; // to make sure burst after reaching groung
var bulletreached=0;// use to check whether bullett  reached ground( soo no more collison detetction)
var grenadelauncher=0;// which gun is used 
var gun=1;// which gun is used 

 function a() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
       switchcase();
       if (climber !== null) {
        climber.update();
       climber.animate(boxes);
       
    }
    
    if (climber2 !== null) {
        climber2.update();
        climber2.animate(boxes);
    }

   zombie1();
 zombie2();
 collidedZombies = collidedZombies.filter(zombie => array.some(z => z.id1 === zombie.id1));  
 collidedZombies2 = collidedZombies2.filter(zombie =>  array2.some(z => z.id2 === zombie.id2));
  // console.log(x2);
  grenades.forEach((grenade) => {//even tho its a single object but we hv it as array since ots easy to oremove 
    grenade.update();
grenade.draw();});
      boxes.forEach(box => box.draw());
       player.update(boxes);
        player.draw();
      bullets.forEach((bullet) => {
            bullet.update();
        bullet.draw();});
        heading.innerText=`Waveno=${waveno} Score=${score}`;
         if(array.length==0 && array2.length==0 && climber==null && climber2==null){
            cancelAnimationFrame(animationFrame);
            climber = new Zombieclimber(0);
             climber2 = new Zombieclimber(1);
            if(waveno%2==0){
            startzombie2(2);
            startzombie1(2);
            }
            else{
                startzombie2(3);
                startzombie1(3);
            }
            waveno++;
            respwanbox();
            collidedZombies=[];
            collidedZombies2=[];
          }
          animationFrame = requestAnimationFrame(a);
    }

let collidedZombies2 = [];
let collidedZombies = [];
a();
    function pauseGame() {
        cancelAnimationFrame(animationFrame);
    }

    function resumeGame() {
            a(); }


function zombie1(){
    
    array.forEach(element => {
        element.animate();
         element.update();
         element.checkBulletCollision();
         element.checkgrenadeCollision();
        detectCollisionAndRemove();
        });
}

function zombie2(){
    array2.forEach(element => {
        element.animate2();
         element.update2();
         element.checkBulletCollision2();
         element.checkgrenadeCollision2()
          detectCollisionAndRemove2();
       });
}

function switchcase(){// just after respawn evrtng should goo in place coz values of sframe and st ahve been changed //resetting
    switch(array.length){
        case 1:
        sframe=10;//4
        break;
    case 2:
        sframe=20;//8
        break;
    case 3:
            sframe=28;//13
            break;
    case 4:
            sframe=35;//19
            break;
    }
    switch(array2.length){
        case 1:
        st=10;//4
        break;
    case 2:
        st=20;//8
        break;
    case 3:
            st=28;//13
            break;
      case 4 :
            st=35;///19
            break;
    }
}

function respwanbox(){ boxes = [
        new Box(450, 522, 70, 50),
        new Box(530, 522, 70, 50),
        new Box(850, 522, 60, 50),
        new Box(950, 452, 50, 120)
    ];
         
}


    function detectCollisionAndRemove() {
        
        for (let i = 0; i < boxes.length; i++) {
            const box = boxes[i];
           // console.log(boxes)
         //  console.log(collidedZombies);
            for (let j = 0; j < array.length; j++) {
                const zombie = array[j];
                if (zombie.checkCollision(box.x, box.y, box.width, box.height,i)) {
                    collidedZombies.push(zombie);
                    collidedZombies = removeDuplicates(collidedZombies);
                    if(collidedZombies.length<=1)box.curethealth--;
                    else if(collidedZombies.length<=2)box.curethealth-=0.5;
                    else if(collidedZombies.length<=3)box.curethealth-=0.35;
                   // console.log(box.curethealth);
                    if(zombie.time>400){//200
                    boxes.splice(i, 1);
                    ///console.log(collidedZombies);
                    zombie.flag=0;
                    zombie.time=0;
                    zombie.srow=2;
                    box.curethealth=400;
                    zombie.collidedblock=0;
                    zombie.velocity1+=0.09;// increase speed of zombie
                    collidedZombies.forEach(zombie => {
                        console.log(23);
                         zombie.flag = 0;
                         zombie.time = 0;
                         zombie.srow = 2;
                         zombie.collidedblock=0;
                     });
                    }
                    
                }
            }
        }
      
    }

    function removeDuplicates(array) {
        return [...new Set(array)];
    }

    
    function detectCollisionAndRemove2() {
        for (let i = 0; i < boxes.length; i++) {
            const box = boxes[i];
           // console.log(boxes)
            for (let j = 0; j < array2.length; j++) {
                const zombie = array2[j];
                if (zombie.checkCollision2(box.x, box.y, box.width, box.height,i)) {
                    collidedZombies2.push(zombie);
                    collidedZombies2 = removeDuplicates(collidedZombies2);

                    if(collidedZombies2.length<=1)box.curethealth--;
                    else if(collidedZombies2.length<=2)box.curethealth-=0.5;
                    else if(collidedZombies2.length<=3)box.curethealth-=0.35;
                    if(zombie.time2>400){
                    console.log("colliason");
                    boxes.splice(i, 1)
                     zombie.flag2=0;
                    zombie.time2=0;
                zombie.srow2=2;
                zombie.collidedblock2=0;
                zombie.velocity2+=0.09;
                box.curethealth=400;
                collidedZombies2.forEach(zombie => {
                     zombie.flag2 = 0;
                     zombie.time2 = 0;
                     zombie.srow2 = 2;
                     zombie.collidedblock2=0;
                 });
                } 
                    
                }
            }
        }
    }



var jumpheight=10;
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            console.log(player.velocityY);
          if (player.velocityY == 0) player.velocityY = -jumpheight;
            break;
        case 'd':
            player.velocityX = 5;
            player.attachedBlock.r='right';
            break;
        case 'a':
            player.velocityX = -5;
            player.attachedBlock.r='left';
            break;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'd'){
        player.velocityX = 0;
        player.attachedBlock.r='r';
    }
    if(event.key === 'a') {
        player.velocityX = 0;
        player.attachedBlock.r='l';
    }
});

canvas.addEventListener('click', (event) => {
       
    if(!bulletreached && gun)player.shoot();
});

canvas.addEventListener('click', (event) => {

    if(!gre && grenadelauncher && grenades.length==0)player.shoot1();
});


document.getElementById('pauseBtn').addEventListener('click', pauseGame);
document.getElementById('resumeBtn').addEventListener('click', resumeGame);
document.getElementById('restartBtn').addEventListener('click', resetGame);

function resetGame(){
    window.location.reload();
}

var counthealth=0
document.getElementById('Health').addEventListener('click', ()=>{
    if(player.currentHealth<200 && counthealth<3){player.currentHealth=player.maxHealth;
        counthealth++
    }
    if(counthealth>3)document.getElementById('Health').disabled=true;
});

var countshield=0
document.getElementById('Shield').addEventListener('click',()=>{
    countshield++;
    if(countshield<4){
        shield=1;
        
    }
    if(countshield>4)document.getElementById('Shield').disabled=true
    setTimeout(()=>{
        shield=0;
    },5000)
});
document.getElementById('jump').addEventListener('click', ()=>{
jumpheight=20;
setTimeout(()=>{
    jumpheight=10;
},5000)
});


document.getElementById('grenade').addEventListener('click', ()=>{ gun=0; grenadelauncher=1;
    document.getElementById('grenade').style.backgroundColor='green';
    document.getElementById('gun').style.backgroundColor='red';
});


document.getElementById('gun').addEventListener('click', ()=>{ gun=1; grenadelauncher=0;
    document.getElementById('gun').style.backgroundColor='green';
    document.getElementById('grenade').style.backgroundColor='red';
});
