class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;  //bird's body
            var pointB = this.pointB;   //point to which bird is attached
            strokeWeight(4);
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
            push();

            stroke("#47230F");

            if(pointA.x < 220   ){        
                strokeWeight(7);
                line(pointA.x-20, pointA.y,pointB.x-20,pointB.y); //left rubber band
                line(pointA.x+20, pointA.y,pointB.x+20,pointB.y); //left rubber band
                image(this.sling3,pointA.x-30   , pointA.y-10, 15, 30);
            }
            else{
                strokeWeight(3);
                line(pointA.x-20, pointA.y,pointB.x-20,pointB.y); //left rubber band
                line(pointA.x+20, pointA.y,pointB.x+20,pointB.y); //left rubber band
                image(this.sling3,pointA.x+23, pointA.y-10, 15, 30);
            }
            pop();
        }
        image(this.sling1, 200,20);
        image(this.sling2, 170,20);
    }
    
}