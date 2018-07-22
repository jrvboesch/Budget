import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {FeatchBudgets} from './Actions';

class Budget extends React.Component {
	constructor(props) {
	  super(props);
	
	}

	render() {
		const {budgets, featchBudget} = this.props;

		let budgetList = budgets.map((budget)=> {
			return (<li key={budget.id}>
				{budget.name}
			</li>);
		});
		
		return (
			<div>
				Budget Page
				<div onClick={featchBudget}>get budgets ></div>
				<ul>
					{budgetList}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		budgets: state.budget.budgets
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
        featchBudget: () => dispatch(FeatchBudgets())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
