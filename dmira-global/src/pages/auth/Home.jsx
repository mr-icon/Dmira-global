import Navbar from "../../components/Navbar";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint
    setAuth({});
    navigate("/login");
  };

  return (
    <div className="auth">
      <section className="auth-section border">
        <h1>Home</h1>
        <br />
        <p>You are logged in!</p>
        <br />
        <div className="flexGrow">
          <button onClick={logout}>Sign Out</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
