import React from "react";
import { Row, Form, Col, Button } from "react-bootstrap";

function ModifyUser() {
  return (
    <>
      <Row className="mb-3 justify-content-end">
        <Col sm="9">Sửa thông tin người dùng</Col>
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
        <Form.Group
          as={Row}
          className="mb-3 justify-content-end"
          id="formGridCheckbox"
        >
          <Col sm={1} className="d-flex justify-content-end align-items-center">
            <Form.Check type="checkbox" />
          </Col>
          <Form.Label column sm={4}>
            Quyền admin
          </Form.Label>
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

export default ModifyUser;
