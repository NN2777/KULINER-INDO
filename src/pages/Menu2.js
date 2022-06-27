import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import foodDataService from "../configdll/servicedb";
import Edit2 from "../pages/Edit2";

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    getFoods();
  }, []);

  const getFoods = async () => {
    const data = await foodDataService.getAllFoods();
    setFoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await foodDataService.deleteFoods(id);
    getFoods();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getFoods}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Food Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.nama_makanan}</td>
                <td>{doc.deskripsi_makanan}</td>
                <td>
                  <Button variant="secondary" className="edit">
                    Edit
                  </Button>

                  <Edit2 id={doc.id} />
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default FoodList;
