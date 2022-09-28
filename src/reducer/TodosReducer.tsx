import { actionInterface, stateInterface, todoType } from "../model";

const TodosReducer = (state: stateInterface, action: actionInterface) => {
    switch (action.type) {
        case 'ADD': {
            return {
                ...state,
                todos: [...state.todos, {...action.payload}]
            }
        }
        break;

        case 'DELETE': {
            const temp = state.todos.filter(v => v.id !== action.payload?.id);
            return {
                ...state,
                todos: [...temp]
            }
        }
        break;

        case 'UPDATE': {
            return {
                ...state,
                todos: [...state.todos.map(v => v.id === action.payload?.id ? action.payload : v)]
            }
        }
        break;

        default: {
            return {
                ...state
            }
        }
        break;
    }
}

export default TodosReducer