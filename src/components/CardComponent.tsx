import React, { useContext, useState } from 'react'
import { Card, Typography, Space, Button, Input, Tooltip } from 'antd'
import { CardComponentType, formType } from '../model'
import { DeleteOutlined, EditOutlined, CheckOutlined, SendOutlined } from '@ant-design/icons'
import { TodosContext } from '../context/TodosContext'



const CardComponent:React.FC<CardComponentType> = ({ i, }) => {
    const { state, dispatch } = useContext(TodosContext)
    const [form, setForm] = useState<formType>({
        text: state.todos[i].text
    })
    
    const [isEdit, setIsEdit] = useState<boolean>(false)

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        const id = state.todos[i].id
        dispatch({
            type: 'UPDATE',
            payload: {
                id,
                text: form.text
            }
        })
        setIsEdit(!isEdit)
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value, name } }:{ target: { value: string, name: string}} = e 
        setForm({
            ...form,
            [name]: value
        })
    }
    return (
        <Card style={{ marginTop: '30px' }} key={i} actions={
            [
                <DeleteOutlined onClick={() => dispatch({
                    type: 'DELETE',
                    payload: {
                        id: state.todos[i].id,
                    }
                })} />,
                <EditOutlined onClick={() => setIsEdit(!isEdit)} />,
                <CheckOutlined />,
            ]
        }>
            {isEdit ? 
            <form onSubmit={(e) => onSubmit(e)}>
                <Input.Group style={{ display: 'flex' }}>
                    <Input
                        placeholder='What you gonna do, sir ?'
                        value={form.text}
                        size="large"
                        name='text'
                        type='text'
                        onChange={(e) => onChange(e)}
                    />
                    <Tooltip>
                        <Button htmlType='submit' size='large' icon={<SendOutlined />} />
                    </Tooltip>
                </Input.Group>
            </form>
            :
            <Card.Meta
                title={state.todos[i].text}
            />
            }
        </Card>
    )
}

export default CardComponent