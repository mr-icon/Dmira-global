import React, { useRef, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth"
import axios from "../../api/axios";


const LOGIN_URL = '/auth';

function Login() {
    const { setAuth } = useAuth();
    const userRef = useRef();
    const errRef = useRef();
    
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

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
        setSuccess(true);
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
        <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br />
                <p>
                    <a href="#">Go to Home</a>
                </p>
            </section>
        ) : (
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
                <button>Sign In</button>
            </form>
            <p>
                Need an Account?<br />
                <span className="line">
                    <a href="#">Sign Up</a>
                </span>
            </p>
        </section>
        )}
        </>
    )
}

export default Login;