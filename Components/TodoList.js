import React, { useContext } from 'react';
import TodoContext from "../Context/TodoContext";

//if multiple contexts files us 'as'
//Context is returned in create-Context but exported in Named Context file
import { Context as Example} from '../Context/AutomationExample/Context-Example/contextExp'

import TodoItem from './TodoItem';

const TodoList = () => {

        //const {todos, toggleTodo, deleteTodo} = useContext(TodoContext)

        //state is passed as an object as well as actions 
        const {state, actions} = useContext(Example)

        //if more than one state it is an object so...
        const { todos } = state;

                //also get actions
        const { toggleTodo, deleteTodo} = actions;


        console.log(todos)
        return (
                <>
                        {
                                todos.length === 0 || !todos
                                ? 
                                <h4>Nothing todo today!</h4>
                                :
                                <ul>
                                        {todos.map(todo =>
                                                <TodoItem 
                                                        data={todo} 
                                                        key={todo.id} 
                                                        clickToToggle=
                                                                {
                                                                        ()=> 
                                                                        toggleTodo(todo.id)} 
                                                                        clickToDelete={
                                                                                ()=>deleteTodo(todo.id)
                                                                }/>
                                                )
                                        }
                                </ul>  
                        }
                </>
        );
}

export default TodoList;
