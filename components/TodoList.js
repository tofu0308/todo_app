import React, {PropTypes} from 'react';
import Todo from './Todo';

// TodoList => ul
// ul内のliはTodoコンポーネントを利用
class TodoList extends React.Component {
  render() {
    return(
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key = {todo.id}
            {...todo}
            onClick={ () => this.props.onTodoClick(todo.id)}
          />
        )}
      </ul>
    );
  }
}

// 制約の指定
TodoList.PropTypes = {
  todos: PropTypes.arrayOf (PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;