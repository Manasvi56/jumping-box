var fixed1, fixed2, fixed3, fixed4;
var moving;
var music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    createCanvas(800,600);
    moving = createSprite(random(10,700),300,10,10);
    moving.shapeColor = "white";
    moving.velocityY =2;
    moving.velocityX =2;


    fixed1 = createSprite(100,590,180,20);
    fixed1.shapeColor = "red";

    fixed2 = createSprite(300,590,180,20);
    fixed2.shapeColor = "green";

    fixed3 = createSprite(500,590,180,20);
    fixed3.shapeColor = "blue";

    fixed4 = createSprite(700,590,180,20);
    fixed4.shapeColor = "yellow";
}

function draw(){
    background(rgb(10,10,10));


    if(moving.x<0){
        music.stop()
        moving.velocityX =3;
    }else if(moving.x>800){
        music.stop()
        moving.velocityX = -3;
    }

    if(isTouching(moving, fixed4)){
        music.play();
        moving.shapeColor="yellow";
        bounceOff(moving,fixed4);


    }
else if(isTouching(moving, fixed3)){
    music.stop();
    moving.shapeColor="blue";
    bounceOff(moving,fixed3);

    }

    else if(isTouching(moving, fixed2)){
        music.stop();
        moving.shapeColor="green";
        bounceOff(moving,fixed2);
        moving.velocityX=0;
        moving.velocityY=0;


    }

    else if(isTouching(moving, fixed1)){
        music.stop();
        moving.shapeColor="red";
        bounceOff(moving,fixed1);

    }

    if(moving.y<0){
        music.stop();
        moving.velocityY =3;
    }

    drawSprites();

}
    function isTouching(object1,object2){

        if(object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object1.width/2+object2.width/2)
        return true;
    }

else{

    return false;
    }




function bounceOff(object1, object2){

    if(object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object1.width/2+object2.width/2){
        object1.velocityX=object1.velocityX*-1
        object2.velocityX=object2.velocityX*-1

    }
    if(object1.y-object2.y<object2.height/2+object1.height/2&&object2.y-object1.y<object1.height/2+object2.height/2){
        object1.velocityY=object1.velocityY*-1
        object2.velocityY=object2.velocityY*-1



}

if(object1.x<0){
    object1. velocityX =3;
}

else if(object2.x>1200){
    object2.velocityX =-3;
}
}