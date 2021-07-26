export const CREATE_POTION = 'CREATE_POTION';
export const ADD_COMPONENT = 'ADD_COMPONENT';


const addComponent = (value) => {
    return {
        type: ADD_COMPONENT,
        name: value
    }
}
// const createPotion = (idComponent_1,idComponent_2) => {
//     return {
//         type: CREATE_POTION,
//         idComponent_1: idComponent_1,
//         idComponent_2: idComponent_2
//     }
// }
export default addComponent