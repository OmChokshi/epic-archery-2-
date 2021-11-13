class PlayerArcher{
    constructor(x,y,width,height){
        var option = {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.image=loadImage("./assets/playerArcher.js");
        Matter.Body.setAngle(this.body,-PI/2)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        if (keyIsDown(DOWN_ARROW) && angle < -1.2) { 
            angle += 0.01;
            Matter.Body.setAngle(this.body, angle);
         }

         if (keyIsDown(UP_ARROW) && angle < -1.9) { 
            angle -= 0.01;
            Matter.Body.setAngle(this.body, angle);
         }
         push();
         translate(pos.x,pos.y);
         rotate(-1.2,-1.9);
         imageMode(CENTER);
         image(this.image,0,0,this.width,this.height);
         pop();
    }  
}