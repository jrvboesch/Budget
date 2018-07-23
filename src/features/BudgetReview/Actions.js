import {
	FETCH_BUDGET,
	ADD_BUDGET_HISTORY,
	EDIT_BUDGET_HISTORY,
	DELETE_BUDGET_HISTORY
} from './actionTypes';
import axios from 'axios';

export const fetchBudgetInfo = (budgetInfo) => {
	return {
		type: FETCH_BUDGET,
		budget: budgetInfo.budget,
		history: budgetInfo.history
	}
}

export const FetchBudgetInfo = (budgetId) => (dispatch) => {

	return axios.get(`/Budgets/${budgetId}/info`)
		.then((response) => {
			dispatch(fetchBudgetInfo(response.data));
		})
		.catch((error) => {
			console.log(error);
		});
}

export const addBudgetHistory = (history, histories, budget) => {

	histories.unshift(history);
	let newBudget = {
		...budget,
		balance: budget.balance + history.balance
	};
	return {
		type: ADD_BUDGET_HISTORY,
		budget: newBudget,
		history: histories
	}
}

export const AddBudgetHistory = (budgetId, history) => (dispatch, getState) => {
	let state = getState();
	let options = {
		balance: history.balance,
		created: Date.now(),
		description: history.description
	};
	
	return axios.post(`/Budgets/${budgetId}/budgetHistories`, options)
		.then((response) => {
			let histories = [...state.review.history];
			let budget = {...state.review.budget
			};
			dispatch(addBudgetHistory(response.data, histories, budget));
		})
		.catch((error) => {
			console.log(error);
		});
}

export const editBudgetHistory = (history, histories, budget) => {
	let newBalance = budget.balance;
	let newHistories = histories.map((hist) => {
		if (hist.id == history.id) {
			newBalance -= hist.balance;
			return history;
		}
		return hist;
	});
	let newBudget = {
		...budget,
		balance: newBalance + history.balance
	};
	return {
		type: EDIT_BUDGET_HISTORY,
		budget: newBudget,
		history: newHistories
	}
}

export const EditBudgetHistory = (history) => (dispatch, getState) => {
	let state = getState();
	let options = {
		balance: history.balance,
		description: history.description
	};

	return axios.patch(`/BudgetHistories/${history.id}/`, options)
		.then((response) => {
			let histories = [...state.review.history];
			let budget = {...state.review.budget
			};
			dispatch(editBudgetHistory(response.data, histories, budget));
		})
		.catch((error) => {
			console.log(error);
		});
}

export const deleteBudgetHistory = (historyId, histories, budget) => {
	let newBalance = budget.balance;
	let newHistories = histories.filter((hist) => {
		if(hist.id == historyId){
			newBalance -= hist.balance
			return false;
		}
		return true;
	});
	let newBudget = {
		...budget,
		balance: newBalance
	};
	return {
		type: DELETE_BUDGET_HISTORY,
		budget: newBudget,
		history: newHistories
	}
}

export const DeleteBudgetHistory = (historyId) => (dispatch, getState) => {
	let state = getState();

	return axios.delete(`/BudgetHistories/${history.id}/`)
		.then((response) => {
			let histories = [...state.review.history];
			let budget = {...state.review.budget
			};
			dispatch(deleteBudgetHistory(historyId, histories, budget));
		})
		.catch((error) => {
			console.log(error);
		});
}