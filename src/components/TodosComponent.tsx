import React, { useContext, useEffect } from 'react'
import { Row, Col, Typography, Card } from 'antd'
import CardComponent from './CardComponent'
import { TodosContext } from '../context/TodosContext'



const TodosComponent: React.FC = () => {
    const { state } = useContext(TodosContext)

    return (
        <Row justify='center' gutter={[47, 56]}>
            <Col xs={8} md={8}>
                {state.todos.length > 0 &&
                    state.todos.map((v, i) => {
                        console.log(v)
                        return (
                            <CardComponent i={i} key={i} />
                        )
                    })
                }
            </Col>
        </Row>
    )
}

export default TodosComponent