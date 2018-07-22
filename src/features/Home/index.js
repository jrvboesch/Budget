import React from 'react';
import { Link } from 'react-router';

const Home = () => {

	return (
		<div>
			Home Page
			<Link to="/budgets">budget</Link>
		</div>
	);
}

export default Home;