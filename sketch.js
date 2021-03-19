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

    if(block1.isTouching(ball) && ball.bounceOff(fixed1)){ ball.shapeColor = rgb(0,0,255); music.play(); }


    if(block1.isTouching(ball) && ball.bounceOff(fixed2)){ ball.shapeColor = rgb(0,0,255); music.play(); }

    if(isTouching(moving, fixed2) &&   bounceOff(moving,fixed2))
    {
        music.stop();
        moving.shapeColor="green";
        moving.velocityX=0;
        moving.velocityY=0;


    }

     if(isTouching(moving, fixed1)&&         bounceOff(moving,fixed1)
     ){
        music.stop();
        moving.shapeColor="red";

    }

    if(moving.y<0){
        music.stop();
        moving.velocityY =3;
    }

    drawSprites();


}
