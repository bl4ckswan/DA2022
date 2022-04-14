import React from "react";
import { Table, Row, Col } from "react-bootstrap";

function StudentInformation() {
  return (
    <Row className="justify-content-center">
      <Col lg='4'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Thông tin sinh viên</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mã sinh viên</td>
            </tr>
            <tr>
              <td>Tên sinh viên</td>
            </tr>
            <tr>
              <td>Ngày sinh</td>
            </tr>
            <tr>
              <td>Giới tính</td>
            </tr>
            <tr>
              <td>Nơi sinh</td>
            </tr>
            <tr>
              <td>Dân tộc</td>
            </tr>
            <tr>
              <td>Quốc tịch</td>
            </tr>
            <tr>
              <td>Lớp</td>
            </tr>
          </tbody>
        </Table>
      </Col>
      <Col lg='6'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Thông tin bằng tốt nghiệp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Số hiệu</td>
            </tr>
            <tr>
              <td>Tên sinh viên</td>
            </tr>
            <tr>
              <td>Ngày sinh</td>
            </tr>
            <tr>
              <td>Năm tốt nghiệp</td>
            </tr>
            <tr>
              <td>Xếp loại</td>
            </tr>
            <tr>
              <td>Hình thức đào tạo</td>
            </tr>
            <tr>
              <td>Ngày cấp</td>
            </tr>
            <tr>
              <td>Số vào sổ</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default StudentInformation;
