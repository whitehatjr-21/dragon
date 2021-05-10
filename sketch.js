var dragon,dragon_img;
var fireball,fireball_img;
var weapon_img; 

function preload(){
  dragon_img = loadImage("Dragon.png");
  fireball_img = loadImage("Fireball.png")
  weapon_img = loadImage("weapon.png")
}
function setup() {
  createCanvas(1200,800);
dragon = createSprite(100,600,20,20)
dragon.addImage("dragon",dragon_img)
fireball = createSprite(1000,700,30,30)
fireball.addImage("fireball",fireball_img)




}

function draw() {
  background(0,0,0);  
  SpawnWeapons();
  drawSprites();
}
function SpawnWeapons(){
  if(frameCount%60===0){
  var weapon = createSprite(1000,600,8,10);
 weapon.addImage("weapon",weapon_img)
  weapon.velocityX = -6;
  weapon.y = Math.round(random(200,600))
  }
}

