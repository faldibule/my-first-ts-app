import React, { useState } from 'react'
import { Button, Row, Col, Typography} from "antd";
import FormComponent from "../../components/FormComponent";
import TodosComponent from '../../components/TodosComponent';
import { formType, todoType } from '../../model';



const Index: React.FC = () => {
    const [form, setForm] = useState<formType>({
        text: ''
    })
    const [todos, setTodos] = useState<todoType[]>([]);

    const handleDelete = (id: string) => {
        const temp:todoType[] = todos.filter(v => v.id !== id);
        setTodos([...temp])
    }

    const handleEdit = (id: string, text: string) => {
        const temp:todoType[] = todos.map((v, i) => v.id === id ? { id, text } : v)
        setTodos([...temp])
    }

    return (
        <Row gutter={[32, 8]} justify="center">
            <Col xs={24} md={24}>
                <Typography.Title style={{ textAlign: 'center' }} type="secondary">
                    Todo List App With React Typescript
                </Typography.Title>
            </Col>
            <Col xs={24} md={24}>
                <FormComponent todos={todos} form={form} setForm={setForm} setTodos={setTodos} />
            </Col>
            <Col xs={24} md={24}>
                <TodosComponent handleEdit={handleEdit} handleDelete={handleDelete} todos={todos} />
            </Col>
        </Row>
    )
}
export default Index