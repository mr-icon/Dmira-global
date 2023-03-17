import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const FORGOT_URL = "/forgot-password";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const errRef = useRef();

  useEffect(() => {
    setErrMsg("");
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg([]);

    try {
      const response = await axios.post(FORGOT_URL, JSON.stringify({ email }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setEmail("");
    } catch (err) {
      if (!errMsg?.response) {
        if (!errMsg?.response) {
          setErrMsg("No Server Response");
        } else if (errMsg.response?.status === 400) {
          setErrMsg("Email Not Found");
        } else {
          setErrMsg("Failed To Submit");
        }
        errRef.current.focus();
      }
    }
  };
  return (
    <div className="auth">
      <section className="auth-section border">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
          {errMsg}
        </p>
        <h1>Forgot Password</h1>
        <form on onSubmit={handleSubmit}>
          <label htmlFor="email" className="form-label">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <button>Submit</button>
        </form>
        <p>
          Need an Account?
          <br />
          <span className="line">
            <Link to={"/register"}>Sign Up</Link>
          </span>
        </p>
      </section>
    </div>
  );
};

export default ForgotPassword;
