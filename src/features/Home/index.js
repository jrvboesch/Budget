import React from 'react';
import {
	connect
} from 'react-redux';
import { ChartCard, Field } from 'ant-design-pro/lib/Charts';
import Trend from 'ant-design-pro/lib/Trend';
import { Row, Col, Icon, Tooltip } from 'antd';
import {
	FeatchBudgets
} from './Actions';
import {
	push
} from 'react-router-redux';

class Home extends React.Component {

	constructor(props) {
		super(props);
		props.featchBudgets();
	}
	render() {
		const {budgets, goToPage} = this.props;
		let chartCardList = budgets.map((budget) => {
			let balance = budget.budget+budget.income+budget.outcome;
			return (
				<Col span={8} key={budget.id}>
					<ChartCard
						
						title={budget.name}
						action={(
							<a className="cardActions">
								<Icon type="eye-o" onClick={() => goToPage(`/review/${budget.id}`)}/>
							</a>
						)}
						total={
							<span  style={{ color: (balance >= 0)?"#87d068":"#f56a00" }}>
								{balance}$	
							</span>
						}
						footer={(
							<span>
								Budget {budget.budget}$	
							</span>
						)}
						contentHeight={46}
					>
						<span>
							Income
							<Trend 
								flag="down" 
								style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
							>
								{budget.income}$
							</Trend>
						</span>
						<span style={{ marginLeft: 16 }}>
							OutCome
							<Trend
								flag="up"
								style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
							>
								{budget.outcome}$
							</Trend>
						</span>
					</ChartCard>
				</Col>
			);
		});
		return (
			<Row type="flex" justify="space-around">
				{chartCardList}
			</Row>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		budgets: state.budgetReport.budgets
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		featchBudgets: () => dispatch(FeatchBudgets()),
		goToPage: (page) => dispatch(push(page))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);








