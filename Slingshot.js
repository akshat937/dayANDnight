class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }

    attach(body){
        this.Sling.bodyA = body;
    }

    fly(){
        this.Sling.bodyA = null;
    }

    display(){
        fill("red");
        strokeWeight(5);
        line(pointA.x+10, pointA.y+10, pointB.x-10, pointB.y-10);
        }
    }
    
