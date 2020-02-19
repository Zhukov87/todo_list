import React from 'react';
import Task from '../Task';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../ducks';
import { filteredTasksSelector } from '../../selectors';

const TasksList = () => {
    const tasks = useSelector(filteredTasksSelector);

    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(actions.removeTask(id));
    }

    const handleEdit = (task) => {
        dispatch(actions.editTask(task));
    }

    const renderList = () => {
        return (
            <ul>
                {tasks.map(task => {
                    return <Task 
                                key={task.id}
                                title={task.title} 
                                date={task.creationDate} 
                                id={task.id}
                                isOpen={task.isOpen} 
                                remove={handleRemove} 
                                edit={handleEdit}
                            />
                })}
            </ul>
        );
    }

    return (
        tasks.length ? renderList() : <p>Add a first task!</p>
    );
}

export default TasksList;