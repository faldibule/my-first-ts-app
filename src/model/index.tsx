export interface formType {
    text: string 
}
export interface todoType {
    id: string,
    text: string,
}

export interface CardComponentType {
    v: todoType
    type: 'COMPLETE' | 'TODOS'
}

export interface stateInterface {
    todos: todoType[],
    complete: todoType[],
}

export type actionInterface = 
| { type: "ADD"; payload: { text: string } }
| { type: "GET" }
| { type: "UPDATE"; payload: { id: string, text: string } }
| { type: "DELETE"; payload: { id: string } }
| { type: "COMPLETE"; payload: { id: string } }
| { type: "DELETE_COMPLETE"; payload: { id: string } }
