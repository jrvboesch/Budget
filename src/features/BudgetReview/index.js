import React from 'react';
import {
	connect
} from 'react-redux';
import {
	FetchBudgetInfo,
	AddBudgetHistory,
	EditBudgetHistory,
	DeleteBudgetHistory
} from './Actions';
import {
	push
} from 'react-router-redux';
import{
	Layout,
	Row,
	Col,
	Divider,
	List,
	Avatar,
	Icon,
	Button
} from 'antd';
import Moment from 'react-moment';
import HistoryModal from './HistoryModal';

const {Content, Sider } = Layout;

export class Review extends React.Component {

	constructor(props) {
		super(props);

		if(props.params.id == undefined){
			props.goToPage('/Budgets');
		}

		props.fetchInfo(this.props.params.id);

		this.state = {
			id: this.props.params.id,
			showModal: false,
			history: undefined
		};
	}

	showModal = (history = undefined) => {
		this.setState({
			showModal: true,
			history: history
		});
	};

	hideModal = () => {
		this.setState({
			showModal: false,
			history: undefined
		});
	};

	render() {
		const {budget, history, addBudgetHistory, editBudgetHistory, deleteBudgetHistory} = this.props;
		let currentBudget = budget.budget+budget.balance;

		return (
			<Row className="review">
				<Divider orientation="left">
					{budget.name}
				</Divider>
				<Col span={4} className="info">
					<div className="desc">{budget.description}</div>
					<div className="init">
						<strong>Initial Budget:</strong>
						{budget.budget}$
					</div>
					<div className="current">
						<strong>
							Current Budget:
						</strong>
						<span style={{ color: (currentBudget > 0)?"#87d068":"#f56a00" }}>
							{currentBudget}$
						</span>
					</div>
				</Col>
				<Col span={20} className="list">
					<h3>
						History
						<Button className="add" type="primary" shape="circle" icon="plus" onClick={() => this.showModal()}></Button>
					</h3>
					<List
						itemLayout="horizontal"
						dataSource={history}
						renderItem={item => (
							<List.Item 
								actions={[
									<a className="cardActions">
										<Icon type="edit" onClick={() => this.showModal(item)}/>
									</a>,
									<a className="cardActions">
										<Icon type="delete" onClick={() => deleteBudgetHistory(item.id)}/>
									</a>
								]}
							>
								<List.Item.Meta
									avatar={<Avatar icon={(item.balance > 0)?"arrow-up":"arrow-down"} style={{ backgroundColor: (item.balance > 0)?"#87d068":"#f56a00" }}/>}
									title={(
										<div style={{ color: (item.balance > 0)?"#87d068":"#f56a00" }}>
											{item.balance} $
										</div>
									)}
									description={(
										<div>
											<div>
												{item.description}
											</div>
											<Moment format="YYYY/MM/DD" date={item.created}/>
										</div>
									)}
								/>
							</List.Item>
						)}
					/>
				</Col>
				<HistoryModal
					showModal={this.state.showModal} 
					handleCancel={this.hideModal}
					history={this.state.history}
					action={(this.state.history)?editBudgetHistory:(hist) => addBudgetHistory(this.state.id, hist)}
				/>
			</Row>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		budget: state.review.budget,
		history: state.review.history
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		goToPage: (page) => dispatch(push(page)),
		fetchInfo: (budgetId) => dispatch(FetchBudgetInfo(budgetId)),
		addBudgetHistory: (budgetId, history) => dispatch(AddBudgetHistory(budgetId, history)),
		editBudgetHistory: (history) => dispatch(EditBudgetHistory(history)),
		deleteBudgetHistory: (historyId) => dispatch(DeleteBudgetHistory(historyId))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Review)
