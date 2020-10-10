import React from 'react';
import './driver.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

//const ListItem = props => {

function TodoItem(props) {
    return (
        <div className="todo">
            <p>{props.todo.address}
                <span>
                    <FontAwesomeIcon icon={faTrash} onClick={props.deleteItem} />
                </span>
            </p>
        </div>
    );
};
export default TodoItem;