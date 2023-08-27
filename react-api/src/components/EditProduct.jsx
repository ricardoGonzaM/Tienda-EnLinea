import axios from "axios";
import "../CSS/EditProduct.css";
import Canva from "./canva";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/product/";

const EditProduct = () => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            nombre: nombre,
            precio: precio,
            categoria: categoria,
            descripcion: descripcion,
            imagen: imagen,
        });
        navigate("/lista");
    };

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
    return (
        <div>
            <Canva />
            <div className="container project-container">
                <div className="table-container">
                    <div className="titulo2 text-center">
                        <b>
                            <h1>Editar Producto</h1>
                        </b>
                    </div>
                    <form onSubmit={update} className="agregar-form ">
                        <div className="mt-4">
                            <input
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="form-control"
                                id="nombre"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="mt-4">
                            <input
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                                type="text"
                                className="form-control"
                                id="precio"
                                placeholder="Precio"
                            />
                        </div>

                        <div className="mt-4">
                            <select
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                className="form-control"
                                aria-label="Default select example"
                            >
                                <option selected>Categoria</option>
                                <option value="Electronicos">Electronicos</option>
                                <option value="Ropa">Ropa</option>
                                <option value="Calzado">Calzado</option>
                                <option value="Linea Blanca">Linea Blanca</option>
                            </select>
                        </div>

                        <div className="mt-4">
                            <textarea
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                className="form-control"
                                placeholder="Descripcion"
                                id="descripcion"
                                rows="3"
                            ></textarea>
                        </div>

                        <div className="mt-4">
                            <input
                                value={imagen}
                                onChange={ (e)=> setImagen(e.target.value)}
                                className="form-control"
                                type="text"
                                id="imagen"
                            />
                        </div>

                        <div className="dropdown mt-4 text-center">
                            <button className="btn btn-secondary" type="submit">
                                Guardar Producto
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
