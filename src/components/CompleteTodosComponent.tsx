import React, { useContext, useEffect } from 'react'
import { Row, Col, Typography, Card } from 'antd'
import CardComponent from './CardComponent'
import { TodosContext } from '../context/TodosContext'


const CompleteTodosComopnent: React.FC = () => {
    const { state } = useContext(TodosContext)
    return (
        <Row justify='center' gutter={[47, 56]}>
            <Col xs={24} md={24}>
                {state.complete.length > 0 &&
                    state.complete.map((v, i) => {
                        return (
                            <CardComponent type='COMPLETE' v={v} key={v.id} />
                        )
                    })
                }
            </Col>
        </Row>
    )
}

export default CompleteTodosComopnent