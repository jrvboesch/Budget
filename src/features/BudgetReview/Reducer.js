import {
	FETCH_BUDGET,
	RESET_APP,
	ADD_BUDGET_HISTORY,
	EDIT_BUDGET_HISTORY,
	DELETE_BUDGET_HISTORY
} from './actionTypes';

const initState = {
	budget: {},
	history: []

};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case DELETE_BUDGET_HISTORY:
		case EDIT_BUDGET_HISTORY:
		case ADD_BUDGET_HISTORY:
			return {
				...state,
				budget: action.budget,
				history: action.history
			};
		case FETCH_BUDGET:
			return {
				...state,
				budget: action.budget,
				history: action.history
			};
		case RESET_APP:
			return initState
		default:
			return state;
	}
};

export default reducer;