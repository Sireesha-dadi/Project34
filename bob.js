class Bob{

    constructor(x,y){
        
        var options={
            'restitution':1,
            'isStatic':false,
            'friction':0,
            'frictionAir':0.0,
            'slop':1,
            'inertia':Infinity
            
        }
        this.body= Bodies.circle(x,y,30,options);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
       //rectMode(CENTER)
       fill("pink");
       ellipse(0,0,30,30);
       pop()
    }

}