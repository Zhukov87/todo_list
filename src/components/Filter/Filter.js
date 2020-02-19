import React from 'react';
import { filterValues } from '../../constants';
import { actions } from '../../ducks';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from '../../selectors';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(filterSelector);

    const handleChange = (filter) => {
        dispatch(actions.filterChange(filter));
    }

    return (
        <form onChange={(e) => handleChange(+e.target.value)}>
            <p>Filter by</p>
            <select defaultValue={filter}>
                <option value={filterValues.all} >All</option>
                <option value={filterValues.opened} >Opened</option>
                <option value={filterValues.closed} >Closed</option>
            </select>
        </form>
    );
}

export default Filter;