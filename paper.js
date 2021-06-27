class Paper
{
constructor(x,y,radius)
{
var options=
{
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:0.1

    
    
}

this.image=loadImage("ball.png")
this.radius=radius
this.body=Bodies.circle(x,y,this.radius,options)
World.add(world,this.body)

}
display()
{
imageMode(CENTER)
fill("red")
image(this.image,this.body.position.x,this.body.position.y,this.radius)
}
}
