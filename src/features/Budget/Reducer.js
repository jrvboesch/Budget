
import {
	FETCH_BUDGETS,
	ADD_BUDGET,
	EDIT_BUDGET,
	DELETE_BUDGET,
	RESET_APP
} from './actionTypes';

const initState = {
	budgets: []
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case DELETE_BUDGET:
		case ADD_BUDGET:
		case EDIT_BUDGET:
		case FETCH_BUDGETS:
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