import React, { useState } from 'react';
import { actions } from '../../ducks';
import { useDispatch } from 'react-redux';

const AddForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = (e) => {
        e.preventDefault();
        dispatch(actions.addTask({title}));
        setTitle('');
    }

    return (
        <form onSubmit={ (e) => handleAddTask(e)} >
            <input value={title} onChange={ (e) => setTitle(e.target.value) } ></input>
            <button type='submit' >Create task</button>
        </form>
    );
}

export default AddForm;