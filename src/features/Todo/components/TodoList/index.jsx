import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss'
TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null
}

function TodoList({todoList, onTodoClick}) {
    const handleToDoClick = (todo, index) => {
        if(!onTodoClick) return;

        onTodoClick(todo, index)
    }

    return (
        <ul className="todo-list">
            {todoList.map((todo, index) => (
                <li key={todo.id} className={classnames({
                    'todo-item': true,
                    completed: todo.status === 'completed'
                })}
                onClick = {() => handleToDoClick(todo, index)}
                >{todo.title}</li>
            ))}       
        </ul>
    );
}

export default TodoList;