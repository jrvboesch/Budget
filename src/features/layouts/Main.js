import React,{Component} from 'react';

class Main extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				Main layout
				{this.props.children}
			</div>
		);
	}
}


export default Main;