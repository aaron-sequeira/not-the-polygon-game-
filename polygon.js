class Polygon {
constructor(x,y,r){
    var polygon_options = {

        restitution: 0.5,
             friction: 1.0,
               densitity: 1.0
    
    }
    
    //creating a polygon
      this.polygon = Bodies.circle(x, y, r,{polygon_options});
        this.r = r;
            World.add(world,this.polygon);
    this.image = loadImage("image/polygon.png")


}
display(){
    var angle = this.polygon.angle;
    push();
    translate(this.polygon.position.x, this.polygon.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0,this.r,this.r);
    pop();




}




}