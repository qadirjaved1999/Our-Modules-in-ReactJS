import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import background from "../Images/background.jpg";
import "./style.css";

const Home = () => {
  return (
    <div
      className="main-home"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        opacity: "0.9",
        height: "90vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "white",
          fontSize: "50px",
          marginBottom: "15px",
        }}
      >
        Our Demo
      </h1>
      <p style={{ textAlign: "center", color: "white" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam quos, non
        totam, veritatis perferendis in quae qui repellendus, ab ipsum autem
        voluptate aspernatur soluta unde expedita animi. Amet sit laudantium
        nihil odio sapiente minus possimus repellat quasi vitae, et nam
        aspernatur facilis facere dicta, blanditiis nisi iste impedit ipsam.
        nihil odio sapiente minus possimus repellat quasi vitae, et nam
        aspernatur facilis facere dicta, blanditiis nisi iste impedit ipsam.
      </p>
      <Stack
        spacing={2}
        style={{ display: "flex", alignItems: "center", marginTop: "15px" }}
      >
        <Button variant="contained" style={{ fontWeight: "bold" }}>
          Read More
        </Button>
      </Stack>
    </div>
  );
};

export default Home;
