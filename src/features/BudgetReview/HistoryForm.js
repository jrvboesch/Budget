import React from 'react';
import {
	connect
} from 'react-redux';
import {
	Form,
	Input
} from 'antd';

const FormItem = Form.Item;

export class HistoryForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {form} = this.props;
		const { getFieldDecorator } = form;

		return (
			<Form>
					<FormItem
						label="Budget" 
					>
						{
							getFieldDecorator('balance', 
								{
									rules: [{
										required: true,
										whitespace: true,
									}],
									initialValue:(this.props.history)?this.props.history.balance.toString():undefined
								}
							)(
								<Input placeholder="Budget"  />
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
									initialValue:(this.props.history)?this.props.history.description:undefined
								}
							)(
								<Input placeholder="Description"  />
							)
						}
					</FormItem>
				</Form>
		);
	}
}

export default (HistoryForm)