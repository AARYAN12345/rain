     class Drops{
         constructor(x,y){
            this.drops=[]
            var options = {
                isStatic:false,
                restitution:0.3,
                friction:0.3,
                density:1.2
            }               
         
         this.radius = 12;
    this.body = Bodies.circle(x,y, this.radius,options); 
    World.add(world, this.body);
}
     display(){
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);  
        ellipse(0, 0, this.radius,this.radius);
        pop(); 
    
    
    
    for(var i=0; i<maxDrops; i++){
      drops.push(new createDrop(random)(0,400),random(0,400))
      }
    }     
    }