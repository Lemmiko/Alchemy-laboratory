export const CREATE_POTION = 'CREATE_POTION';
export const ADD_COMPONENT = 'ADD_COMPONENT';
export const DELETE_CURRENT = 'DELETE_CURRENT';
export const CHANGE_TOGGLE = 'CHANGE_TOGGLE'

export const addComponent = (value) => {
    return {
        type: ADD_COMPONENT,
        name: value
    }
}

export const deleteCurrent = (id) => {
    return {
        type: DELETE_CURRENT,
        key: id
    }
}

export const createPotion = () => {
    return {
        type: CREATE_POTION,
    }
}
export const changeToggle = () => {
    return {
        type: CHANGE_TOGGLE,
    }
}