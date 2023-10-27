import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {sprintf} from 'sprintf-js'
import sleep from 'es7-sleep'
import List from "./List.jsx"
import "./App.css"
import Insert from './Insert.jsx';
import Update from './Update.jsx';
import Delete from './Delete.jsx';

class App extends React.Component {
	
	render() {
		return (
			<Routes>
				<Route path='/rest/dept' element={<List/>} />
				<Route path='/rest/dept/insert' element={<Insert/>} />
				<Route path='/rest/dept/update' element={<Update/>} />
				<Route path='/rest/dept/delete' element={<Delete/>} />
			</Routes>
		)
	}
}

let root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>
)
