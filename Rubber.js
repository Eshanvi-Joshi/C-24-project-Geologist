class Rubber{
	constructor(x,y,r)
	{
		var options={
			restitution: 2,
			friction:1,
			density:0.5
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}

	display()
	{
	var rubberpos=this.body.position;	
	angleMode(RADIANS)	
	push()
	translate(rubberpos.x, rubberpos.y);
	ellipseMode(RADIUS)
	strokeWeight(4);
	stroke("black");
	fill("black");
	//draw the ellipse here to display the rubber ball
	ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
	pop()
	}

}