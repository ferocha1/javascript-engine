class Utils {
	//função para desenhar retangulos
	static colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor) {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
	}
	//função para desenhar circulos
	static colorCircle(centerX,centerY, radius, fillColor) {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.beginPath();
		World.canvasContext.arc(centerX,centerY,radius, 0,Math.PI*2, true);
		World.canvasContext.fill();
	}
	//função que escreve textos
	static colorText(font, text, posX, posY, fillColor) {
		World.canvasContext.font = font;
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.fillText(text, posX, posY);
	}
	//função para limpar a tela
	static clearScreen() {
		Utils.colorRect(0,0, World.canvas.width,World.canvas.height, 'black');
	}
	//função que carrega e desenha a imagem
	static drawImage(imageName, posX, posY){
		var img = new Image();
		img.src = imageName;

		World.canvasContext.drawImage(img, posX, posY);
	}
	/*exemplo de declaração
	Utils.drawImage('image.png', 100, 100);
}
