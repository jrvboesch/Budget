import React from 'react';
import {
	connect
} from 'react-redux';
import {
	Form,
	Button,
	Modal
} from 'antd';
import BudgetForm from './BudgetForm';

export class BudgetModal extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: false
		}
	}
	handleOk = () => {
		const {
			form,
			action,
			handleCancel,
			budget
		} = this.props;

		this.setState({
				loading: true
			});
		form.validateFields((err, values) => {
			if (!err) {
				action({...values, id: (budget)?budget.id:0})
					.then(handleCancel)
					.then(() => {
						this.setState({
							loading: false
						});
					}).catch((error) => {
						handleCancel();
						console.log("Error ocurred!", error);
						this.setState({
							loading: false
						});
					});
			}
		});
	}
	render() {
		const {form,  showModal, handleCancel, budget} = this.props;
		let ModalTitle = (budget) ? "Edit Budget" : "Add Budget";

		return (
			<Modal
				visible={showModal}
				title= {ModalTitle}
				onOk={this.handleOk}
				onCancel={handleCancel}
				confirmLoading={this.state.loading}
				destroyOnClose={true}
				footer={[
					<Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>
						Send
					</Button>,
					<Button key="back" size="large" onClick={handleCancel}>
						Cancel
					</Button>,
				]}
			>
				<BudgetForm
					form={form}
					budget={budget}
				/>
			</Modal>
		);
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		featchBudget: () => dispatch(FeatchBudgets())
	};
};

export default connect(null, mapDispatchToProps)(Form.create()(BudgetModal));
