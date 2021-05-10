import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const NavAndProf = (props) => {
  const [photo, setPhoto] = useState("");
  fetch("https://random.dog/woof.json?ref=apilist.fun")
    .then((response) => response.json())
    .then((data) => setPhoto(data.url));

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={photo}
            width="50"
            height="50"
            className="d-inline-block align-top "
          />{" "}
          Nadia Chess.com{" "}
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavAndProf;
