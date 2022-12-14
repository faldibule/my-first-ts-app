import React, { useContext, useEffect } from 'react'
import { Row, Col, Typography, Card } from 'antd'
import CardComponent from './CardComponent'
import { TodosContext } from '../context/TodosContext'



const TodosComponent: React.FC = () => {
    const { state } = useContext(TodosContext)
    return (
        <Row justify='center' gutter={[20, 10]}>
            <Col xs={24} md={24}>
                {state.todos.length > 0 &&
                    state.todos.map((v, i) => {
                        return (
                            <CardComponent type='TODOS' v={v} key={v.id} />
                        )
                    })
                }
            </Col>
        </Row>
    )
}

export default TodosComponent