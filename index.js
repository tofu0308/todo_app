import { createStore } from 'redux';
import { addTodo, toggleTodo, setVisibiltyFilter} from './actions/index.js';

/*
let store = createStore(function(){
	return 'Hello Redux';
});

const contents = document.querySelector('contents');
contents.innerHTML = store.getState().toString();
*/

//add todo
const addTodoElem = document.querySelector('#appTodo');
const input = addTodoElem.getElementsByTagName('input')[0];
const button = addTodoElem.getElementsByTagName('button')[0];

button.addEventListener('click', () => {
	const todoText = input.value;
	store.dispatch(addTodo(todoText));
});

//done todo
const todoList = document.querySelector('#todoList');
const elements = todoList.getElementsByTagName('li');
const listArray = [...elements];

listArray.forEach((v, index) => {
	store.dispatch(toggleTodo(index));
});

//filtering todo
const links = document.querySelector('#link');
const childs = links.childNodes;
const childList = [...childs];

childList.filter(v => v.nodeName != '#text').forEach(v => {
	v.addEventListener('click', e => {
		const filterText = v.innerHTML;
		store.dispatch(setVisibiltyFilter(filterText));
	});
});
