import React, { useState } from 'react'
import About from '../about'

type providerProps = {
    children: React.ReactNode
}
type indexprops = {
    onClick: (event: React.MouseEvent<HTMLElement>) => void
    count?: number 
}
const Provider = (props: providerProps) => {
    return (
        <div>
            <p>ini adalah isi providernya</p>
            <p>ini adalah isi providernya</p>
            <p>ini adalah isi providernya</p>
            <p>ini adalah isi providernya</p>
        {props.children}
        </div>

    )
}
const Index = (props: indexprops) => {
    const [name, setName] = useState('')
    const { count = 5 } = props
    return (
        <Provider>
            <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
            <About name={name} isValid={true} onClick={props.onClick} />
            <p>Count: {count}</p>
        </Provider>
    )
}
export default Index;