class Paper{
    constructor(x, y, width) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.body=Bodies.circle(this.x,this.y,(this.width)/2,options);

        this.image = loadImage("paper.png");
        //this.image.scale=0.2;
        World.add(world, this.body);
      }
      display(){
        push();
        rectMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.width);
        pop();
      }
}