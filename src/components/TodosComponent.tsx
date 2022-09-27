import React from 'react'
import { todosComponentType } from '../model'
import { Row, Col, Typography, Card } from 'antd'
import CardComponent from './CardComponent'



const TodosComponent: React.FC<todosComponentType> = ({ todos, handleDelete, handleEdit }) => {
  return (
    <Row justify='center' gutter={[47, 56]}>
        <Col xs={8} md={8}>
            {todos.length > 0 && 
                todos.map((v, i) => {
                    return (
                        <CardComponent handleEdit={handleEdit} handleDelete={handleDelete} todo={v} i={i} key={i} />
                    )
                })
            }
        </Col>
    </Row>
  )
}

export default TodosComponent