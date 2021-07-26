import initialState from '../initialState';
import {ADD_COMPONENT} from '../ActionCreators/action'



// const addReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case ADD_COMPONENT: 
//         console.log(state)
//         return {...state, 
//             title: action.name
//         }
        
//         default: console.log(state) 
//         return state;
//         }
        
// }

const reducerAddComponent = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COMPONENT: 
        if (!state.currentComponents[0].title) {
            console.log(state.currentComponents[0])
            return {...state,
                    currentComponents: [
                        {title: action.name,
                        key: 1},
                        state.currentComponents
                            ]
                        };
                    } else if (!state.currentComponents[1].title){
                        console.log(state.currentComponents[1]) 
                        return {...state,
                            currentComponents: [
                                state.currentComponents[0],
                                {title: action.name,
                                key: 2}]
                                } 
                    } return state              
        default:
             return state 
        } 
};

export default reducerAddComponent;
  