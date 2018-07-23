import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './features/layouts/Main';
import PageNotFound from './features/PageNotFound';
import Home from './features/Home';
import Budget from './features/Budget';
import Review from './features/BudgetReview';

export default (
	<Route>
		<Route path="/" component={Main}>
			<IndexRoute component={Home}/>
			<Route path="budgets" component={Budget}/>
			<Route path="review/(:id)" component={Review}/>
		</Route>
		<Route path="*" component={PageNotFound}/>
	</Route>
);