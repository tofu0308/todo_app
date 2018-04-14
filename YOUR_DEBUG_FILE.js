import todoApp from './reducers/index.js';

// 初期値となるStateを取得
var initialState = todoApp({}, {});
console.log(initialState);
// => {toos:[], visibilityFilter: "SHOW_ALL" }

var nextState = todoApp(initialState, {type:'APP_TODO', id:1, text:'First todo'});
console.log(nextState);
// => {todos: [{id:1, text:"First todo!", completed: false}], visibilityFilter: "SHOW_ALL"}