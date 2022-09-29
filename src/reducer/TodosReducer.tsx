import { actionInterface, stateInterface } from "../model";
import { getUUID } from "../utils/getUUID";

const TodosReducer = (state: stateInterface, action: actionInterface) => {
    switch (action.type) {
        case 'ADD': {
            return {
                ...state,
                todos: [...state.todos, { id: getUUID(), text: action.payload.text }]
            }
        }
        break;

        case 'DELETE': {
            return {
                ...state,
                todos: [...state.todos.filter(v => v.id != action.payload.id)]
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

        case 'COMPLETE': {
            const temp = state.todos.filter(v => v.id !== action.payload.id)
            const staging = state.todos.filter(v => v.id === action.payload.id)
            return {
                ...state,
                todos: [...temp],
                complete: [...state.complete, ...staging],
            }
        }
        break;

        case 'DELETE_COMPLETE': {
            return {
                ...state,
                complete: [...state.complete.filter(v => v.id != action.payload.id)]
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