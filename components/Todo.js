import React, {PropTypes} from 'react';

//Todo (li)
class Todo extends React.Componet {
 render() {
  return (
   <li
    onClick = {this.props.onClick}
    style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}
   >
   {this.proprs.text}
   </li>
  );
 }
}

// 制約の指定
Todo.PropTypes = {
 onClick: PropTypes.func.isRequired,
 completed: PropTypes.bool.isRequired,
 text: PropTypes.string.isRequired
};

export default Todo;