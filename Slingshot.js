class Slingshot {
    constructor(bodyA, pointB){
        var option ={
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
        }
        this.pointB = pointB
        this.sling = Constraint.create(option);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
        var aPos = this.sling.bodyA.position;
        var bPos = this.pointB;

        push();
        stroke("pink");
        strokeWeight(5);
        line(aPos.x, aPos.y, bPos.x, bPos.y);
        pop();
        }
    }
}