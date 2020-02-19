import React, { useState } from 'react';

const AddForm = () => {
    const [title, setTitle] = useState('');

    const handleAddTask = (e) => {
        e.preventDefaul();
    }

    return (
        <form onSubmit={ (e) => handleAddTask(e)} >
            <input value={title} onChange={ (e) => setTitle(e.target.value) } ></input>
            <button type='submit' >Create task</button>
        </form>
    );
}

export default AddForm;