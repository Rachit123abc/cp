class Log{
    constructor(x,y,height,angle){
        var options={
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        Matter.Body.setAngle(this.body, angle);
        this.w=50;
        this.h=50;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        fill("white")
        strokeWeight(4);
        stroke("green")
        rect(0,0,this.w,this.h);
        pop();

    }
}