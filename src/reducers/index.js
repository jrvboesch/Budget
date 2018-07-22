import {
	combineReducers
} from 'redux';
import {
	routerReducer
} from 'react-router-redux';

import BudgetReducer from '../features/Budget/reducer';

const rootReducer = combineReducers({
	routing: routerReducer,
	budget: BudgetReducer
});

export default rootReducer;