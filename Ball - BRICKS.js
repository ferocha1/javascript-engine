class Ball extends Entities {
	constructor(posX,posY,speedX,speedY,radius,color) {
		super();
		this.posX = posX;
		this.posY = posY;
		this.speedX = speedX;
		this.speedY = speedY;
		this.radius = radius;
		this.color = color;
		this.originalSpeedX = this.speedX;
	}
	
	resetPos(posX, posY) {
		this.posX = posX;
		this.posY = posY;
	}
	
	move(deltaTime) {
		this.posX += this.speedX*deltaTime;
		this.posY += this.speedY*deltaTime;
		
		if(this.posX < 0) { //left
			this.speedX *= -1;
		}
		if(this.posX > 800) { // canvas.width
			this.speedX *= -1;
		}
		if(this.posY < 0) { // top
			this.speedY *= -1;
		}
		if(this.posY > 600) { // canvas.height
			this.resetPos(400,300); //canvas width and height / 2
		}
		
		//this.paddleCollision();
	}
	
	paddleCollision(paddle) {
		//var paddleTopEdgeY = canvas.height-PADDLE_DIST_FROM_EDGE;
		var paddleTopEdgeY = 600-paddle.distFromEdge;
		var paddleBottomEdgeY = paddleTopEdgeY + paddle.thickness;
		var paddleLeftEdgeX = paddle.posX;
		var paddleRightEdgeX = paddleLeftEdgeX + paddle.width;
		if( this.posY > paddleTopEdgeY && // below the top of paddle
			this.posY < paddleBottomEdgeY && // above bottom of paddle
			this.posX > paddleLeftEdgeX && // right of the left side of paddle
			this.posX < paddleRightEdgeX) { // left of the left side of paddle
			
			this.speedY *= -1;

			var centerOfPaddleX = paddle.posX+paddle.width/2;
			var ballDistFromPaddleCenterX = this.posX - centerOfPaddleX;
			this.speedX = ballDistFromPaddleCenterX * this.originalSpeedX/(paddle.width/4);
		}
	}

	ballBrickHandling(deltaTime, brick) {
		var ballBrickCol = Math.floor(this.posX / brick.brickW);
		var ballBrickRow = Math.floor(this.posY / brick.brickH);
		var brickIndexUnderBall = brick.rowColToArrayIndex(ballBrickCol, ballBrickRow);
	
		if(ballBrickCol >= 0 && ballBrickCol < brick.brickCol &&
			ballBrickRow >= 0 && ballBrickRow < brick.brickLin) {
	
			if(brick.brickGrid[brickIndexUnderBall]) {
				brick.brickGrid[brickIndexUnderBall] = false;
				
				var prevBallX = this.posX - this.speedX*deltaTime;
				var prevBallY = this.posY - this.speedY*deltaTime;
				var prevBrickCol = Math.floor(prevBallX / brick.brickW);
				var prevBrickRow = Math.floor(prevBallY / brick.brickH);
	
				if(prevBrickCol != ballBrickCol) {
					this.speedX *= -1;
				}
				if(prevBrickRow != ballBrickRow) {
					this.speedY *= -1;
				}
			}
		}
	}
	
	draw() {
		//exemplo para desenhar com imagem
			//Utils.drawImage('image.png', this.posX, this.posY);
		//exemplo para desenhar com forma
		Utils.colorCircle(this.posX,this.posY,this.radius,this.color);
	}
}
