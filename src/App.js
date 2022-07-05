import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu3 from "./pages/Menu3";
import About from "./pages/About";
import Promo from "./pages/Promo";
import Login from "./pages/Login";
import Edit2 from "./pages/Edit2";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./configdll/ProtectedRoute";
import {
  BrowserRouter as Router,
  Route,
  Routes, //in the new router-dom version, Switch is used
  useParams,
} from "react-router-dom";
import SignUp from "./pages/SignUp";

export function App() {
  return (
    <UserAuthContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/menu" exact element={<Menu3 />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/edit/:id" element={<Edit2 />} />
            <Route
              path="/promo"
              element={
                <ProtectedRoute>
                  <ProtectedPage />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </UserAuthContextProvider>
  );
}

function ProtectedPage() {
  return (
    <div>
      <Promo />
    </div>
  );
}

function MenuDetail() {
  let { menuId } = useParams();

  return (
    <div>
      <h3>{menuId}</h3>
    </div>
  );
}
