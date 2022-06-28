import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import foodDataService from "../configdll/servicedb";

const AddMenu = ({ id, setFoodId }) => {
  const [nama_makanan, setName] = useState("");
  const [deskripsi_makanan, setDesc] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (nama_makanan === "" || deskripsi_makanan === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newFood = {
      nama_makanan,
      deskripsi_makanan,
    };
    console.log(newFood);

    try {
      if (id !== undefined && id !== "") {
        await foodDataService.updateFoods(id, newFood);
        setFoodId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await foodDataService.addFoods(newFood);
        setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setName("");
    setDesc("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await foodDataService.getFood(id);
      console.log("the record is :", docSnap.data());
      setName(docSnap.data().nama_makanan);
      setDesc(docSnap.data().deskripsi_makanan);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">Name : </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="name"
                value={nama_makanan}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">Desc : </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="desc"
                value={deskripsi_makanan}
                onChange={(e) => setDesc(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddMenu;
