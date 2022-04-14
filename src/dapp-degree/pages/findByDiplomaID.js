import React from "react";
import Header from "../components/Header";
import StudentInformation from "../components/StudentInformation";
import { InputGroup, FormControl, Button, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import styles from "../styles/footer.module.css";

function findByDiplomaID() {
  return (
    <>
      <Row>
        <Header />
      </Row>
      <Row className="justify-content-center my-3">
        <InputGroup className="mb-3 w-50">
          <InputGroup.Text id="basic-addon1">Số Hiệu</InputGroup.Text>
          <FormControl />
          <Button variant="outline-secondary" id="button-addon2">
            Tìm kiếm
          </Button>
        </InputGroup>
      </Row>
      <Row>
        <StudentInformation />
      </Row>
      <Row className={styles.stickyBottom}>
        <Footer />
      </Row>
    </>
  );
}

export default findByDiplomaID;
