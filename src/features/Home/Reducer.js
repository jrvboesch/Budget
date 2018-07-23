import {
	FEATCH_BUDGET_REPORT,
	RESET_APP
} from './actionTypes';

const initState = {
	budgets: []

};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case FEATCH_BUDGET_REPORT:
			return {
				...state,
				budgets: action.budgets
			};
		case RESET_APP:
			return initState
		default:
			return state;
	}
};

export default reducer;