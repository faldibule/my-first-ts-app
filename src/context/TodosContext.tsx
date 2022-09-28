import { createContext, Dispatch } from "react";
import { actionInterface, stateInterface } from "../model";

interface contextInterface {
    state: stateInterface,
    dispatch: Dispatch<actionInterface>
}

export const TodosContext = createContext<contextInterface>({
    state: {
        todos: []
    }, 
    dispatch: () => null
})