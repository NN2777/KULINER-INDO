import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
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
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddMenu id={FoodId} setFoodId={setFoodId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <MenuListt getFoodId={getFoodIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Menu3;
