import {
	FEATCH_BUDGET_REPORT
} from './actionTypes';
import axios from 'axios';

export const featchBudgets = (budgets) => {
	console.log(budgets)
	return {
		type: FEATCH_BUDGET_REPORT,
		budgets
	}
}
export const FeatchBudgets = () => (dispatch) => {
	
	return axios.get('/Budgets/report')
	.then((response) => {
		dispatch(featchBudgets(response.data));
	})
	.catch((err) => {
		console.log(err);
	});
}