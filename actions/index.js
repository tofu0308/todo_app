//todo id管理
let nextTodoId = 0;

//add todo
export const addTodo = (text) => {
 return {
  type: 'ADD_Todo',
  id: nextTodoId ++,
  text
 };
};

//done todo
export const toggleTodo = (id) => {
 return {
  type: 'TOGGLE_TODO',
  id
 };
};

//filtering todo
export const setVisibilityFilter = (filter) => {
 return {
  type: 'SET_VISIBILTY_FILTER',
  filter
 };
};