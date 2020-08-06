class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity = 255
        World.add(world, this.body);
      }

      display(){
        
        if(this.body.speed < 3){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        }
       else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.visiblity);
          pop();
        }  
      }

      score(){
        if (this.Visiblity < 0 && this.Visiblity > -105){
          score++;
        }
       }   
 } 
