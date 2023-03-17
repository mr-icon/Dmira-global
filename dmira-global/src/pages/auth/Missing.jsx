import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <article style={{ padding: "100px" }} className="auth">
      <h1>Oops!</h1>
      <p>Page Not Found</p>
      <div>
        <Link to="/" className="text-primary">
          Visit Our Homepage
        </Link>
      </div>
    </article>
  );
};

export default Missing;
