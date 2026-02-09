import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import Photo from "./pages/Photo";
import Admin from "./pages/Admin";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLogin");
  return isLoggedIn ? children : <Navigate to="/admin" replace />;
}

export default function App() {

  return (
    <>

    <Router>

         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />


 

        <Route
          path="/personal"
          element={
            <ProtectedRoute>
              <Personal />
            </ProtectedRoute>
          }
        />

        <Route
          path="/photos"
          element={
            <ProtectedRoute>
              <Photo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
    </>
  );
}
