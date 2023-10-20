import React from 'react';
import ReactDOM from 'react-dom/client';
import Alpha from './util/alpha.js';
import {sprintf} from 'sprintf-js'
import sleep from 'es7-sleep';
import $ from 'jquery';
import "./css/flow.css";

class Flow extends Alpha {
	position = 'relative'
	
	left = 0;
	top = 0;
	
	constructor(w, h) {
		super();
		this.w = w;
		this.h = h;
	}
	
	setLine(line) {
		this.line = line;
		this.top = this.line * this.h;
	}
	
	setColumn(column) {
		this.column = column;
		this.left = this.column * this.w;
	}
	
}

class App extends React.Component {
	
	constructor() {
		super();
		let w = $('.collapse td').outerWidth();
		let h = $('.collapse td').outerHeight();
		
		console.log(w + ", " + h)		
		
		for (let i=0; i<20; i++) {
			this.state.surface[i] = [];
			for (let j=0; j<40; j++) {
				let flow = new Flow(w, h);
				flow.position = 'absolute'
				flow.setLine(i);
				flow.setColumn(j);
				this.state.surface[i][j] = flow;
			}
		}
	}
	
	state = {
		surface: [],
		disabled: false,
		rowNum: 0,
	}
	
	btnUp_click(e) {
		this.move(this.state.surface[this.state.rowNum], 1)	// UP
	}
	
	btnRight_click(e) {
		this.move(this.state.surface[this.state.rowNum], 2)	// Right
	}
	
	btnDown_click(e) {
		this.move(this.state.surface[this.state.rowNum], 3)	// Down
	}
	
	btnLeft_click(e) {
		this.move(this.state.surface[this.state.rowNum], 4)	// Left
	}
	
	move(body, direction) {
		for (let i=0; i<body.length-1; i++) {
			body[i].setColumn(body[i+1].column);
			body[i].setLine(body[i+1].line);
		}
		
		let head = body[body.length-1];
		
		switch(direction) {
		case 1:		// UP
			head.setLine(--head.line);
			break;
		case 2:		// Right
			head.setColumn(++head.column);
			break;	
		case 3:		// DOWN
			head.setLine(++head.line);		
			break;
		case 4:		// LEFT
			head.setColumn(--head.column);
			break;
		}
		this.forceUpdate();
	}
	
	render() {
		return (
			<>
			<button onClick={event => this.btnLeft_click(event)}>Left</button>
			<button onClick={event => this.btnRight_click(event)}>Right</button>
			<button onClick={event => this.btnUp_click(event)}>Up</button>
			<button onClick={event => this.btnDown_click(event)}>Down</button>
			<select onChange={event => this.state.rowNum = event.target.value}>
				{
					this.state.surface.map((row, i) =>
						<option key={i}>{i}</option>
					)
				}
			</select>
			<hr/>
			<table id="surface"
					className='collapse' 
					onMouseDown={event => event.preventDefault()}
					onContextMenu={event => event.preventDefault()}>
				<tbody>
				{
					this.state.surface.map((row, k) => 
						<tr key={k}>
							{
								row.map((v, k) => 
									<td style={{
											color: v.fg, 
											background: v.bg,
											position: v.position,
											left: v.left,
											top: v.top,
										}} key={k}>{v.ch}</td>
								)
							}
						</tr>
					)
				}
				</tbody>
			</table>
			</>
		)
	}
}

let root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App/>)
