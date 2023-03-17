import React, { useState, useRef } from "react";
import axios from "../../api/axios";

const OTP_URL = "/enter-otp";

function Enterotp() {
  const errRef = useRef(null);
  const [errMsg, setErrMsg] = useState("");

  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(OTP_URL, JSON.stringify({ otp }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
    } catch (err) {
      if (!err?.response) {
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 400) {
          setErrMsg("User Not Found");
        } else {
          setErrMsg("Registration Failed");
        }
        errRef.current.focus();
      }
    }
  };

  return (
    <div className="auth">
      <section className="my-auto auth-section border">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <div className="row">
          <div className="col text-center">
            <h1>Enter Otp</h1>
            <p>Enter the OTP sent to your Email to verify your identity</p>
            <div className="inputfield">
              {otp.map((data, index) => {
                return (
                  <input
                    className="input"
                    text="text"
                    name="otp"
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
            </div>
            <p>OTP Entered - {otp.join("")}</p>
            <p className="otp-btn">
              <button
                className="btn btn-secondary mr-2"
                onClick={(e) => setOtp([...otp.map((v) => "")])}
              >
                Clear
              </button>
              <button className="btn btn-primary" onClick={handleClick}>
                Verify OTP
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Enterotp;
