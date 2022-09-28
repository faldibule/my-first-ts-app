import React, { useContext, useState } from 'react'
import { Button, Row, Col, Typography} from "antd";
import FormComponent from "../../components/FormComponent";
import TodosComponent from '../../components/TodosComponent';
import { formType, todoType } from '../../model';
import { TodosContext } from '../../context/TodosContext';



const Index: React.FC = () => {
    const [form, setForm] = useState<formType>({
        text: ''
    })

    return (
        <Row gutter={[32, 8]} justify="center">
            <Col xs={24} md={24}>
                <Typography.Title style={{ textAlign: 'center' }} type="secondary">
                    Todo List App With React Typescript
                </Typography.Title>
            </Col>
            <Col xs={24} md={24}>
                <FormComponent form={form} setForm={setForm} />
            </Col>
            <Col xs={24} md={24}>
                <TodosComponent />
            </Col>
        </Row>
    )
}
export default Index