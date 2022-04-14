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

function AddDiplomaInformation() {
  return (
    <>
      <Row className="justify-content-center">
        <Col lg="8">
          <Table hover className={styles.tableBorder}>
            <thead>
              <tr>
                <th>Thông tin bằng tốt nghiệp</th>
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
                <td>Số hiệu bằng</td>
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
                <td>Năm tốt nghiệp</td>
                <td>
                  <InputGroup>
                    <FormControl />
                  </InputGroup>
                </td>
              </tr>
              <tr>
                <td>Xếp loại</td>
                <td>
                  <InputGroup>
                    <FormControl />
                  </InputGroup>
                </td>
              </tr>
              <tr>
                <td>Hình thức đào tạo</td>
                <td>
                  <InputGroup>
                    <FormControl />
                  </InputGroup>
                </td>
              </tr>
              <tr>
                <td>Ngày cấp</td>
                <td>
                  <InputGroup>
                    <FormControl />
                  </InputGroup>
                </td>
              </tr>
              <tr>
                <td>Số vào sổ</td>
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

export default AddDiplomaInformation;
