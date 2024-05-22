import "../App.scss";
import { Nav } from "react-bootstrap";
import { Table } from "react-bootstrap";
import logo from "../assets/images/patawa-logo.png";

const OwnersTable = ({ owners = [] }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block sidebar">
          <div className="sidebar-sticky">
            <div className="text-center mb-4">
              <img src={logo} alt="Logo Patawa" className="logo" />
            </div>
            <Nav defaultActiveKey="/dashboard" className="flex-column">
              <Nav.Link href="/dashboard"><i className="fa fa-tachometer-alt"></i> Dashboard</Nav.Link>
              <Nav.Link href="/propietarios"><i className="fas fa-user"></i> Propietarios</Nav.Link>
              <Nav.Link href="/mascotas"><i className="fas fa-paw"></i> Mascotas</Nav.Link>
              <Nav.Link href="/paseadores"><i className="fas fa-walking"></i> Paseadores</Nav.Link>
              <Nav.Link href="/paseos"><i className="fas fa-route"></i> Paseos</Nav.Link>
            </Nav>
          </div>
        </nav>
        <main role="main"className="col-md-9 ml-sm-auto col-lg-10 px-md-4 content">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
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
          <div className="row">
            <div className="col">
              <Table>
                <thead>
                  <tr>
                    <th>Tipo de documento</th>
                    <th>Identificación</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {owners.length > 0 &&
                    owners.map((owner) => (
                      <tr key={owner.id}>
                        <td>{owner.tipodedocumento}</td>
                        <td>{owner.identificacion}</td>
                        <td>{owner.nombre}</td>
                        <td>{owner.email}</td>
                        <td>{owner.direccion}</td>
                        <td>{owner.telefono}</td>
                        <td className="actions">
                          <button className="btn btn-edit">
                            <i className="bi bi-pencil-fill"></i>
                          </button>
                          <button className="btn btn-delete">
                            <i className="bi bi-trash-fill"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OwnersTable;

/*<footer className="footer">
                <p>&copy; 2024 Patawa Dog Walking</p>
              </footer>*/
