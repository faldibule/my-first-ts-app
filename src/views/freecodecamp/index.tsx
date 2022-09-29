import React, { useContext, useState } from 'react'
import { Button, Row, Col, Typography, Tag, Card} from "antd";
import FormComponent from "../../components/FormComponent";
import TodosComponent from '../../components/TodosComponent';
import { formType, todoType } from '../../model';
import { TodosContext } from '../../context/TodosContext';
import CompleteTodosComopnent from '../../components/CompleteTodosComponent';

interface IndexProdiverInterface {
    children: React.ReactNode
}

const IndexProvider = (props: IndexProdiverInterface) => {
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
            {props.children}
        </Row>
    )
}

const Index: React.FC = () => {

    return (
        <IndexProvider>
            <Col xs={24} md={10} style={{ margin: 2 }}>
                <Card title="All Thing You Have To DO !">
                    <TodosComponent />
                </Card>
            </Col>
            <Col xs={24} md={10} style={{ margin: 2 }}>
                <Card title="All Thing You Did !">
                    <CompleteTodosComopnent />
                </Card>
            </Col>
        </IndexProvider>
    )
}
export default Index