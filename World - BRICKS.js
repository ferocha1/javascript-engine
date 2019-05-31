class World {
	
	static canvas; 
	static canvasContext;

	constructor() {
		//variables for the mainLoop
		this.delta = 0;
		this.lastFrameTimeMs = 0;
		this.timeStep = 1000/60;
		
		//game entities
		this.ball = new Ball(400,300,0.1,0.1,10,'white'); 
		this.paddle = new Paddle(400,100,10,60);
		this.bricks = new Bricks(80,60,2,10,3);
		//game entities list
		this.entities = [this.ball, this.paddle, this.bricks];
	}
	
	init() {
		World.canvas = document.getElementById('gameCanvas');
		World.canvasContext = World.canvas.getContext('2d');
		
		requestAnimationFrame(this.mainLoop.bind(this));

		World.canvas.addEventListener('mousemove', MouseInput.updateMousePos);
		World.canvas.addEventListener('keydown', KeyboardInput.updateKeyboard);
	}

	mainLoop(timeStamp) {
		if(timeStamp < this.lastFrameTimeMs + this.timeStep) {
			requestAnimationFrame(this.mainLoop.bind(this));
			return;
		}
		this.delta += timeStamp - this.lastFrameTimeMs;
		this.lastFrameTimeMs = timeStamp;
		while(this.delta >= this.timeStep) {
			this.moveEverything(this.timeStep); 
			this.delta -= this.timeStep;
		}
		this.drawEverything();
		requestAnimationFrame(this.mainLoop.bind(this));
	}
	
	moveEverything(deltaTime) {	
		for (var i=0; i < this.entities.length; i++)
			this.entities[i].move(deltaTime);

		this.ball.paddleCollision(this.paddle);
		this.ball.ballBrickHandling(this.delta, this.bricks);
	}

	drawEverything() {
		Utils.clearScreen();

		for (var i=0; i < this.entities.length; i++)
			this.entities[i].draw();

		if(this.bricks.brickGrid.find(brickgrid => brickgrid == true) == undefined)
			Utils.colorText('Arial', 'ganhou', 400, 300,'white');
	}

	
}








