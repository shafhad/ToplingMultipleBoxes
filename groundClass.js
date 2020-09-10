
class Ground{

    constructor(x,y,w,h){

        this.body = Bodies.rectangle(x,y,w,h,{isStatic: true});
        this.width = w;
        this.height = h;

        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        strokeWeight(3);
        stroke("brown")
        fill("green");
        rect(pos.x, pos.y, this.width, this.height);

    }

}
