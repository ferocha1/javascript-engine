class Bricks extends Entities{
	constructor(brickW, brickH, brickGap, brickCol, brickLin){
		super();
		this.brickW = brickW;
		this.brickH = brickH;
		this.brickGap = brickGap;
		this.brickCol = brickCol;
		this.brickLin = brickLin;
		this.brickGrid = new Array(this.brickCol * this.brickLin);
		this.brickFill();
	}
	brickFill(){
		for(var i=0; i<this.brickCol * this.brickLin; i++) {
			this.brickGrid[i] = true;
		} 
	}
	draw(){
		for(var eachRow=0;eachRow<this.brickLin;eachRow++) {
			for(var eachCol=0;eachCol<this.brickCol;eachCol++) {
				var arrayIndex = this.rowColToArrayIndex(eachCol, eachRow); 
				if(this.brickGrid[arrayIndex]) {
					Utils.colorRect(this.brickW*eachCol,this.brickH*eachRow,this.brickW-this.brickGap,this.brickH-this.brickGap, 'blue');
				} // end of is this brick here
			} // end of for each brick
		}
	}
	move(deltaTime){

	}
	rowColToArrayIndex(col, row) {
		return col + this.brickCol * row;
	}
}