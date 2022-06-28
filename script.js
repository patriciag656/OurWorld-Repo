const canvas =document.querySelector('canvas'); 
const c = canvas.getContext('2d');
canvas.width = 1024; 
canvas.height = 576; 
c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);
const image = new Image(); 
image.src = "./images/styleGameMapZoom.png"; 
const playerImage = new Image(); 
playerImage.src = "./images/playerDown.png"; 

class Sprite
{
	constructor({position, velocity, imgSrc}){
		this.position = position; 
		this.imgSrc = imgSrc; 
	}

	draw(){
		c.drawImage(this.imgSrc, this.position.x , this.position.y)
	}
}

const background = new Sprite({
	position:
	{x: -570, y: -710}, 
	imgSrc: image
	}
); 
const keys = {
	w:{pressed : false},
	a:{pressed : false},
	s:{pressed : false},
	d:{pressed : false},
	l:{pressed : false},
	r:{pressed : false},
	u:{pressed : false},
	down:{pressed : false},

}

function animate()
{
	window.requestAnimationFrame(animate);
	background.draw(); 
	c.drawImage(playerImage, 
	0, 
	0, 
	playerImage.width / 4, 
	playerImage.height,
	canvas.width / 2 - (playerImage.width / 4) / 2, 
	canvas.height / 2 - playerImage.height /2,
	playerImage.width/4, 
	playerImage.height
	)

	if((keys.w.pressed || keys.u.pressed) && (lastKey === 'w' || lastKey ==='u')){
		background.position.y += 3;
	}
	else if((keys.a.pressed || keys.l.pressed) && (lastKey === 'a' || lastKey === 'l'))
	{
		background.position.x += 3;

	}
	else if((keys.s.pressed || keys.down.pressed) && (lastKey === 's'|| lastKey === 'down'))
	{
		background.position.y -= 3;

	}
	else if((keys.d.pressed || keys.r.pressed) && (lastKey === 'd' || lastKey === 'r'))
	{
		background.position.x -= 3;

	}
}
animate();
let lastKey = ""; 
window.addEventListener('keydown', (e) => {
 	//console.log(e.key); 
 	switch(e.key){
 		case 'w':
	 		keys.w.pressed = true; 
	 		lastKey = 'w';
	 		break;
 		case 'a':
	 		keys.a.pressed = true; 
	 		lastKey = 'a';
	 		break; 
	 	case 's':
	 		keys.s.pressed = true; 
	 		lastKey = 's';
	 		break; 
	 	case 'd':
	 		keys.d.pressed = true; 
	 		lastKey = 'd';
	 		break; 

 	}
 	switch(e.keyCode){
 		case 37:
	 		console.log("LEFT ARROW KEY WAS PRESSED")
	 		keys.l.pressed = true; 
	 		lastKey = 'l';
	 		break;
	 	case 38:
	 		console.log("UP ARROW KEY WAS PRESSED")
	 		keys.u.pressed = true; 
	 		lastKey = 'u';
	 		break;
	 	case 39:
	 		console.log("RIGHT ARROW KEY WAS PRESSED")
	 		keys.r.pressed = true; 
	 		lastKey = 'r';
	 		break;
	 	case 40:
	 		console.log("DOWN ARROW KEY WAS PRESSED")
	 		keys.down.pressed = true; 
	 		lastKey = 'down';
	 		break;
 		
 	}

})
window.addEventListener('keyup', (e) => {
 	switch(e.key){
 		case 'w':
	 		keys.w.pressed = false; 
	 		break;
 		case 'a':
	 		keys.a.pressed = false; 
	 		break; 
	 	case 's':
	 		keys.s.pressed = false; 
	 		break; 
	 	case 'd':
	 		keys.d.pressed = false; 
	 		break; 
 	}
 	switch(e.keyCode){
 		case 37:
	 		keys.l.pressed = false; 
	 		break;
 		case 38:
	 		keys.u.pressed = false; 
	 		break; 
	 	case 39:
	 		keys.r.pressed = false; 
	 		break; 
	 	case 40:
	 		keys.down.pressed = false; 
	 		break; 
 	}
 	
})

