import React from 'react';
import {
	connect
} from 'react-redux';
import {
	Form,
	Input
} from 'antd';

const FormItem = Form.Item;

export class BudgetForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {form} = this.props;
		const { getFieldDecorator } = form;

		return (
			<Form>
					<FormItem
						label="Name" 
					>
						{
							getFieldDecorator('name', 
								{
									rules: [{
										required: true,
										whitespace: true,
									}],
									initialValue:(this.props.budget)?this.props.budget.name:undefined
								}
							)(
								<Input placeholder="Name"  />
							)
						}
					</FormItem>
					<FormItem
						label="Description" 
					>
						{
							getFieldDecorator('description', 
								{
									rules: [{
										required: true,
										whitespace: true,
									}],
									initialValue:(this.props.budget)?this.props.budget.description:undefined
								}
							)(
								<Input placeholder="Description"  />
							)
						}
					</FormItem>
					<FormItem
						label="Budget" 
					>
						{
							getFieldDecorator('budget', 
								{
									rules: [{
										required: true,
										whitespace: true,
									}],
									initialValue:(this.props.budget)?this.props.budget.budget.toString():undefined
								}
							)(
								<Input placeholder="Budget"  />
							)
						}
					</FormItem>
				</Form>
		);
	}
}

export default (BudgetForm)