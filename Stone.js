class Stone {
    constructor(x, y, width, height , img) {
      this.img = img;
      var options = {
          'restitution':0.8,
          'friction':0.9,
          'density':12
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke('black');
      fill(50);
      rect(0, 0, this.width, this.height);
      image(this.img , 0-this.width/2 , 0 - this.height/2 , this.width , this.height);
      pop();
    }
  };
  