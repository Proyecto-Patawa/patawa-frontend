import logo from "../../assets/images/patawa-logo.png";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <nav className="col-md-2 d-none d-md-block sidebar">
        <div className="sidebar-sticky">
          <div className="text-center mb-4">
            <img src={logo} alt="Logo Patawa" className="logo" />
          </div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/admin">
                <i className="fa fa-tachometer-alt"></i> Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="owners">
                <i className="fa fa-user"></i> Propietarios
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-paw"></i> Mascotas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-walking"></i> Paseadores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-route"></i> Paseos
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
