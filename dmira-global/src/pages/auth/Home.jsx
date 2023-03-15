import Navbar from "../../components/Navbar";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import "../../Auth.css";

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
    <div>
      <Navbar />
      <section>
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
