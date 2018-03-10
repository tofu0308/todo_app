import { createStore } from 'redux';
import { addTodo, toggleTodo, setVisibiltyFilter} from './actions/index.js';

let store = createStore(function(){
	return 'Hello Redux';
});

const contents = document.getElementById('contents');
contents.innerHTML = store.getState().toString();

//add todo

//done todo

//filtering todo
