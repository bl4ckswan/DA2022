import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Link from "next/link";

import styles from "../styles/header.module.css";
const Logo =
  "https://gist.github.com/vinhjaxt/fa4208fd6902dd8b2f4d944fa6e7f2af/raw/454f58aeac4fdeb459476eae7128dc6ff57df25f/logo-hvktmm.png";

function Header() {
  return (
    <>
      <Container fluid>
        <Row className={styles.mainHeader}>
          <Col lg="4" className="d-flex justify-content-end mb-2">
            <Image src={Logo} className={styles.mainLogo}  />
          </Col>
          <Col lg="8">
            <h1 className="text-uppercase">HỌC VIỆN KỸ THUẬT MẬT MÃ</h1>
            <h3 className="mb-0">
             ỨNG DỤNG QUẢN LÝ HỒ SƠ SINH VIÊN
            </h3>
          </Col>
        </Row>
        <Row className={styles.headerTitle}>
          <Col lg="2">
            <Link href="/">
              <a className={styles.headerLink}>Tìm bằng mã sinh viên</a>
            </Link>
          </Col>
          <Col lg="2">
            <Link href="/findByDiplomaID">
              <a className={styles.headerLink}>Tìm bằng số hiệu</a>
            </Link>
          </Col>
          <Col lg="2">
            <Link href="/userList">
              <a className={styles.headerLink}>Người dùng</a>
            </Link>
          </Col>
          <Col lg="2">
            <Link href="/informationList">
              <a className={styles.headerLink}>Nhập liệu</a>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
