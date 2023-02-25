import React, { useState } from "react";

function Enterotp() {

    const [email, setEmail] = useState('')

    return(
        <section>
               <h1>Enter Otp</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email"
                id="email" 
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required/>
            </form>
        </section>
    )
}

export default Enterotp;