import React, { useState } from 'react'
import { Card, Typography, Space, Button, Input, Tooltip } from 'antd'
import { CardComponentType, formType } from '../model'
import { DeleteOutlined, EditOutlined, CheckOutlined, SendOutlined } from '@ant-design/icons'



const CardComponent:React.FC<CardComponentType> = ({ i, todo, handleDelete, handleEdit }) => {
    const [form, setForm] = useState<formType>({
        text: todo.text
    })
    
    const [isEdit, setIsEdit] = useState<boolean>(false)

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        handleEdit(todo.id, form.text)
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
                <DeleteOutlined onClick={() => handleDelete(todo.id)} />,
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
                title={todo.text}
            />
            }
        </Card>
    )
}

export default CardComponent