
import {
	FETCH_BUDGETS,
	ADD_BUDGET,
	EDIT_BUDGET,
	DELETE_BUDGET
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
		default:
			return state;
	}
};

export default reducer;