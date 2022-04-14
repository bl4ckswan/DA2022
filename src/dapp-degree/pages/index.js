import React from "react";
import Header from "../components/Header";
import { InputGroup, FormControl, Button, Row } from "react-bootstrap";
import StudentInformation from "../components/StudentInformation";
import Footer from "../components/Footer";
import styles from '../styles/footer.module.css'

function HomePage() {
  var web3Provider = null;
  var BangDaiHoc;
  const nullAddress = "0x0000000000000000000000000000000000000000";

  function initWeb3 (){
    if (typeof web3 !== 'undefined' && typeof web3.currentProvider !== 'undefined'){
      web3Provider = web3.currentProvider;
      web3 = new Web3 (web3Provider);
    } else {
      console.error ('Cài đặt Metamask tiếp tục!')
      alert ('Cài đặt Metamask tiếp tục!')
    }
  }

  function initBangDaiHoc () {
    $.getJSON('BangDaiHoc.json', function (data){
      BangDaiHoc = TruffleContract (data)
      web3Provider = web3.currentProvider
      BangDaiHoc.setProvider (web3Provider)
    })

  window.onload = function () {
    initWeb3();
    initBangDaiHoc()
  }
  }
  return (
    <>
      <Row>
        <Header />
      </Row>
      <Row className="justify-content-center my-3">
        <InputGroup className="mb-3 w-50">
          <InputGroup.Text id="basic-addon1">Mã Sinh Viên</InputGroup.Text>
          <FormControl />
          <Button variant="outline-secondary" id="button-addon2">
            Button
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

export default HomePage;
