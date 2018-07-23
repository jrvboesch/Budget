import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Layout,
	Menu,
	Breadcrumb
} from 'antd';
import {
	push
} from 'react-router-redux';

const {
	Header,
	Content,
	Footer
} = Layout;

class Main extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {goToPage} = this.props;
		return (
			<Layout className="mainLayout">
				<Header className="head">
					<div className="logo" />
					<Menu
						className="menu"
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={['1']}
					>
						<Menu.Item key="1" onClick={() => goToPage('/')}>Dashboard</Menu.Item>
						<Menu.Item key="2" onClick={() => goToPage('/Budgets')}>Budget</Menu.Item>
					</Menu>
				</Header>
				<Content className="content">
					{this.props.children}
				</Content>
				 <Footer style={{ textAlign: 'center' }}>
					Juan Rodrigo Venegas Boesch 2018
				</Footer>
			</Layout>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		goToPage: (page) => dispatch(push(page))
	};
};

export default connect(null, mapDispatchToProps)(Main);