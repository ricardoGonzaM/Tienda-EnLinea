import React, { useEffect, useState } from "react";
import "../CSS/Lista.css";
import Canva from "./canva";
import axios from "axios";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import swal from "sweetalert2";

const Lista = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getAllProduct();
    }, []);
    const getAllProduct = async () => {
        const response = await axios.get("http://127.0.0.1:8000/api/product");
        setProduct(response.data);
        console.log(response);
    };
    const deleteProduct = async (id) => {
        swal.fire({
            title: "Eliminar",
            text: "Estas seguro que deseas eliminar este Producto?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, Eliminar!",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
        }).then((result) => {
            if (result.isConfirmed) {
                (async () => {
                await axios.delete(`http://127.0.0.1:8000/api/product/${id}`);
                getAllProduct();
                })();
                swal.fire("El producto ha sido Eliminado!", "", "success");
            } else if (result.isDenied) {
                swal.fire("El producto no ha sido Eliminado!", "", "info");
            }
        });
    };
    return (
        <div className="container project-container">
            <Canva />
            <div className="table-container4">
                <div className="titulo text-center">
                    <b>
                        <h1>PRODUCTOS</h1>
                    </b>
                </div>
                <table className="table table-striped mt-4 text-center">
                    <thead>
                        <tr className="tablecolor">
                            <th scope="col">Imagen</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((product) => (
                            <tr key={product.id}>
                                <td>{product.imagen}</td>
                                <td>{product.nombre}</td>
                                <td>${product.precio}</td>
                                <td>
                                    <Link
                                        to={`/edit/${product.id}`}
                                        className="btn btn-info"
                                    >
                                        Editar
                                    </Link>
                                    <button
                                        onClick={() =>
                                            deleteProduct(product.id)
                                        }
                                        type="button"
                                        className="btn btn-danger"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="text-center">
                    <Link to={"/agregar"} className="btn btn-info">
                        Nuevo Producto
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Lista;
