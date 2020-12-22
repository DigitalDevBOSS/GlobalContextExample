import createDataContext from '../create-data-context';
import reducerExp from './reducerExp';
import actions from './actionsExp'
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './typesExp';


//Pass individual context info 

//set a initial state variable
const initialState = {
        todos: [] 
}

//set or import a action object containing functions 
// const actions = 
//         {
//                 //Add todo
//                 addTodo : (dispatch) => {
//                         return (todo) =>{
//                                 dispatch({
//                                         type: ADD_TODO,
//                                         //payload is a todo as the action adds one
//                                         payload: todo
//                                 })
//                         }
//                 },

//                 //Toggle a todo
//                 toggleTodo : (dispatch) => {
//                         return (todoID) =>{
//                                 dispatch({
//                                         type: TOGGLE_TODO,
//                                         payload: todoID
//                                 })
//                         }
//                 },

//                 //Delete
//                 deleteTodo : (dispatch) => {
//                         return (todoID) =>{
//                                 dispatch({
//                                         type: DELETE_TODO,
//                                         payload: todoID
//                                 })
//                         }
//                 }
// }


        
//call the createDataContext function and pass in the needed props
// -reducer  -actions object -initialState 

export const {Context, Provider } = createDataContext(reducerExp, actions, initialState)

