import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Promo from "./pages/Promo";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes, //in the new router-dom version, Switch is used
  Navigate, //In older versions, Redirect is used
  useNavigate, //In older versions, useHistory is used
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route
            path="/private/*"
            element={
              <PrivateRoute>
                <ProtectedPage />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function PrivateRoute({ children }) {
  let auth = fakeAuth;
  let location = useLocation();

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
//   return children;
// }

// function PublicPage() {
//   return (
//     <div>
//       <h3>Public</h3>
//     </div>
//   );
// }
function AuthButton() {
  let navigate = useNavigate();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => navigate(from, { push: true }));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function ProtectedPage() {
  return (
    <div>
      <Promo />
      <AuthButton />
    </div>
  );
}
// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div className="login">
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default App;
