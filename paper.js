class Paper {
    constructor(x,y,r){
      var options = {
          restituion:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x,y,r);
      this.r=r
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      push()
      translate(pos.x,pos.y)
      ellipseMode(RADIUS);
      fill("black");
     ellipse(0,0, this.r*2, this.r*2);
     pop()
    }
  };