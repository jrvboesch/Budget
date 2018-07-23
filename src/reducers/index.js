import {
	combineReducers
} from 'redux';
import {
	routerReducer
} from 'react-router-redux';

import BudgetReducer from '../features/Budget/reducer';
import budgetHistoryReducer from '../features/BudgetReview/reducer';

const rootReducer = combineReducers({
	routing: routerReducer,
	budget: BudgetReducer,
	review: budgetHistoryReducer
});

export default rootReducer;