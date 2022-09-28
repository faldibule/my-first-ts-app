export interface formType {
    text: string 
}
export interface todoType {
    id: string,
    text: string,
}

export interface CardComponentType {
    i: number
}

export interface stateInterface {
    todos: todoType[]
}

export type actionInterface = 
| { type: "ADD"; payload: { id: string, text: string } }
| { type: "GET" }
| { type: "UPDATE"; payload: { id: string, text: string } }
| { type: "DELETE"; payload: { id: string } }
