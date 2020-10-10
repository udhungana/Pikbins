import React from 'react';
import './driver.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//const ListItem = props => {
function TodoItem({ todo }) {
    return (
        <div className="todo">
            <p>{todo.address}
                <span>
                    <FontAwesomeIcon width='50px' height='50px' className="faicons" icon='trash' />
                </span>
            </p>
        </div>
    );
};
export default TodoItem;