import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import "../CSS/Login.css";
import logo from "../assets/imgs/logo/strappberry.png";

const Login = () => {
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try{
            await axios.post('/login', {user_email: email,password});
            setEmail("");
            setPassword("");
            navigate("/");
        } catch(e){
            console.log(e);
        }
    }

    return (
        <div className="login">
            <div className="logo">
                <img src={logo} alt="strappberry logo" />
            </div>
            <div className="row text-center">
                <div className="col-sm-4 offset-4 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="mt-2 mb-2 p-1 d-flex border rounded">
                                    <input
                                        autoFocus
                                        className="form-control txt-input"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="mb-2 p-1 d-flex border rounded">
                                    <input
                                        className="form-control txt-input"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}
                                        placeholder="Password"
                                    />
                                </div>

                                <div className="d-grid gap-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn"
                                    >
                                        Ingresar
                                    </button>
                                </div>

                                <div className="mt-3 mb-3 text-center">
                                    <h6>¿Aún no tienes cuenta?</h6>
                                    <Link to="/registro">Registrate</Link>
                                </div>
                                <div className="mt-3 mb-3 text-center">
                                    <h6>
                                        Ricardo Gonzalez Mendez |
                                        Ricardogonzalezmendez117@hotmail.com
                                    </h6>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
