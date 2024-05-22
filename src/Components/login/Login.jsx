import logo from "../../assets/images/patawa-logo.png";
import illustration from "../../assets/images/illustracion.png";
import "../../assets/css/login.css";
const Login = () => {
  return (
    <div className="login-page container-fluid ">
      <div className="row">
        <div className="col-12">
          <img src={logo} alt="Logo Patawa" className="logo" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src={illustration} alt="Dog Walker" className="dog-walker" />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="login-form-container">
            <h2 className="mb-4 text-color-one">Bienvenidos</h2>
            <form className="mb-5">
              <div className="form-group ">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Usuario"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Contraseña"
                />
              </div>
              <button type="submit" className="btn text-color-one">
                Ingresar
              </button>
            </form>
            {/* <a href="#" className="forgot-password text-color-one">
              Olvidó su contraseña?
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
