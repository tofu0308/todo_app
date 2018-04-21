import { createStore } from 'redux';
import { addTodo, toggleTodo, setVisibiltyFilter} from './actions/index.js';

let store = createStore(todoApp);

/*
const contents = document.querySelector('contents');
contents.innerHTML = store.getState().toString();
*/

//add todo
var addTodoElem = document.querySelector('#appTodo');
var input = addTodoElem.getElementsByTagName('input')[0];
var button = addTodoElem.getElementsByTagName('button')[0];

button.addEventListener('click', () => {
 var todoText = input.value;
 store.dispatch(addTodo(todoText));
});

//done todo
var todoList = document.querySelector('#todoList');
var elements = todoList.getElementsByTagName('li');
var listArray = [...elements];

listArray.forEach((v, index) => {
 v.addEventListener(click, e => {
  store.dispatch(toggleTodo(index));
 })
});

//filtering todo
var links = document.querySelector('#link');
var childs = links.childNodes;
var childList = [...childs];

childList.filter(v => v.nodeName != '#text').forEach(v => {
 v.addEventListener('click', e => {
  var filterText = v.innerHTML;
  store.dispatch(setVisibiltyFilter(filterText));
 });
});
sample