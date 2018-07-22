import axios from 'axios';
import {
	FETCH_BUDGETS
} from './actionTypes';

const featchBudgets = (budgets) => {
	return {
		type: FETCH_BUDGETS,
		budgets
	}
}

export const FeatchBudgets = () => (dispatch) => {

	axios.get('/Budgets').then((response) => {
		dispatch(featchBudgets(response.data));
	});
}