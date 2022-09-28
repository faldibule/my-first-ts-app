import React, { useContext, useState } from 'react'
import { Row, Col, Input, Tooltip, Button } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { todoType } from '../model'
import { TodosContext } from '../context/TodosContext'



interface Props {
    form: {
        text: string
    }
    setForm: React.Dispatch<React.SetStateAction<{text: string}>>
}

const FormComponent: React.FC<Props> = ({ form, setForm }) => {
    const { dispatch } = useContext(TodosContext)
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id: string = Date.now().toString()
        dispatch({
            type: "ADD",
            payload: {
                id,
                text: form.text
            }
        })
        setForm({
            text: '',
        })
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value, name } }: { target: { value: string, name: string } } = e
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <Row justify='center'>
            <Col xs={8} md={8}>
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
            </Col>
        </Row>
    )

}

export default FormComponent