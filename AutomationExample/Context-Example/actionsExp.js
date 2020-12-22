import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './typesExp';


//create an object and pass it all needed functions
export  default {
        //Add todo
        addTodo : (dispatch) => {
                return (todo) =>{
                        dispatch({
                                type: ADD_TODO,
                                //payload is a todo as the action adds one
                                payload: todo
                        })
                }
        },

        //Toggle a todo
        toggleTodo : (dispatch) => {
                return (todoID) =>{
                        dispatch({
                                type: TOGGLE_TODO,
                                payload: todoID
                        })
                }
        },

        //Delete
        deleteTodo : (dispatch) => {
                return (todoID) =>{
                        dispatch({
                                type: DELETE_TODO,
                                payload: todoID
                        })
                }
        }
}
