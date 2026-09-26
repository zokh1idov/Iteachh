import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";

function App() {
  const [role, setRole] = useState(() => {
    return localStorage.getItem("role") || null;
  });

  useEffect(() => {
    if (role) {
      localStorage.setItem("role", role);
    } else {
      localStorage.removeItem("role");
    }
  }, [role]);

  const handleLogin = (userRole) => {
    setRole(userRole);
  };

  const handleLogout = () => {
    setRole(null);
  };

  if (!role) {
    return <Login onLogin={handleLogin} />;
  }

  if (role === "admin") {
    return <Admin onLogout={handleLogout} />;
  }

return (
    <>
      <Navbar onLogout={handleLogout} />
      <Home />
      <Footer />
    </>
  );
}

export default App;