import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete, completed, Notcompleted }) => {
  const [isChecked, setIsChecked] = useState(task.completed);

  const handleCheckmarkClick = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      completed();
    } else {
      Notcompleted();
    }
    toggleComplete(task.id);
  };

  return (
    <div className="Todo">
      <p className={`${task.completed ? 'completed' : ''}`} onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
      <div className="TodoIcons">
        {!isChecked ? (
          <FontAwesomeIcon icon={faCheck} onClick={handleCheckmarkClick} />
        ) : (
          <FontAwesomeIcon icon={faTimes} onClick={handleCheckmarkClick} />
        )}
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
