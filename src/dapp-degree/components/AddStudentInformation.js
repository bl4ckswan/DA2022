import React from "react";
import {
  Table,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

import styles from '../styles/addInformationForm.module.css'

function AddStudentInformation() {
  return (
    <>
      <Row className="justify-content-center">
        <Col lg="8">
          <Table hover className={styles.tableBorder}>
            <thead>
              <tr>
                <th>Thông tin sinh viên</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mã sinh viên</td>
                <td>
                  <InputGroup>
                    <FormControl />
                  </InputGroup>
                </td>
              </tr>
              <tr>
                <td>Tên sinh viên</td>
                <td>
                  <InputGroup>
                    <FormControl />
                  </InputGroup>
                </td>
              </tr>
              <tr>
                <td>Ngày sinh</td>
                <td>
                  <InputGroup>
                    <FormControl />
                  </InputGroup>
                </td>
              </tr>
              <tr>
                <td>Giới tính</td>
                <td>
                  <InputGroup>
                    <FormControl />
                  </InputGroup>
                </td>
              </tr>
              <tr>
                <td>Nơi sinh</td>
                <td>
                  <InputGroup>
                    <FormControl />
                  </InputGroup>
                </td>
              </tr>
              <tr>
                <td>Dân tộc</td>
                <td>
                  <InputGroup>
                    <FormControl />
                  </InputGroup>
                </td>
              </tr>
              <tr>
                <td>Quốc tịch</td>
                <td>
                  <InputGroup>
                    <FormControl />
                  </InputGroup>
                </td>
              </tr>
              <tr>
                <td>Lớp</td>
                <td>
                  <InputGroup>
                    <FormControl />
                  </InputGroup>
                </td>
              </tr>
              <tr className={styles.footerBorder}>
                <Button type="submit">Lưu</Button>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default AddStudentInformation;
