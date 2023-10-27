import React from "react";
import {Link} from 'react-router-dom';
import withRouter from "./withRouter.js";

class Insert extends React.Component {
	
	async onSubmit(e) {
		e.preventDefault();
		console.log("submit..");
		console.log(this.state.dept);
		
		let response = await fetch("/rest/dept", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state.dept)
		});
		
		if (response.ok) {
			alert("부서 추가 성공! 부서 목록으로 이동합니다.")
			this.props.navigate("/rest/dept")
		} else {
			let error = await response.json()
			alert("부서 추가 실패! " + error.message)
		}
		
	}
	
	state = {
		dept : {}
	}
	
	render() {
		return (
			<>
			<h1>부서 추가</h1>
			<hr/>
			<Link to="/rest/dept">목록으로 이동</Link>			
			<hr/>
			<form onSubmit={event => this.onSubmit(event)}>
				<fieldset>
					<legend>deptno</legend>
					<input type="number" required min={0} max={99} onChange={event => this.state.dept.deptno = event.target.value}/>
				</fieldset>
				<fieldset>
					<legend>dname</legend>
					<input type="text" required maxLength={35} onChange={event => this.state.dept.dname = event.target.value}/>
				</fieldset>
				<fieldset>
					<legend>loc</legend>
					<input type="text" maxLength={13} onChange={event => this.state.dept.loc = event.target.value}/>
				</fieldset>
				<fieldset>
					<input type="submit" value="부서추가"/>
				</fieldset>
			</form>
			</>
		)
	}
	
}


export default withRouter(Insert);