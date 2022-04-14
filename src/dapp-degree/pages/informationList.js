import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Row } from "react-bootstrap";
import styles from "../styles/footer.module.css";
import AddStudentInformation from "../components/AddStudentInformation";
import AddDiplomaInformation from "../components/AddDiplomaInformation";

function informationList() {
  return (
    <>
      <Row className="mb-4">
        <Header />
      </Row>

      <AddStudentInformation />

      <AddDiplomaInformation />

      <Row className={styles.stickyBottom}>
        <Footer />
      </Row>
    </>
  );
}

export default informationList;
