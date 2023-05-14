import React from "react";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

const styles = {
  main: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  ccard: {
    color: "black",
    width: "18rem",
    padding: "10px",
    margin: "10px",
  },
};

const Cards = () => {
  return (
    <div className="main" style={styles.main}>
      <CCard style={styles.ccard}>
        <CCardImage orientation="top" src="/src/images/4.jpg" />
        <CCardBody>
          <CCardTitle>SS Birthday events</CCardTitle>
          <CCardText>Place : coimabtore</CCardText>
          <CButton href="#">Book Event</CButton>
        </CCardBody>
      </CCard>
      <CCard style={styles.ccard}>
        <CCardImage orientation="top" src="/src/images/2.jpg" />
        <CCardBody>
          <CCardTitle>KK Birthday events</CCardTitle>
          <CCardText>Place : coimabtore</CCardText>
          <CButton href="#">Book Event</CButton>
        </CCardBody>
      </CCard>
      <CCard style={styles.ccard}>
        <CCardImage orientation="top" src="/src/images/3.jpg" />
        <CCardBody>
          <CCardTitle>MM Birthday events</CCardTitle>
          <CCardText>Place : coimabtore</CCardText>
          <CButton href="#">Book Event</CButton>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default Cards;
