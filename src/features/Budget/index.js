import React from 'react';
import {
	connect
} from 'react-redux';
import {
	FeatchBudgets,
	EditBudgets,
	AddBudgets,
	DeleteBudgets
} from './Actions';
import {
	Card,
	Col,
	Row,
	Button,
	Icon
} from 'antd';
import {
	push
} from 'react-router-redux';
import BudgetModal from './BudgetModal';

class Budget extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			showModal: false,
			budget: undefined
		};

		props.featchBudget().then(() => {
			this.setState({
				loading: false
			});
		});
	}

	showModal = (budget = undefined) => {
		this.setState({
			showModal: true,
			budget: budget
		});
	};

	hideModal = () => {
		this.setState({
			showModal: false,
			budget: undefined
		});
	};

	render() {
		const {budgets, featchBudget, editBudget, addBudget, deleteBudget, goToPage} = this.props;

		let budgetList = budgets.map((budget)=> {
			return (
				<Col span={6} key={budget.id} className="budgetCards">
					<Card 
					title={budget.name}
					extra={
						<div>
							<a className="cardActions">
								<Icon type="edit" onClick={() => this.showModal(budget)}/>
							</a>
							<a className="cardActions">
								<Icon type="delete" onClick={() => deleteBudget(budget.id)}/>
							</a>
							<a className="cardActions">
								<Icon type="eye-o" onClick={() => goToPage(`/review/${budget.id}`)}/>
							</a>
						</div>
					} 
					loading={this.state.loading}
						>
						<Col span={24}>
							{budget.description}
						</Col>
						<Col span={24}>
							{budget.budget} $
						</Col>
					</Card>
				</Col>
			);
		});
		
		return (
			<div className="budget">
				<Row gutter={16} className="actions">
					<Col span={6}>
						<Button type="primary" icon="plus" onClick={() => this.showModal()}>Budget</Button>
					</Col>
				</Row>
				<Row gutter={16}>
					{budgetList}
				</Row>
				<BudgetModal
					showModal={this.state.showModal} 
					handleCancel={this.hideModal}
					budget={this.state.budget}
					action={(this.state.budget)?editBudget:addBudget}
				/>
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
		featchBudget: () => dispatch(FeatchBudgets()),
		editBudget: (budget) => dispatch(EditBudgets(budget)),
		addBudget: (budget) => dispatch(AddBudgets(budget)),
		deleteBudget: (budget) => dispatch(DeleteBudgets(budget)),
		goToPage: (page) => dispatch(push(page))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
