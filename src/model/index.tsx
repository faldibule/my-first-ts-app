export interface formType {
    text: string
}
export interface todoType {
    id: string,
    text: string,
}
export interface todosComponentType {
    todos: todoType[],
    handleDelete: (id: string) => void,
    handleEdit: (id: string, text: string) => void
}

export interface CardComponentType {
    i: number
    todo: todoType,
    handleDelete: (id: string) => void
    handleEdit: (id: string, text: string) => void
}