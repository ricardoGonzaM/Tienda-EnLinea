import axios from "axios";
import Canva2 from "./canva2";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import "../CSS/Detalle.css";

const endpoint = "http://127.0.0.1:8000/api/product/";

const Detalle = () => {
    const [product, setProduct] = useState([]);
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`);
            setNombre(response.data.nombre);
            setPrecio(response.data.precio);
            setCategoria(response.data.categoria);
            setDescripcion(response.data.descripcion);
            setImagen(response.data.imagen);
        };
        getProductById();
    }, []);

    const data = "http://127.0.0.1:8000/api/product";
    return (
        <div className="">
            <Canva2 />
            <div className="table-containerDetalle">
                <div className="tituloDetalle text-center">
                    <b>
                        <h1>DETALLE DEL PRODUCTO</h1>
                    </b>
                </div>
                <div className="container-items-detalle md-4">
                    <div className="pic-container">
                        <img src="https://images.pexels.com/photos/1287142/pexels-photo-1287142.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1287142.jpg&fm=jpg" />
                    </div>
                    <div className="nombre-precio">
                        <h1>
                            <b>{nombre}</b>
                        </h1>
                        <br/>
                        <h1>
                            <b>${precio}</b>
                        </h1>
                    </div>
                </div>
                <p className="descripcion-item">{descripcion}</p>
                <button className="carrito-btn mt-5 butonDeAñadir text-center">Agregar al carrito</button>
            </div>
        </div>
    );
};

export default Detalle;
