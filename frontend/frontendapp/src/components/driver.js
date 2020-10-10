import React from 'react';
import './driver.css';
import TodoItem from './listItem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

//const Driver = () => {
function Driver() {
    const [todos, setTodos] = React.useState([
        { address: 'add1' },
        { address: 'add2' },
        { address: 'add3' }
    ]);

    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        index={index}
                        todo={todo}
                    />
                ))}
            </div>
        </div>
    )
}

export default Driver;