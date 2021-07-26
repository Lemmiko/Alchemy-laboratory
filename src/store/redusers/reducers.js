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
                console.log(state.currentComponents[1].title)
            return  {...state, 
                currentComponents: [
                    {title: action.name,
                    key: 1},
                    state.currentComponents
                    ] 
                };   
        default:
            console.log(state.currentComponents.title)
             return state 
        } 
};

export default reducerAddComponent;

// return  {...state, 
//     currentComponents: [
//         {title: action.name,
//         key: 1},
//         state.currentComponents
//         ]
//     }