import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.inputElement = React.createRef();
	}
	componentDidMount() {
		this.inputElement.current.focus();
	}
	render() {
		return (
			<div className="App">
				<input type="text" ref={this.inputElement} />
			</div>
		);
	}
}
