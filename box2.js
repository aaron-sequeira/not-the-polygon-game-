class Box2{
    constructor(x, y, width, height, angle) {
        var options = {
        'isStatic':false,  
          'restitution':0.8,
            'friction':1.0,
              'density':1.0
        }
        this.box = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.box);
      }
      display(){
        var angle = this.box.angle;
        push();
        translate(this.box.position.x, this.box.position.y);
        rotate(angle);
        fill("white")
        rect(0, 0, this.width, this.height);
        pop();
      }
}