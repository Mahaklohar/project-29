class Block{
    constructor(x, y, color){
        this.fill = color;
        var option={
            restitution:0.8,
            friction: 0.1,
            density: 0.4
        }

        this.body = Bodies.rectangle(x, y, 30, 40, option);
        this.width = 30;
        this.height = 40;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        this.body.debug = true
        push();
        rectMode(CENTER);
        fill(this.fill)
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}