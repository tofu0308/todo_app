import { createStore } from 'redux'

let store = createStore(function(){
	return 'Hello Redux';
});

const contents = document.getElementById('contents');
contents.innerHTML = store.getState().toString();