// import React, { useState } from "react";
// import foodDataService from "../configdll/servicedb";

// const Edit = ({ id }) => {
//   const initialFoodState = {
//     id: null,
//     nama_makanan: "",
//     deskripsi_makanan: "",
//   };
//   const [currentFood, setCurrentFood] = useState(initialFoodState);
//   const [message, setMessage] = useState("");

//   const { food } = props;
//   if (currentFood.id !== food.id) {
//     setCurrentFood(food);
//     setMessage("");
//   }

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setCurrentFood({ ...currentFood, [name]: value });
//   };

//   //   const updatePublished = (status) => {
//   //     MusicDataService.update(currentMusic.key, { published: status })
//   //       .then(() => {
//   //         setCurrentMusic({ ...currentMusic, published: status });
//   //         setMessage("The status was updated successfully!");
//   //       })
//   //       .catch((e) => {
//   //         console.log(e);
//   //       });
//   //   };

//   const updateFood = () => {
//     const data = {
//       nama_makanan: currentFood.nama_makanan,
//       deskripsi_makanan: currentFood.deskripsi_makanan,
//     };

//     foodDataService
//       .updateFoods(currentFood.id, data)
//       .then(() => {
//         setMessage("The Music was updated successfully!");
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };

//   //   const deleteMusic = () => {
//   //     MusicDataService.remove(currentMusic.key)
//   //       .then(() => {
//   //         props.refreshList();
//   //       })
//   //       .catch((e) => {
//   //         console.log(e);
//   //       });
//   //   };

//   return (
//     <div>
//       <div className="edit-form">
//         <h4>Music</h4>
//         <form>
//           <div className="form-group">
//             <label htmlFor="title">Title</label>
//             <input
//               type="text"
//               className="form-control"
//               id="title"
//               name="title"
//               value={currentFood.nama_makanan}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="description">Description</label>
//             <input
//               type="text"
//               className="form-control"
//               id="description"
//               name="description"
//               value={currentFood.deskripsi_makanan}
//               onChange={handleInputChange}
//             />
//           </div>
//         </form>

//         <button
//           type="submit"
//           className="badge badge-success"
//           onClick={updateFood}
//         >
//           Update
//         </button>
//         <p>{message}</p>
//       </div>
//     </div>
//   );
// };

// export default Edit;
