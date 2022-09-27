import React, { useState } from 'react'
import { Row, Col, Input, Tooltip, Button } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { todoType } from '../model'



interface Props {
    form: {
        text: string
    }
    todos: todoType[]
    setForm: React.Dispatch<React.SetStateAction<{text: string}>>
    setTodos: React.Dispatch<React.SetStateAction<todoType[]>>
}

const FormComponent: React.FC<Props> = ({ form, todos, setForm, setTodos }) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log(form.text)
    const store = {
        id: Date.now().toString(),
        text: form.text
    }
    setTodos([...todos, store])
    setForm({
        text: '',
    })
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value, name } }:{ target: { value: string, name: string}} = e 
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