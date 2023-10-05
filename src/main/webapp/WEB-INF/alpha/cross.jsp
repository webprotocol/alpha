<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>cross.jsp</title>
<style type="text/css">
body {
	background-image: url('/media/alpha.png'), url('/media/small.png');
}

#surface {
	border-collapse: collapse;
	font-family: monospace;
	font-size: 150%;
	
	border: 10px outset red;
}

#surface td {
	opacity: 0.9;
}

</style>
<script type="text/javascript">
function sleep(millis) {
	return new Promise(function(resolve, reject) {
		setTimeout(resolve, millis);
	});
}

class Cross {
	constructor() {
		this.direction = parseInt(Math.random()*4);
		this.speed = Math.random()*200 + 10;
	}

	show() {
		let td = surface.rows[this.alpha.line-1].cells[this.alpha.column-1];
		td.style.color = this.alpha.fg;
		td.style.background = this.alpha.bg;
		td.innerText = this.alpha.ch;
	}
	
	hide() {
		let td = surface.rows[this.alpha.line-1].cells[this.alpha.column-1];
		td.style.color = 'black';
		td.style.background = 'black';
	}
	
	move() {
		this.hide();
		
		switch(this.direction) {
		case 0:	// TOP
			this.alpha.line--;
			break;
		case 1:	// RIGHT
			this.alpha.column++;
			break;	
		case 2:	// BOTTOM
			this.alpha.line++;
			break;
		case 3:	// LEFT
			this.alpha.column--;
			break;	
		}
		
		let alpha = this.alpha;
		if (alpha.line==0 || alpha.column==0 || alpha.line==21 || alpha.column==41)
			return false;
		
		this.show();
		return true;
	}
	
	async run() {
		let response = await fetch('/alpha/data');
		this.alpha = await response.json();
		this.alpha.line = 10;
		this.alpha.column = 20;
		console.log(this.alpha);
		
		this.show();
		
		for (;;) {
			await sleep(this.speed);
			
			if(!this.move())
				break;
		}
	}
}

window.onload = () => {
	
	createBtn.onclick = () => {
		let cross = new Cross();
		cross.run();
	}
}
</script>
</head>
<body>
<h1>async/await + class</h1>
<hr>
<button id="createBtn">Create</button>
<hr>
<table id="surface" onmousedown="event.preventDefault();" oncontextmenu="event.preventDefault();">
	<tbody>
	<c:forEach var="i" begin="0" end="${surface.size()-1}">
		<tr>
		<c:forEach var="alpha" items="${surface[i]}">
			<td style="color: black; background: black;">${alpha.ch}</td>
<%-- 			<td>${alpha.ch}</td> --%>
		</c:forEach>
		</tr>
	</c:forEach>
	</tbody>
</table>
</body>
</html>