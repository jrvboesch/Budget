import React from 'react';
import { connect } from 'react-redux';

export class Review extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>review</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Review)
