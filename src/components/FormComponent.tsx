import React, { useContext, useEffect, useMemo, useState } from 'react'
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
    const [isLoading, seIsLoading] = useState<boolean>(false)
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        seIsLoading(true)
        setTimeout(() => {
            seIsLoading(false)
            dispatch({
                type: "ADD",
                payload: {
                    text: form.text
                }
            })
            setForm({
                text: '',
            })
        }, 0);
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
            <Col xs={20} md={8}>
                <form onSubmit={(e) => onSubmit(e)}>
                    <Input.Group style={{ display: 'flex' }}>
                        <Input
                            disabled={isLoading}
                            placeholder='What you gonna do, sir ?'
                            value={form.text}
                            size="large"
                            name='text'
                            type='text'
                            onChange={(e) => onChange(e)}
                        />
                        <Tooltip>
                            <Button loading={isLoading} htmlType='submit' size='large' icon={<SendOutlined />} />
                        </Tooltip>
                    </Input.Group>
                </form>
            </Col>
        </Row>
    )

}

export default FormComponent