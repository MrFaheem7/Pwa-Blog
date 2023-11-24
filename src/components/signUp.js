import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
    const navigate = useNavigate();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("ok done ", email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user);
                navigate("/login");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 10 }}>
                <h1>SignUp</h1>
                <div >
                    <form style={{ display: 'flex', flexDirection: 'column', gap: 12, width: "100%" }} onSubmit={handleSubmit}>
                        <div>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                placeholder="Enter your Password"
                            />
                        </div>
                        <div>      <button type="submit">SignUp</button>
                        </div>
                        <h6><Link to='/login'>Already have an Account??</Link></h6>
                    </form>
                </div>
            </div>
        </div >




    );
};

export default SignUp;
