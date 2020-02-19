import React from 'react';

const Task = (props) => {
    const {title, date, id, isOpen, remove} = props;
    
    return (
        <li>
            {isOpen ? (
                <div>
                    <p>Close task</p>
                    <input type='checkbox' value={isOpen} ></input>
                </div>
                ) : <p>Task is closed</p>}
                <h5>{title}</h5>
                <p>{date}</p>
                <button >Edit</button>
                <button onClick={() => remove(id)} >Remove</button>
        </li>
    );
}

export default Task;