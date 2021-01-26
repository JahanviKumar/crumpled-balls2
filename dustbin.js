class Dustbin{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }
    
    
            this.x = x;
            this.y = y;
            this.width=width;
            this.height=height;
            this.angle=0;	
            
            this.bin = loadImage("dustbingreen.png")

            this.body = Bodies.rectangle(x,y, this.width, this.height, options);
    
    

    World.add(world, this.body);
    
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER)
        image(this.bin,460,pos.y,150,140)
        rect(pos.x, pos.y, this.width, this.height);

        
      }
    };