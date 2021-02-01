//Create variables here
var dog;
var dogImage, dogImage2;
var foodS,foodStock;
var database; 

function preload(){
  dogImage=loadImage("images/dogImg.png")
  dogImage2=loadImage("images/dogImg1.png")
}

function setup(){
  createCanvas(500,500);
  database = firebase.database(); 

  foodStock=database.ref("food"); 
  foodStock.on("value",readStock);

  dog=createSprite(250,250,20,20);
  dog.scale=0.25;
  dog.addImage(dogImage)
  
}


function draw() {  
  background(46,139,87); 


  if(keyDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogImage2)

  }
  

  textSize(20)

  fill("white");
  text("Food Remaing :" + foodS, 180,100);

  text("Note : Press Up Arrow to feed the Doggo" , 130,70)
  drawSprites();

}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref("/").update({
    food:x
  })
  
}

function readStock(data){
  
  foodS=data.val()

}




