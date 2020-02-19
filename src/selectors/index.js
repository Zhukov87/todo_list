import { createSelector } from 'reselect';
import { filterValues } from '../constants';

export const tasksSelector = (state) => {
    return state.tasks.sort((task, nextTask) => {
        if(task.title > nextTask.title) return 1;
        if(task.title < nextTask.title) return -1;
        return 0;
    }).reverse();
};

export const filterSelector = (state) => state.filter;

export const filteredTasksSelector = createSelector(tasksSelector, filterSelector, (tasks, filter) => {
    if(filter === filterValues.opened) {
        return tasks.filter(task => task.isOpen);
    }

    if(filter === filterValues.closed) {
        return tasks.filter(task => !task.isOpen);
    }

    return tasks;
});