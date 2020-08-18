class Paper {
    constructor(x, y, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':2,
          'density':1.2
      }
      this.body = Matter.Bodies.circle(x, y, 20, options);
      this.width = 20;
      this.height = height;
      
      Matter.Body.setAngle(this.body,angle);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);  
      stroke("purple"); 
      fill(10,200,200);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  
  
  