import React, { useRef, useState } from 'react';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [err, setErr] = useState([]);
    const [status, setStatus] = useState(null);

    const errRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErr([]);
        setStatus(null);
        
        try {
            const response = await axios.post("/forgot-password", JSON.stringify({email}),
            {
                headers: { 'Content-Type' : 'application/json'},
                withCredentials: true
            });
            setStatus(response.data.status)
            setEmail('');
        } catch (err) {
            if (!err?.response) {
                if (!err?.response){
                    setErr('No Server Response');
                } else if (err.response?.status === 409) {
                    setErr('Email already Taken');
                } else {
                    setErr('Failed To Submit');
                }
                errRef.current.focus();
            }
        }
    }
    return (
        <section>
            <p ref={errRef} className={err ? "errmsg" : "offscreen"}>{err}</p>
            <h1>Enter Email Address</h1>
            <form on onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email"
                id="email" 
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required/>
                <button>Submit</button>
            </form>
            <p>
                Have an Account?<br />
                <span className="line">
                    <a href="#">Sign IN</a>
                </span>
            </p>
        </section>
    )
}

export default ForgotPassword