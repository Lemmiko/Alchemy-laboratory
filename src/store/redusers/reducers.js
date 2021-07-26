import initialState from '../initialState';
import {ADD_COMPONENT, DELETE_CURRENT, CREATE_POTION} from '../ActionCreators/action'
// import recipe from '../recipe'

const searchPotions = (comp1, comp2) => {
    let result = [comp1,comp2].sort();
    result = `${result[0]}-${result[1]}`
    
    console.log(result)
    return result

}

const reducerAddComponent = (state = initialState, action) => {
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
        console.log(action.id)
                    if (action.id === 1) {
                       return {...state,
                        currentComponents: [
                            {title: null},
                            state.currentComponents[1]]
                            } 
                }  else if (action.id === 2){
                    return  {...state,
                        currentComponents: [
                            state.currentComponents[0],
                            {title: null}
                                ]
                            }
                        } return state;
        case CREATE_POTION: 
            if (state.currentComponents[0].title && state.currentComponents[1].title) {
            let potion = searchPotions(state.currentComponents[0].title, state.currentComponents[1].title)
                
            return {...state,
                    currentComponents: [
                        {title: null},
                        {title: null}],
                        potions: [...state.potions, potion]
                        }
            } 
            return state;
                      default: return state    
                }
                    
};

export default reducerAddComponent;
  