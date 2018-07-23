import {
	combineReducers
} from 'redux';
import {
	routerReducer
} from 'react-router-redux';

import BudgetReducer from '../features/Budget/reducer';
import budgetHistoryReducer from '../features/BudgetReview/reducer';
import budgetReportReducer from '../features/Home/reducer';

const rootReducer = combineReducers({
	routing: routerReducer,
	budget: BudgetReducer,
	review: budgetHistoryReducer,
	budgetReport: budgetReportReducer
});

export default rootReducer;