import React, { useState } from 'react';

const Task = (props) => {
    const [taskTitle, setTitle] = useState(props.title);
    const [isEdit, setIsEdit] = useState(false);

    const {title, date, id, isOpen, remove, edit} = props;

    const handleEdit = (e) => {
        e.preventDefault();
        edit({title: taskTitle, id, isOpen});
        setIsEdit(!isEdit);
    }

    const handleClose = () => {
        edit({title: taskTitle, id, isOpen: !isOpen});
    }
    
    const renderTask = () => {
        return (
            <li>
                {isOpen ? (
                    <div>
                        <p>Close task</p>
                        <input type='checkbox' value={isOpen} onChange={() => handleClose()} ></input>
                    </div>
                ) : <p>Task is closed</p>}
                <h5>{title}</h5>
                <p>{date}</p>
                <button onClick={() => setIsEdit(!isEdit)} >Edit</button>
                <button onClick={() => remove(id)} >Remove</button>
            </li>
        );
    }

    const renderEditingTask = () => {
        return (
            <li>
                <input value={taskTitle} onChange={(e) => setTitle(e.target.value)} ></input>
                <button onClick={(e) => handleEdit(e)} >Edit</button>
            </li>
        );
    }
    
    return (
        isEdit ? renderEditingTask() : renderTask()
    );
}

export default Task;