class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.2,
          'friction':0.2,
          'density':1.2,
         }
      this.x=x;
      this.y= y
      this.radius=50;
      this.body=Bodies.circle(this.x,this.y,this.radius,options)
      this.image=loadImage("unnamed.jpg");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
       push(); 
       translate(pos.x, pos.y); 
       strokeWeight(3); 
       fill(0,0,255); 
       imageMode(CENTER);
       image(this.image, 0, 0, 70, 100);
      pop();
    }
  };