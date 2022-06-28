import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import foodDataService from "../configdll/servicedb";
import "./../App.css";

const MenuListt = ({ getFoodId }) => {
  const [Foods, setFoods] = useState([]);
  useEffect(() => {
    getFoods();
  }, []);

  const getFoods = async () => {
    const data = await foodDataService.getAllFoods();
    console.log(data.docs);
    setFoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await foodDataService.deleteFoods(id);
    getFoods();
  };

  return (
    <>
      <div className="mb-2">
        <button className="button-refresh" onClick={getFoods}>
          Refresh List
        </button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Food</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Foods.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.nama_makanan}</td>
                <td>{doc.deskripsi_makanan}</td>
                <td>
                  <button
                    className="button-edit"
                    onClick={(e) => getFoodId(doc.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="button-delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default MenuListt;
