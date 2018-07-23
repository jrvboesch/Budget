import axios from 'axios';
import {
	FETCH_BUDGETS,
	ADD_BUDGET,
	EDIT_BUDGET,
	DELETE_BUDGET
} from './actionTypes';

const featchBudgets = (budgets) => {
	return {
		type: FETCH_BUDGETS,
		budgets
	}
};

export const FeatchBudgets = () => (dispatch) => {

	return axios.get('/Budgets')
		.then((response) => {
			dispatch(featchBudgets(response.data));
		});
};

const addBudgets = (budget ,budgets) => {
	budgets.unshift(budget);
	return {
		type: ADD_BUDGET,
		budgets
	};
};

export const AddBudgets = (budget) => (dispatch, getState) => {
	const state = getState();
	const options = {
		"name": budget.name,
		"description": budget.description,
		"budget": budget.budget
	};

	return axios.post('/Budgets', options)
		.then((response) => {
			let budgets = [...state.budget.budgets];
			dispatch(addBudgets(response.data, budgets));
		}).catch((error) => {
			console.log(error);
		});
};

const editBudgets = (budget ,budgets) => {
	let newBudgets = budgets.map((budg) => {
		if(budg.id == budget.id)
			return budget;
		return budg;
	});
	
	return {
		type: EDIT_BUDGET,
		budgets: newBudgets
	};
};

export const EditBudgets = (budget) => (dispatch, getState) => {
	const state = getState();
	const options = {
		"name": budget.name,
		"description": budget.description,
		"budget": budget.budget
	};

	return axios.patch(`/Budgets/${budget.id}`, options)
		.then((response) => {
			let budgets = [...state.budget.budgets];
			dispatch(editBudgets(response.data, budgets));
		}).catch((error) => {
			console.log(error);
		});
};

const deleteBudgets = (budgetId ,budgets) => {
	let newBudgets = budgets.filter((budg) => budg.id != budgetId);
	
	console.log(newBudgets)
	return {
		type: DELETE_BUDGET,
		budgets: newBudgets
	};
};

export const DeleteBudgets = (budgetId) => (dispatch, getState) => {
	const state = getState();

	return axios.delete(`/Budgets/${budgetId}`)
		.then((response) => {
			let budgets = [...state.budget.budgets];
			dispatch(deleteBudgets(budgetId, budgets));
		}).catch((error) => {
			console.log(error);
		});
};