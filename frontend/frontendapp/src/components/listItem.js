import React from 'react';
import './driver.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//const ListItem = props => {
function TodoItem({ todo }) {
    return (
        <div className="todo">
            <p>{todo.address}</p>
            <span>
                <FontAwesomeIcon className="faicons" icon='trash' />
            </span>
        </div>
    );
};
export default TodoItem;