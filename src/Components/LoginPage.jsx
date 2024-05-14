import logo from "../assets/images/patawa-logo.png";
import illustration from "../assets/images/illustracion.png";
const LoginPage = () => {
  return (
    <>
      <div className="login-container">
        <div className="row justify-content-center align-items-center w-100">
          <div className="col-md-4">
            <div className="login-box">
              <div className="text-center mb-3">
                <img src={logo} alt="PATAWA Logo" width="150" />
              </div>
              <form className="login-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Usuario"
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                />
                <button className="btn login-btn">Ingresar</button>
                <div className="forgot-password">¿Olvidó su contraseña?</div>
              </form>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <img src={illustration} alt="Dog Walker Illustration" width="300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
