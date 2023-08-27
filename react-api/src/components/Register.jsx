import React from "react";
import "../CSS/Registro.css";
import { Link, Route, Routes } from "react-router-dom";
import logo from "../assets/imgs/logo/strappberry.png";

const Register = () => {
    return (
        <div className="registro">
            <div className="logo">
                <img src={logo} alt="strappberry logo" />
            </div>
            <div className="row text-center">
                <div className="col-sm-4 offset-4 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off">
                            @csrf
                                <div className="mt-2 mb-2 p-1 d-flex border rounded">
                                    <input
                                        autoFocus
                                        className="form-control txt-input"
                                        name="nombre"
                                        type="text"
                                        placeholder="Nombre"
                                    />
                                </div>

                                <div className="mt-2 mb-2 p-1 d-flex border rounded">
                                    <input
                                        autoFocus
                                        className="form-control txt-input"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="mb-2 p-1 d-flex border rounded">
                                    <input
                                        className="form-control txt-input"
                                        name="contraseña"
                                        type="password"
                                        placeholder="Contraseña"
                                    />
                                </div>

                                <div className="mb-2 p-1 d-flex border rounded">
                                    <input
                                        className="form-control txt-input"
                                        name="contraseña"
                                        type="password"
                                        placeholder="Confirmar contraseña"
                                    />
                                </div>

                                <div className="d-grid gap-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Registrate
                                    </button>
                                </div>

                                <div className="mt-3 mb-3 text-center">
                                    <h6>¿Ya tienes cuenta?</h6>
                                    <Link to="/">Iniciar sesión</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
