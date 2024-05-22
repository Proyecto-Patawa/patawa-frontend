import { useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation();

  // Función para determinar el título basado en la ruta
  const determineTitle = (pathname) => {
    switch(pathname) {
      case "/admin":
        return "Dashboard";
      case "/admin/dogs":
        return "Crear Perro";
      case "/admin/owners":
        return "Propietarios";
      default:
        return "Login";
    }
  };
 
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-5 content">
      <h1 className="h2">{determineTitle(location.pathname)}</h1>
        <input
          type="text"
          className="form-control search-bar"
          placeholder="Search here"
        />
        <div className="profile">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            width="40"
            height="40"
          />
          <span>Hola, Sandra</span>
        </div>
      </div>
    </>
  );
};

export default Header;
