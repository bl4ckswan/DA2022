import React from 'react'
import { Row, Form, Col } from "react-bootstrap";

function ShowCurrentUser() {
  return (
    <>
      <Row className="mb-3 justify-content-end">
        <Col sm="9">Thông tin người dùng đang đăng nhập</Col>
      </Row>
      <Form>
        <Form.Group
          as={Row}
          className="mb-3 justify-content-center"
          controlId="userAddress"
        >
          <Form.Label column sm={1}>
            Địa chỉ
          </Form.Label>
          <Col sm={5}>
            
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 justify-content-center"
          controlId="userName"
        >
          <Form.Label column sm={1}>
            Tên người dùng
          </Form.Label>
          <Col sm={5}>
            
          </Col>
        </Form.Group>
      </Form>
    </>
  )
}

export default ShowCurrentUser