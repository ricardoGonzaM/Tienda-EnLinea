import "../CSS/Productos.css";
import Canva2 from "./canva2";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import car from "../assets/imgs/cart.svg"
import Carrito from "./Carrito.jsx"

const data = "http://127.0.0.1:8000/api/product";

const Productos = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getAllProduct();
    }, []);
    const getAllProduct = async () => {
        const response = await axios.get(`${data}`);
        setProduct(response.data);
    };

    const [carrito, setCarrito] = useState([]);

    function agregarItem(nombre, precio, cantidad, imagen) {
        let newItem = {"nombre": nombre, "precio": precio, "cantidad": cantidad, "imagen": imagen}
        setCarrito((prevCarrito) => [...prevCarrito, newItem])
        console.log(carrito);
    }
    return (
        <div className="container-productos-1">
            <Canva2 />
            <div className="table-container2">
                <header>
                    <h1>
                        <b>
                            Agrega a tu carrito los articulos que deseas comprar
                        </b>
                    </h1>

                    <div className="container-icon">
                        <div className="carrito-compras">
                            <img src={car} alt="car icon"/>
                            <div className="count-products">
                                <span id="contador-productos">{carrito.length}</span>
                            </div>
                        </div>

                        <div className="container-cart-products hidden-cart">
                            <div className="cart-product">
                                <div className="info-cart-product">
                                    <span className="cantidad-producto-carrito">
                                        1
                                    </span>
                                    <p className="titulo-producto-carrito">
                                        Zapatos Nike
                                    </p>
                                    <span className="precio-producto-carrito">
                                        $80
                                    </span>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="icon-close"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                            <div className="cart-total">
                                <h3>Total:</h3>
                                <span className="total-pagar">$200</span>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container-items">
                    {product.map((product) => (
                        <div className="item" key={product.id}>
                            <figure>
                                <Link
                                    to={`/detalle/${product.id}`}
                                >
                                    <img src={product.imagen} alt={product.nombre} />
                                </Link>
                            </figure>
                            <div className="info-container">
                                <div className="info-product">
                                <h2>{product.nombre}</h2>
                                <p className="price">${product.precio}</p>
                            </div>
                            <div className="botonAñ mb-3 text-center">
                                <button onClick={() => agregarItem(product.nombre, product.precio, 1, product.imagen)}>
                                    Añadir al carrito
                                </button>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Productos;
