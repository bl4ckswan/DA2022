import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddUser from "../components/AddUser";
import ModifyUser from "../components/ModifyUser";
import ShowCurrentUser from "../components/ShowCurrentUser";

import { Row, Form, Col, Button } from "react-bootstrap";
import styles from "../styles/footer.module.css";
import form from "../styles/form.module.css";

function userList() {
  return (
    <>
      <Row className="mb-5">
        <Header />
      </Row>
      {/* THÊM THÔNG TIN NGƯỜI DÙNG */}
      <AddUser/>
      {/* SỬA THÔNG TIN NGƯỜI DÙNG */}
      <ModifyUser/>
      {/* THÔNG TIN NGƯỜI DÙNG ĐANG ĐĂNG NHẬP */}
      <ShowCurrentUser/>
      <Row className={styles.stickyBottom}>
        <Footer />
      </Row>
    </>
  );
}

export default userList;
