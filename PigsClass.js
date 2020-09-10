

class Pigs{

    constructor(x,y){
        this.color = "pink";
        this.body = Bodies.rectangle(x,y, 50, 50, {restitution:0.8, friction: 0.3, density: 1.0});
        this.width = 100;
        this.height = 50;
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color)
        rect(0,0, this.width, this.height);
        pop();


    }
}
