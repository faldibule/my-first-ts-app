import React, { useContext, useMemo, useState } from 'react'
import { Card, Typography, Space, Button, Input, Tooltip } from 'antd'
import { CardComponentType, formType } from '../model'
import { DeleteOutlined, EditOutlined, CheckOutlined, SendOutlined } from '@ant-design/icons'
import { TodosContext } from '../context/TodosContext'



const CardComponent:React.FC<CardComponentType> = ({ v, type}) => {
    const { state, dispatch } = useContext(TodosContext)
    const [form, setForm] = useState<formType>({
        text: v.text
    })
    
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const actionIcon = useMemo(() => {
        if(type === "COMPLETE"){
            return [
                <DeleteOutlined onClick={() => dispatch({
                    type: 'DELETE_COMPLETE',
                    payload: {
                        id: v.id,
                    }
                })} />,
            ]
        }else if(type === "TODOS"){
            return [
                <DeleteOutlined onClick={() => dispatch({
                    type: 'DELETE',
                    payload: {
                        id: v.id,
                    }
                })} />,
                <EditOutlined onClick={() => setIsEdit(!isEdit)} />,
                <CheckOutlined onClick={() => dispatch({ type: "COMPLETE", payload: { id: v.id } })} />,
            ]
        }
    }, [type])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        const id = v.id
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
        <Card style={{ marginTop: 3 }} actions={
            actionIcon
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
                title={v.text}
            />
            }
        </Card>
    )
}

export default CardComponent