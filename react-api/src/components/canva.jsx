import "../CSS/Canva.css";
import { Link, Route, Routes } from "react-router-dom";
import logo from "../assets/imgs/logo/strappberry.png";

export default function Canva() {

    return (
        <div
            className="offcanvas offcanvas-start show bar myCanva"
            tabIndex="-1"
            id="offcanvas"
            aria-labelledby="offcanvasLabel"
            >
                <div className="offcanvas-body">
                    <div className="canva-container">
                        <img src={logo} alt="strappberry logo" />
                        <Link id="prod" to="/lista">
                            <b>Productos</b>
                        </Link>
                        <Link id="cerrar" to="/">
                            <b>Cerrar sesión</b>
                        </Link>
                    </div>
                </div>
            </div>
    );
}
