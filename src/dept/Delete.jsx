import React from "react";
import { Link } from "react-router-dom";
import withRouter from "./withRouter.js";

class Delete extends React.Component {
	
	componentDidMount() {
		this.state.dept = this.props.location.state.dept;
		this.forceUpdate();
	}
	
	state = {
		dept: {}
	}
	
	async onSubmit(e) {
		e.preventDefault();
		
		let response = await fetch('/rest/dept', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(this.state.dept)
		});
		
		if (response.ok) {
			alert("부서 삭제 성공!! 부서목록으로 이동합니다.");
			this.props.navigate('/rest/dept');
		} else {
			let json = await response.json();
			alert("부서 삭제 실패!! " + json.message)
		}
	}
	
	render() {
		return (
			<>
			<h1>부서 삭제</h1>
			<hr/>
			<Link to="/rest/dept">목록으로 이동</Link>
			<form onSubmit={event => this.onSubmit(event)}>
				<fieldset>
					<legend>deptno</legend>
					<input value={this.state.dept.deptno} disabled/>
				</fieldset>
				<fieldset>
					<legend>dname</legend>
					<input value={this.state.dept.dname} disabled/>
				</fieldset>
				<fieldset>
					<legend>loc</legend>
					<input value={this.state.dept.loc} disabled/>
				</fieldset>
				<fieldset>
					<input type="submit" value="부서삭제"/>
				</fieldset>
			</form>
			</>
			
		)
	}
	
}


export default withRouter(Delete);