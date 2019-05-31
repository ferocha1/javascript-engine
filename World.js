class World {
	
	static canvas; 
	static canvasContext;

	constructor() {
		//variáveis de loop do jogo
		this.delta = 0;
		this.lastFrameTimeMs = 0;
		this.timeStep = 1000/60;
		
		//crie as entidades do jogo aqui
		//exemplo de declaração
		this.entidades = new Entities();
		
		//lista de entidades
		//exemplo para preencher
		this.entities = [this.entidades];
	}
	
	init() {
		World.canvas = document.getElementById('gameCanvas');
		World.canvasContext = World.canvas.getContext('2d');
		
		requestAnimationFrame(this.mainLoop.bind(this));
		//declaração dos observers de input
		World.canvas.addEventListener('mousemove', MouseInput.updateMousePos);
		World.canvas.addEventListener('keydown', KeyboardInput.updateKeyboard);
	}
    //game loop
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
	//função que percorrera a lista de entidades e irá move-las
	moveEverything(deltaTime) {	
		for (var i=0; i < this.entities.length; i++)
			this.entities[i].move(deltaTime);
	}
	//função que percorrera a lista de entidades e irá desenhá-las
	drawEverything() {
		//função que limpa a tela
		Utils.clearScreen();

		for (var i=0; i < this.entities.length; i++)
			this.entities[i].draw();
	}

	
}








