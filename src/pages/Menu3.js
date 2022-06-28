import { useState } from "react";
import { Container, Navbar, Row, Col, Button } from "react-bootstrap";
import AddMenu from "./AddMenu";
import MenuListt from "./MenuList";


function Menu3() {
  const [FoodId, setFoodId] = useState("");

  const getFoodIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setFoodId(id);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header" style={{ width:"100%" }}>
        <Container style={{ width:"100%" }}>
        <center>
          <Navbar.Brand href="#home" style={{ width:"100%" }}><h1>Our List of Menu</h1></Navbar.Brand>
          </center>
        </Container>
      </Navbar>

      <Container style={{ width: "800px"}}>
        <Row>
          <Col>
            <AddMenu id={FoodId} setFoodId={setFoodId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <center>
              <MenuListt getFoodId={getFoodIdHandler} />
            </center>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Menu3;
