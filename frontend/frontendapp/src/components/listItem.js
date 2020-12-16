import React from "react";
import "./driver.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

/**
 *
 * This function lists the items to display for drivers tasks along with a button to click after fininshing each task
 */
function TodoItem(props) {
  return (
    <div className="todo">
      <p>
        {props.todo.address}
        <span>
          <FontAwesomeIcon icon={faTrash} onClick={props.deleteItem} />
        </span>
      </p>
    </div>
  );
}
export default TodoItem;
