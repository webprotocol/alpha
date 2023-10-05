



window.onload = () => {

	/** @type {HTMLTableElement} */	
	let surface = document.querySelector('#surface');
	
	surface.onmousedown = e => e.preventDefault();
	surface.oncontextmenu = e => e.preventDefault();
	
	/** @type {HTMLButtonElement} */
	let btnCreate = document.querySelector('#btnCreate');
	
	btnCreate.onclick = e => {
		console.log("btnCreate...");
		let zigzag = new ZigZag();
		zigzag.run();
	}
}

class Alpha {
	line
	column
	fg
	bg
	ch
};

class ZigZag {
	constructor() {
		/** @type {HTMLTableElement} */
		this.surface = document.querySelector("#surface");
		this.speed = Math.random()*200 + 10;
		this.direction = Direction.values[parseInt(Math.random()*4)];
		this.step = 0;
		
	}
	
	show() {
		let td = this.surface.rows[this.alpha.line-1].cells[this.alpha.column-1];
		td.style.color = this.alpha.fg;
		td.style.background = this.alpha.bg;
		td.innerText = this.alpha.ch;
	}
	
	hide() {
		let td = this.surface.rows[this.alpha.line-1].cells[this.alpha.column-1];
		td.style.color = 'white';
		td.style.background = 'white';
	}
	
	conflictCheck() {
		if (this.alpha.line == 1 && this.alpha.column == 0 ||
			 this.alpha.line == 0 && this.alpha.column == 1 ) {
			this.alpha.line = 1;
			this.alpha.column = 1;
			let canDirection = [Direction.RIGHT, Direction.BOTTOM];
			this.direction = canDirection[parseInt(Math.random()*2)];
		} else if (this.alpha.line == 0 && this.alpha.column == 40 ||
			 this.alpha.line == 1 && this.alpha.column == 41 ) {
			this.alpha.line = 1;
			this.alpha.column = 40;
			let canDirection = [Direction.LEFT, Direction.BOTTOM];
			this.direction = canDirection[parseInt(Math.random()*2)];
		} else if (this.alpha.line == 20 && this.alpha.column == 41 ||
			 this.alpha.line == 21 && this.alpha.column == 40 ) {
			this.alpha.line = 20;
			this.alpha.column = 40;
			let canDirection = [Direction.LEFT, Direction.TOP];
			this.direction = canDirection[parseInt(Math.random()*2)];
		} else if (this.alpha.line == 21 && this.alpha.column == 1 ||
			 this.alpha.line == 20 && this.alpha.column == 0 ) {
			this.alpha.line = 20;
			this.alpha.column = 1;
			let canDirection = [Direction.RIGHT, Direction.TOP];
			this.direction = canDirection[parseInt(Math.random()*2)];
		} else if (this.alpha.line == 0 && this.alpha.column>=2 && this.alpha.column<=39) {
			this.alpha.line = 1;
			let canDirection = [Direction.LEFT, Direction.RIGHT, Direction.BOTTOM];
			this.direction = canDirection[parseInt(Math.random()*3)];
		} else if (this.alpha.line == 21 && this.alpha.column>=2 && this.alpha.column<=39) {
			this.alpha.line = 20;
			let canDirection = [Direction.LEFT, Direction.RIGHT, Direction.TOP];
			this.direction = canDirection[parseInt(Math.random()*3)];
		} else if (this.alpha.line>=2 && this.alpha.line<=19 && this.alpha.column==0) {
			this.alpha.column = 1;
			let canDirection = [Direction.TOP, Direction.BOTTOM, Direction.RIGHT];
			this.direction = canDirection[parseInt(Math.random()*3)];
		} else if (this.alpha.line>=2 && this.alpha.line<=19 && this.alpha.column==41) {
			this.alpha.column = 40;
			let canDirection = [Direction.TOP, Direction.BOTTOM, Direction.LEFT];
			this.direction = canDirection[parseInt(Math.random()*3)];
		}
	}
	
	move() {
		this.hide();
		
		switch(this.direction) {
		case Direction.TOP:
			this.alpha.line--;
			break;	
		case Direction.RIGHT:
			this.alpha.column++;
			break;
		case Direction.BOTTOM:
			this.alpha.line++;
			break;
		case Direction.LEFT:
			this.alpha.column--;
			break;
		}

		this.conflictCheck();		
		
		if (this.step==10) {
			this.direction = Direction.values[parseInt(Math.random()*4)];
			this.step = 0;
		}
		
		this.step++;
		this.show();
		
	}
	
	async run() {
		let response = await fetch('/alpha/data');
		/** @type {Alpha}*/
		this.alpha = await response.json();
		console.log(this.alpha);
		
//		this.alpha.line = 10;
//		this.alpha.column = 2;
//		this.direction = Direction.TOP;
		
		this.show();

		for (;;) {
			await sleep(this.speed);
			this.move();
		}	
	}
}

function sleep(millis) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, millis);
	});
}

const Direction = {
	TOP 		: 'TOP',
	RIGHT 		: 'RIGHT',
	BOTTOM 	: 'BOTTOM',
	LEFT 		: 'LEFT',
	
	values 	: ['TOP', 'RIGHT', 'BOTTOM', 'LEFT']
};

Object.freeze(Direction);






