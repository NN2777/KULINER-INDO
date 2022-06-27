import { db } from "../configdll/firebase.config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const foodCollectionRef = collection(db, "wishlist");
class foodDataService {
  addFoods = (newFood) => {
    return addDoc(foodCollectionRef, newFood);
  };

  updateFoods = (id, updatedFood) => {
    const foodDoc = doc(db, "wishlist", id);
    return updateDoc(foodDoc, updatedFood);
  };

  deleteFoods = (id) => {
    const foodDoc = doc(db, "wishlist", id);
    return deleteDoc(foodDoc);
  };

  getAllFoods = () => {
    return getDocs(foodCollectionRef);
  };

  getFood = (id) => {
    const foodDoc = doc(db, "wishlist", id);
    return getDoc(foodDoc);
  };
}

export default new foodDataService();
