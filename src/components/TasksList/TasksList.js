import React from 'react';
import Task from '../Task';
import { useSelector } from 'react-redux';

const TasksList = () => {
    const tasks = useSelector(state => state.tasks);

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