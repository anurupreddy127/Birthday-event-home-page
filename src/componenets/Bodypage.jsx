import React from "react";
import Cards from "./Cards";

function Bodypage() {
  const styles = {
    main: {
      width: "100%",
      height: "100vh",
      background: "#519E4E",
      color: "White",
      fontFamily: "'Roboto', sans-serif",
      border: "10px solid White",
    },
    second: {
      margin: "50px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      padding: "20px",
      width: "250px",
      height: "50px",
      border: "2px solid #519E4E",
      borderRadius: "5px",
      fontSize: "20px",
      color: "black",
      fontFamily: "'Roboto', sans-serif",
      margin: "10px",
      background: "white",
    },
    button: {
      width: "100px",
      height: "50px",
      border: "2px solid #519E4E",
      borderRadius: "5px",
      fontSize: "20px",
      color: "white",
      fontFamily: "'Roboto', sans-serif",
      margin: "10px",
      background: "#0065CB",
      cursor: "pointer",
    },
  };

  return (
    <>
      <div className="main" style={styles.main}>
        <div className="second" style={styles.second}>
          <input
            type="text"
            placeholder="Type here to search"
            className="input"
            style={styles.input}
          />
          <button type="submit" className="button" style={styles.button}>
            Search
          </button>
        </div>
        <Cards />
      </div>
    </>
  );
}

export default Bodypage;
