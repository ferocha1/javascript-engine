class Paddle extends Entities {
	constructor (posX,width,thickness,distFromEdge,color = 'white') {
		super();
		this.posX = posX;
		this.width = width;
		this.thickness = thickness;
		this.distFromEdge = distFromEdge;
		this.color = color;
	}
	
	draw () {
		Utils.colorRect(this.posX, World.canvas.height-this.distFromEdge,this.width, this.thickness, this.color);
	}
	
	move (deltaTime){
		this.posX = MouseInput.x - (this.width/2);
	}
	
}