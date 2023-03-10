import React, { useRef, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth"
import axios from "../../api/axios";
import { Link, useLocation, useNavigation } from "react-router-dom";


const LOGIN_URL = '/auth';

function Login() {
    const { setAuth } = useAuth();

    // const navigate = useNavigation();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";
    const userRef = useRef();
    const errRef = useRef();
    
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

//   useEffect(() => {
//     useRef.current.focus();
//   }, [])
  
  useEffect(() => {
    setErrMsg('');
  }, [email, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(LOGIN_URL, JSON.stringify({email, pwd}),
        {
            headers: { 'Content-Type': 'application/json'},
            withCredentials: true
        });
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setAuth({ email, pwd, roles, accessToken });
        setEmail('');
        setPwd('');
        // navigate(from, { replace: true });
    } catch (err) {
        if (!err?.response){
            setErrMsg('No Server Response');
        } else if (err.response?.status === 400) {
            setErrMsg('Missing Email or Password');
        } else if (err.response?.status === 401) {
            setErrMsg('Unauthorized');
        } else {
            setErrMsg('Login Failed');
        }
        errRef.current.focus();
    }
   
  }
    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
            <h1>Sign In</h1>
            <form on onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email"
                id="email" 
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required/>
                <label htmlFor="password">Password:</label>
                <input type="password"
                id="password" 
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                />
                <input type="checkbox" />
                <label htmlFor="remember">Remember Me</label>
                <span className="line">
                    <Link to={"/forgot-password"}>Forgot Password</Link>
                </span>
                <button>Sign In</button>
            </form>
            <p>
                Need an Account?<br />
                <span className="line">
                    <Link to={"/register"}>Sign Up</Link>
                </span>
            </p>
        </section>
    )
}

export default Login;