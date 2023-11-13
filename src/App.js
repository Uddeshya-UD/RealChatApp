// import logo from './logo.svg';
import "./App.css";
import Dashboard from "./modules/dashboard";
import Form from "./modules/forms";
import { Routes, Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("user:token") !== null || true;

  if (!isLoggedIn) {
    return <Navigate to={"/users/signin"} />;
  } else if (
    isLoggedIn &&
    ["/users/signin", "/users/signup"].includes(window.location.pathname)
  ) {
    return <Navigate to={"/"} />;
  }

  return children;
};
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/signin"
        element={
          <ProtectedRoute>
            <Form isSignInPage={true} />
          </ProtectedRoute>
        }
      />
      <Route path="/users/signup" element={<Form isSignInPage={false} />} />
    </Routes>
  );
}

export default App;
