import React from 'react';
import { filterValues } from '../../constants';

const Filter = () => {
    const handleChange = (filter) => {

    }

    return (
        <form onChange={(e) => handleChange(+e.target.value)}>
            <p>Filter by</p>
            <select>
                <option value={filterValues.all} >All</option>
                <option value={filterValues.opened} >Opened</option>
                <option value={filterValues.closed} >Closed</option>
            </select>
        </form>
    );
}

export default Filter;