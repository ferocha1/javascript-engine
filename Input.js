class MouseInput {
	
	static x = 400;
	static y = 400;
	
	static updateMousePos(evt) {
		var rect = World.canvas.getBoundingClientRect();
		var root = document.documentElement;

		MouseInput.x = evt.clientX - rect.left - root.scrollLeft;
		MouseInput.y = evt.clientY - rect.top - root.scrollTop;
	}
}
class KeyboardInput{
	static updateKeyboard(evt){
		/*seta esquerda*/
		if(event.keyCode == 37) {
        	//code here 
    	}
    	/*seta direita*/
    	else if(event.keyCode == 39) {
        	//code here
    	}
    	//adione outros keycodes em baixo para tratar mais teclas do teclado
	}
}