import initialState from '../initialState';
import {ADD_COMPONENT, DELETE_CURRENT, CREATE_POTION, CHANGE_TOGGLE} from '../ActionCreators/action'
import recipe from '../recipe'

const searchPotions = (comp1, comp2) => {
    let result = [comp1,comp2].sort();
    result = `${result[0]}-${result[1]}`
    let objPotion = recipe.find(o => o.recipe === result)
    if (objPotion){
    return objPotion
    }
}

const reducers = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COMPONENT: 
        if (!state.currentComponents[0].title) {
            return {...state,
                    currentComponents: [
                        {title: action.name,
                        key: 1},
                        state.currentComponents[1]
                            ]
                        };
                    } else if (!state.currentComponents[1].title){
                        return {...state,
                            currentComponents: [
                                state.currentComponents[0],
                                {title: action.name,
                                key: 2}]
                                } 
                    } 
                    return state; 
        case DELETE_CURRENT: 
                    if (action.key === 1) {
                       return {...state,
                        currentComponents: [
                            {title: null,
                             key: 1},
                            state.currentComponents[1]]
                            } 
                }  else if (action.key === 2){
                    return  {...state,
                        currentComponents: [
                            state.currentComponents[0],
                            {title: null,
                             key: 2}
                                ]
                            }
                        } return state;
        case CREATE_POTION: 
            if ((state.currentComponents[0].title && state.currentComponents[1].title) && state.potions.length < 7 ) {
            let potion = searchPotions(state.currentComponents[0].title, state.currentComponents[1].title)
            
            if (potion === undefined) {
                return {...state,
                    currentComponents: [
                        {title: null,
                            key: 1},
                        {title: null,
                            key: 2}],
                        modal: {isToggle: true}
                    } 
            } else if (potion) 
                    return {...state,
                    currentComponents: [
                        {title: null,
                            key: 1},
                        {title: null,
                            key: 2}],
                        potions: [...state.potions, potion],
                        modal: {isToggle: true,
                                isCreated: true,
                                potion: potion}
                        } 
                    
            } else if(state.potions.length === 7) {
                return {...state,
                    currentComponents: [
                        {title: null,
                            key: 1},
                        {title: null,
                            key: 2}],
                            modal: {isToggle: true,
                                isFull: true}
                        } 
            
         } return state;
            case CHANGE_TOGGLE: 
                return {...state,
                    modal: {
                        isToggle: !state.modal.isToggle
                    }
                } 
               default: return state           
    }
                    
};

export default reducers;
  