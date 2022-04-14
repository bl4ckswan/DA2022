import React from "react";
import { Row, Form, Col, Button } from "react-bootstrap";

function AddUser() {
  return (
    <>
      <Row className="mb-3 justify-content-end">
        <Col sm="9">Thêm người dùng</Col>
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
            <Form.Control type="text" />
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
            <Form.Control type="text" />
          </Col>
        </Form.Group>
        <Row>
          <Col sm={9} className="justify-content-end d-flex">
            <Button variant="primary" type="submit">
              Lưu
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default AddUser;
