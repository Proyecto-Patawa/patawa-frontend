function Sidebar() {
  return (
    <>
      <nav className="col-md-2 d-none d-md-block sidebar">
        <div className="sidebar-sticky">
          <div className="text-center mb-4">
            <img src="logo.png" alt="Logo" className="img-fluid" width="100" />
          </div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <i className="fa fa-tachometer-alt"></i> Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-user"></i> Propietarios
              </a>
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
}

export default Sidebar;
