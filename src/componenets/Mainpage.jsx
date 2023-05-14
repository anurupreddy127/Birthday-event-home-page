import React from "react";
import styles from "./style.css";
import Bodypage from "./Bodypage";

function Mainpage() {
  const styles = {
    main: {
      backgroundColor: "#0065CB",
      width: "100%",
      color: "#ffffff",
      padding: "10px",
      fontSize: "30px",
      fontWeight: "bold",
      textAlign: "center",
      border: "10px solid white",
    },
    ul: {
      listStyle: "none",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      margin: "0px",
      padding: "0px",
      color: "#ffffff",
      fontSize: "15px",
      fontWeight: "bold",
      fontFamily: "sans-serif",
    },
    inputText: {
      padding: "10px",
      color: "red",
    },
  };

  return (
    <>
      <div className="main" style={styles.main}>
        Birthday Event
        <ul style={styles.ul}>
          <li>Book Event</li>
          <li>View Booked Event</li>
          <li>Logout</li>
        </ul>
      </div>
      <Bodypage />
    </>
  );
}

export default Mainpage;
