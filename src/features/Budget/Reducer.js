
import {
	FETCH_BUDGETS
} from './actionTypes';


const initState = {
	budgets: []
};


const reducer = (state = initState, action) => {
	switch (action.type) {
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