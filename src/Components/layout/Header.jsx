import useAuth from "../../hooks/useAuth";
const Header = () => {
  const { auth } = useAuth();

  return (
    <>
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
          <span>{auth.fullName}</span>
        </div>
      </div>
    </>
  );
};

export default Header;
