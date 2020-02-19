// Constants
// =============================================================================

export const types = {
    ADD_TASK: 'ADD_TASK',
    EDIT_TASK: 'EDIT_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    FILTER_CHANGE: 'FILTER_CHANGE'
};

// Reducer
// =============================================================================

export const initialState = {
    filter: 0,

    tasks: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.ADD_TASK: {
            return state;
        }

        case types.EDIT_TASK: {
            return state;
        }
      
        case types.REMOVE_TASK: {
            return state;
        }

        case types.FILTER_CHANGE: {
            return state;
        }

        default: {
            return state;
        }  
    }
}  

// Actions
// =============================================================================

export const actions = {
    addTask(task) {
        return {
            type: types.ADD_TASK,
            payload: {task}
        }
    },

    editTask(task) {
        return {
            type: types.EDIT_TASK,
            payload: {task}
        }
    },

    removeTask(id) {
        return {
            type: types.REMOVE_TASK,
            payload: {id}
        }
    },

    filterChange(filter) {
        return {
            type: types.FILTER_CHANGE,
            payload: {filter}
        }
    }
}
  
  

