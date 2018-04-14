import {combineReducers} from 'redux';

// 一つ一つのTODOを処理するための関数
const todo = (state, action) => {
	switch (actiontype) {
		case 'APP_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state;
			}

			return Object.assign({}, state, {
				completed: !state.completed

			});
		default: 
			return state;
	}
}

// 複数のTODOを処理するための関数
const todos = (state = [], action) => {
	switch (action.type) {
		case 'APP_TODO':
			return {
				...state,
				todo(undefined, action)
			};
		case 'TOGGLE_TODO':
			return state.map(t =>
				todo(t, action)
			);
		default:
			return state;
	}
}

// TODOの表示状態を処理するための関数
const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case 'SET_VISIBILTY_FILTER':
			return action.filter;
		default:
			return state;

	}
}

//上記をまとめて外に公開する
const todoApp = combineReducers({
	todos,
	visibilityFilter
});
export default todoApp;