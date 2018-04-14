class options {
	constructor (height, width, bg, fontSize, textAlign) {
		this.height = '300px',
		this.width = '500px',
		this.bg = '#fff000',
		this.fontSize = '20px',
		this.textAlign = 'center';
	}

	createDiv () {
		let div = document.createElement('div');	
		div.innerHTML = "here is some text";
	  div.style.cssText = `height:${this.height}; width:${this.width}; background-color:${this.bg}; font-size:${this.fontSize}; text-align:${this.textAlign};`;

document.body.appendChild(div);
	}


}
let obj = new options();
obj.createDiv(); 